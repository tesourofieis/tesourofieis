import { describe, it, expect, vi, beforeEach } from "vitest";
import webpush from "web-push";
import { db } from "astro:db";
import { GET } from "../../pages/api/send-notifications";

// Mock webpush
vi.mock("web-push");

// Mock astro:db
vi.mock("astro:db", () => ({
  db: {
    select: vi.fn().mockReturnValue({
      from: vi.fn().mockReturnValue({
        all: vi.fn(),
      }),
    }),
  },
  PushSubscriptions: { name: "push_subscriptions" },
}));

describe("test-notifications API", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should send test notifications to all subscriptions", async () => {
    // Mock the database to return some test subscriptions
    const mockSubscriptions = [
      { id: 1, endpoint: "endpoint1", p256dh: "key1", auth: "auth1" },
      { id: 2, endpoint: "endpoint2", p256dh: "key2", auth: "auth2" },
    ];

    vi.mocked(db.select).mockReturnValue({
      from: vi.fn().mockReturnValue({
        all: vi.fn().mockResolvedValue(mockSubscriptions),
      }),
    } as any);

    // Mock the webpush.sendNotification function
    vi.mocked(webpush.sendNotification).mockResolvedValue(undefined as any);

    // Call the API function
    const response = await GET();

    // Check if the response is correct
    expect(response.status).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toEqual({ success: true });

    // Check if sendNotification was called for each subscription
    expect(webpush.sendNotification).toHaveBeenCalledTimes(2);
    expect(webpush.sendNotification).toHaveBeenCalledWith(
      { endpoint: "endpoint1", keys: { p256dh: "key1", auth: "auth1" } },
      JSON.stringify({
        title: "Test Notification",
        body: "This is a test notification",
      }),
    );
    expect(webpush.sendNotification).toHaveBeenCalledWith(
      { endpoint: "endpoint2", keys: { p256dh: "key2", auth: "auth2" } },
      JSON.stringify({
        title: "Test Notification",
        body: "This is a test notification",
      }),
    );
  });

  it("should handle the case when there are no subscriptions", async () => {
    // Mock an empty subscription list
    vi.mocked(db.select).mockReturnValue({
      from: vi.fn().mockReturnValue({
        all: vi.fn().mockResolvedValue([]),
      }),
    } as any);

    // Mock the webpush.sendNotification function
    vi.mocked(webpush.sendNotification).mockResolvedValue(undefined as any);

    // Call the API function
    const response = await GET();

    // Check if the response is correct
    expect(response.status).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toEqual({ success: true });

    // Check that sendNotification was not called
    expect(webpush.sendNotification).not.toHaveBeenCalled();
  });
});
