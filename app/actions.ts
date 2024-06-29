"use server";

import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { notificationsSchema } from "./types";

export async function getNotifications(input: string) {
  "use server";

  const { object: notifications } = await generateObject({
    model: openai("gpt-3.5-turbo"),
    system: "You generate three notifications for a messages app.",
    prompt: input,
    schema: notificationsSchema,
  });

  return { notifications };
}
