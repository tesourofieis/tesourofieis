/**
 * Web Notifications Service
 * Handles browser notifications for web platform with service worker support
 */

export interface WebNotificationPermission {
  status: "default" | "granted" | "denied";
}

export interface WebNotificationSchedule {
  id: string;
  title: string;
  body?: string;
  triggerAt: Date;
  url?: string;
  icon?: string;
  badge?: string;
}

export class WebNotificationService {
  private scheduledNotifications: Map<string, ReturnType<typeof setTimeout>> = new Map();
  private scheduledDetails: Map<string, WebNotificationSchedule> = new Map();
  private static readonly MAX_TIMEOUT = 2147483647;
  private isServiceWorkerRegistered = false;

  constructor() {
    if (this.isBrowser()) {
      this.initializeServiceWorker();
    }
  }

  /**
   * Check if we're in a browser environment
   */
  private isBrowser(): boolean {
    return typeof globalThis !== "undefined" && "window" in globalThis;
  }

  /**
   * Check if browser supports notifications
   */
  isSupported(): boolean {
    try {
      return eval('typeof window !== "undefined" && "Notification" in window');
    } catch {
      return false;
    }
  }

  /**
   * Get current notification permission status
   */
  getPermissionStatus(): WebNotificationPermission {
    if (!this.isSupported()) {
      return { status: "denied" };
    }

    try {
      const permission = eval("window.Notification.permission");
      return { status: permission };
    } catch {
      return { status: "denied" };
    }
  }

  /**
   * Request notification permission from user
   */
  async requestPermission(): Promise<WebNotificationPermission> {
    if (!this.isSupported()) {
      return { status: "denied" };
    }

    try {
      const permission = await eval("window.Notification.requestPermission()");
      return { status: permission };
    } catch (error) {
      console.error("Error requesting notification permission:", error);
      return { status: "denied" };
    }
  }

  /**
   * Show immediate notification
   */
  async showNotification(options: {
    title: string;
    body?: string;
    icon?: string;
    badge?: string;
    data?: any;
    url?: string;
  }): Promise<boolean> {
    const permissionStatus = this.getPermissionStatus();
    if (permissionStatus.status !== "granted") {
      console.log("Notification permission not granted");
      return false;
    }

    try {
      // Try service worker first for better background support
      if (await this.tryServiceWorkerNotification(options)) {
        return true;
      }

      // Fallback to regular notification
      return this.showRegularNotification(options);
    } catch (error) {
      console.error("Error showing notification:", error);
      return false;
    }
  }

  /**
   * Try to show notification via service worker
   */
  private async tryServiceWorkerNotification(options: {
    title: string;
    body?: string;
    icon?: string;
    badge?: string;
    data?: any;
    url?: string;
  }): Promise<boolean> {
    try {
      if (
        this.isServiceWorkerRegistered &&
        eval('typeof navigator !== "undefined" && navigator.serviceWorker')
      ) {
        const registration = await eval("navigator.serviceWorker.ready");
        await registration.showNotification(options.title, {
          body: options.body,
          icon: options.icon || "/favicon.png",
          badge: options.badge || "/favicon.png",
          data: {
            url: options.url,
            ...options.data,
          },
          tag: `tesouro-${Date.now()}`,
          requireInteraction: false,
        });
        return true;
      }
    } catch (error) {
      console.log("Service worker notification failed:", error);
    }
    return false;
  }

  /**
   * Show regular browser notification
   */
  private showRegularNotification(options: {
    title: string;
    body?: string;
    icon?: string;
    badge?: string;
    data?: any;
    url?: string;
  }): boolean {
    try {
      const NotificationConstructor = eval("window.Notification");
      const notification = new NotificationConstructor(options.title, {
        body: options.body,
        icon: options.icon || "/favicon.png",
        badge: options.badge || "/favicon.png",
        data: options.data,
      });

      // Handle notification click
      notification.onclick = () => {
        try {
          eval("window.focus()");
          if (options.url) {
            eval(`window.location.href = "${options.url}"`);
          }
          notification.close();
        } catch (e) {
          console.error("Error handling notification click:", e);
        }
      };

      return true;
    } catch (error) {
      console.error("Error showing regular notification:", error);
      return false;
    }
  }

