import { describe, expect, test } from "bun:test";
import type { NotificationResponse } from "expo-notifications";
import {
  type NotificationNavigationSource,
  startNotificationNavigation,
} from "../../src/services/notification-navigation";

const defaultAction = "expo.modules.notifications.actions.DEFAULT";

function response(
  url: string | number | null = "devocionario/dia/angelus",
  date = 1,
): NotificationResponse {
  return {
    actionIdentifier: defaultAction,
    notification: {
      date,
      request: {
        identifier: "angelus",
        trigger: { type: "unknown" },
        content: {
          title: "Angelus",
          subtitle: null,
          body: null,
          categoryIdentifier: null,
          sound: null,
          data: { url },
        },
      },
    },
  };
}

function harness(initial: NotificationResponse | null = null) {
  let lastResponse = initial;
  let listener: ((event: NotificationResponse) => void) | undefined;
  const paths: string[] = [];
  const notifications: NotificationNavigationSource = {
    DEFAULT_ACTION_IDENTIFIER: defaultAction,
    getLastNotificationResponse: () => lastResponse,
    clearLastNotificationResponse: () => {
      lastResponse = null;
    },
    addNotificationResponseReceivedListener: (callback) => {
      listener = callback;
      return {
        remove: () => {
          listener = undefined;
        },
      };
    },
  };
  return {
    paths,
    start: () => startNotificationNavigation(notifications, (path) => paths.push(path)),
    emit: (event: NotificationResponse) => {
      lastResponse = event;
      listener?.(event);
    },
  };
}

describe("notification navigation", () => {
  test("opens the stored launch destination once the navigator is ready", () => {
    const app = harness(response());
    expect(app.paths).toEqual([]);
    app.start();
    expect(app.paths).toEqual(["/devocionario/dia/angelus"]);
  });

  test("handles taps while running and accepts existing absolute paths", () => {
    const app = harness();
    app.start();
    app.emit(response("/devocionario/oficio/laudes"));
    expect(app.paths).toEqual(["/devocionario/oficio/laudes"]);
  });

  test("deduplicates launch and listener delivery without dropping later recurring reminders", () => {
    const tap = response();
    const app = harness(tap);
    app.start();
    app.emit(tap);
    app.emit(response("devocionario/dia/angelus", 2));
    expect(app.paths).toEqual(["/devocionario/dia/angelus", "/devocionario/dia/angelus"]);
  });

  test("does not replay a handled response when the subscription restarts", () => {
    const app = harness(response());
    app.start()();
    app.start();
    expect(app.paths).toEqual(["/devocionario/dia/angelus"]);
  });

  test("ignores missing, empty, and malformed destinations", () => {
    const app = harness();
    app.start();
    for (const url of [null, "", "   ", 42]) app.emit(response(url));
    expect(app.paths).toEqual([]);
  });

  test("ignores notification actions other than a normal tap", () => {
    const app = harness();
    app.start();
    app.emit({ ...response(), actionIdentifier: "dismiss" });
    expect(app.paths).toEqual([]);
  });

  test("removes the listener during cleanup", () => {
    const app = harness();
    app.start()();
    app.emit(response());
    expect(app.paths).toEqual([]);
  });
});
