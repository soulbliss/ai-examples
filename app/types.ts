import { z } from "zod";

export const notificationSchema = z.object({
  name: z.string().describe("Name of a characters from batman comics."),
  message: z.string().describe("Do not use emojis or links."),
  minutesAgo: z.number(),
});

export const notificationsSchema = z.object({
  notifications: z.array(notificationSchema),
});

export type notifications = z.infer<typeof notificationsSchema>;
export type notification = z.infer<typeof notificationSchema>;