  /**
   * Schedule a notification for future delivery
   */
  scheduleNotification(schedule: WebNotificationSchedule): boolean {
    const now = new Date();
    const delay = schedule.triggerAt.getTime() - now.getTime();

    // Don't schedule past notifications
    if (delay <= 0) {
      console.log(`Skipping past notification: ${schedule.title}`);
      return false;
    }

    // Clear existing scheduled notification with same ID
    this.cancelScheduledNotification(schedule.id);

    this.scheduledDetails.set(schedule.id, schedule);

    // ALWAYS use JavaScript timers for reliable scheduling
    // Service worker is additional backup, not primary
    this.scheduleWithTimer(schedule, delay);

    // Also try service worker as backup
    if (this.isServiceWorkerRegistered) {
      this.scheduleNotificationWithSW(schedule);
    }

    return true;
  }

  /**
   * Schedule notification with JavaScript timer (fallback)
   */
  private scheduleWithTimer(schedule: WebNotificationSchedule, delay: number): void {
    const safeDelay = Math.min(delay, WebNotificationService.MAX_TIMEOUT);

    const timeoutId = setTimeout(() => {
      const remaining = schedule.triggerAt.getTime() - new Date().getTime();

      if (remaining > 0) {
        this.scheduleWithTimer(schedule, remaining);
        return;
      }

      this.showNotification({
        title: schedule.title,
        body: schedule.body,
        icon: schedule.icon,
        badge: schedule.badge,
        url: schedule.url,
        data: { scheduleId: schedule.id },
      });

      // Remove from scheduled map
      this.scheduledNotifications.delete(schedule.id);
      this.scheduledDetails.delete(schedule.id);
    }, safeDelay);

    this.scheduledNotifications.set(schedule.id, timeoutId);
    console.log(
      `Scheduled notification "${schedule.title}" for ${schedule.triggerAt.toLocaleString()}`,
    );
  }

  /**
   * Schedule notification through service worker
   */
  private async scheduleNotificationWithSW(schedule: WebNotificationSchedule): Promise<void> {
    try {
      const registration = await eval("navigator.serviceWorker.ready");

      registration.active?.postMessage({
        type: "SCHEDULE_NOTIFICATION",
        payload: {
          id: schedule.id,
          title: schedule.title,
          body: schedule.body,
          triggerAt: schedule.triggerAt.toISOString(),
          url: schedule.url,
          icon: schedule.icon || "/favicon.png",
          data: { scheduleId: schedule.id },
        },
      });

      console.log(`📅 Scheduled background notification "${schedule.title}" via Service Worker`);
    } catch (error) {
      console.error("Error scheduling notification with service worker:", error);
      // Fallback to timer
      const delay = schedule.triggerAt.getTime() - new Date().getTime();
      this.scheduleWithTimer(schedule, delay);
    }
  }

  /**
   * Cancel a scheduled notification
   */
  cancelScheduledNotification(id: string): boolean {
    // Cancel timer-based notification
    const timeoutId = this.scheduledNotifications.get(id);
    if (timeoutId) {
      clearTimeout(timeoutId);
      this.scheduledNotifications.delete(id);
    }

    this.scheduledDetails.delete(id);

    // Cancel service worker notification
    if (this.isServiceWorkerRegistered) {
      this.cancelNotificationWithSW(id);
    }

    console.log(`Cancelled scheduled notification: ${id}`);
    return true;
  }

  /**
   * Cancel notification through service worker
   */
  private async cancelNotificationWithSW(id: string): Promise<void> {
    try {
      const registration = await eval("navigator.serviceWorker.ready");

      registration.active?.postMessage({
        type: "CANCEL_NOTIFICATION",
        payload: id,
      });
    } catch (error) {
      console.error("Error cancelling notification with service worker:", error);
    }
  }

  /**
   * Cancel all scheduled notifications
   */
  cancelAllScheduledNotifications(): void {
    // Cancel timer-based notifications
    for (const timeoutId of this.scheduledNotifications.values()) {
      clearTimeout(timeoutId);
    }
    this.scheduledNotifications.clear();
    this.scheduledDetails.clear();

    // Cancel service worker notifications
    if (this.isServiceWorkerRegistered) {
      // Could send message to service worker to clear all
    }

    console.log("Cancelled all scheduled notifications");
  }

  /**
   * Get list of currently scheduled notifications
   */
  getScheduledNotifications(): string[] {
    return Array.from(this.scheduledNotifications.keys());
  }

  getScheduledNotificationDetails(): WebNotificationSchedule[] {
    return Array.from(this.scheduledDetails.values()).sort(
      (a, b) => a.triggerAt.getTime() - b.triggerAt.getTime(),
    );
  }

  /**
   * Test notification (for debugging)
   */
  async testNotification(): Promise<boolean> {
    console.log("🧪 Testing immediate notification...");
    return this.showNotification({
      title: "Teste - Tesouro dos Fiéis",
      body: "Se vê esta notificação, o sistema está a funcionar!",
      icon: "/favicon.png",
    });
  }

