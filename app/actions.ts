"use server";

import { openai } from "@ai-sdk/openai";
import { streamObject } from "ai";
import { createStreamableValue } from "ai/rsc";
import { notificationsSchema } from "./types";
export async function getNotifications(input: string) {
  "use server";
  const stream = createStreamableValue();

  (async () => {
    const { partialObjectStream } = await streamObject({
      model: openai("gpt-3.5-turbo"),
      system: "You generate three notifications for a messages app.",
      prompt: input,
      schema: notificationsSchema,
    });

    for await (const partialObject of partialObjectStream) {
      stream.update(partialObject);
    }

    stream.done();
  })();

  return { object: stream.value };
}