  /**
   * Get debug info about current state
   */
  getDebugInfo(): any {
    const permission = this.getPermissionStatus();
    return {
      supported: this.isSupported(),
      permission: permission.status,
      serviceWorkerRegistered: this.isServiceWorkerRegistered,
      scheduledCount: this.scheduledNotifications.size,
      scheduledIds: Array.from(this.scheduledNotifications.keys()),
      currentTime: new Date().toLocaleString("pt-PT"),
    };
  }

  /**
   * Schedule a test notification in 5 seconds (for debugging)
   */
  scheduleTestNotification(): boolean {
    const testTime = new Date();
    testTime.setSeconds(testTime.getSeconds() + 5);

    return this.scheduleNotification({
      id: "test-notification",
      title: "⏰ Teste de Agendamento",
      body: "Esta notificação foi agendada há 5 segundos!",
      triggerAt: testTime,
      icon: "/favicon.png",
    });
  }

  /**
   * Schedule a daily recurring notification
   */
  scheduleDailyNotification(schedule: {
    id: string;
    title: string;
    body?: string;
    hour: number;
    minute: number;
    url?: string;
  }): boolean {
    const now = new Date();

    // Calculate next occurrence
    const nextTrigger = new Date();
    nextTrigger.setHours(schedule.hour, schedule.minute, 0, 0);

    // If time has passed today, schedule for tomorrow
    if (nextTrigger <= now) {
      nextTrigger.setDate(nextTrigger.getDate() + 1);
    }

    console.log(
      `📅 Scheduling daily notification: ${schedule.title} at ${nextTrigger.toLocaleString("pt-PT")}`,
    );

    return this.scheduleNotification({
      id: schedule.id,
      title: schedule.title,
      body: schedule.body,
      triggerAt: nextTrigger,
      url: schedule.url,
      icon: "/favicon.png",
    });
  }

  /**
   * Reschedule a daily notification after it fires (for recurring)
   */
  private rescheduleDailyNotification(
    scheduleId: string,
    hour: number,
    minute: number,
    title: string,
    body?: string,
    url?: string,
  ): void {
    const nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + 1);
    nextDay.setHours(hour, minute, 0, 0);

    setTimeout(() => {
      this.scheduleNotification({
        id: scheduleId,
        title: title,
        body: body,
        triggerAt: nextDay,
        url: url,
        icon: "/favicon.png",
      });
    }, 1000); // Schedule the next one after 1 second
  }

  /**
   * Initialize service worker with enhanced notification support
   */
  private async initializeServiceWorker(): Promise<void> {
    if (!this.isBrowser()) {
      return;
    }

    try {
      const swSupported = eval('typeof navigator !== "undefined" && "serviceWorker" in navigator');
      if (!swSupported) {
        console.log("Service Worker not supported");
        return;
      }

      // Register the main service worker
      const registration = await eval('navigator.serviceWorker.register("/sw.js", { scope: "/" })');
      console.log("🚀 Service Worker registered successfully:", registration.scope);

      // Wait for service worker to be ready
      await eval("navigator.serviceWorker.ready");

      // Set up message listener for communication with service worker
      eval(`
        navigator.serviceWorker.addEventListener('message', (event) => {
          if (event.data?.type === 'NOTIFICATION_CLICK') {
            const { url } = event.data;
            if (url && url !== '/') {
              window.location.href = url;
            }
          }
        });
      `);

      this.isServiceWorkerRegistered = true;

      // Enable background sync if available
      this.enableBackgroundSync();
    } catch (error) {
      console.error("❌ Service Worker registration failed:", error);
      this.isServiceWorkerRegistered = false;
    }
  }

  /**
   * Enable background sync for notifications (PWA feature)
   */
  private async enableBackgroundSync(): Promise<void> {
    try {
      const registration = await eval("navigator.serviceWorker.ready");

      // Check if background sync is supported
      if (eval('"sync" in window.ServiceWorkerRegistration.prototype')) {
        try {
          await registration.sync.register("notification-sync");
          console.log("🔄 Background sync enabled for notifications");
        } catch (syncError: any) {
          // Background sync permission denied is common, don't treat as error
          console.log("ℹ️ Background sync permission denied (this is normal for some browsers)");
        }
      } else {
        console.log("ℹ️ Background Sync not supported (this is normal for some browsers)");
      }
    } catch (error: any) {
      console.log("ℹ️ Background sync setup failed:", error.message);
    }
  }
}

// Create singleton instance
export const webNotificationService = new WebNotificationService();
