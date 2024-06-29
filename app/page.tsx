"use client";

import { readStreamableValue } from "ai/rsc";
import { useState } from "react";
import { getNotifications, getStreamedNotifications } from "./actions";
import { notification, notifications } from "./types";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

export default function Home() {
  const [generationStream, setGenerationStream] = useState<notifications>();
  const [generation, setGeneration] = useState<notifications>();

  return (
    <div className="flex flex-col py-24 px-48 h-screen">
      <div className="grid bg-gray-100/10 grid-cols-[1fr_1fr] gap-48">
        <div className="">
          <button
            onClick={async () => {
              const { notifications } = await getNotifications(
                "Messages during finals week."
              );
              setGeneration(notifications);
            }}
          >
            Notifications
          </button>

          <div className="p-4">
            {generation?.notifications?.map((notification) => (
              <Card key={notification.name} notification={notification} />
            ))}
          </div>
        </div>
        <div className="">
          <button
            onClick={async () => {
              const { object } = await getStreamedNotifications(
                "Messages during finals week."
              );
              for await (const partialObject of readStreamableValue(object)) {
                if (partialObject) {
                  setGenerationStream(partialObject);
                }
              }
            }}
          >
            Stream Notifications
          </button>

          <div className="p-4">
            {generationStream?.notifications?.map((notification) => (
              <Card key={notification.name} notification={notification} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ notification }: { notification: notification }) {
  return (
    <div className="border mt-4 border-b border-gray-200 rounded-xl p-4">
      <h5 className="text-lg font-bold">{notification.name}</h5>
      <p className="text-gray-600">{notification.message}</p>
      <p className="text-sm text-gray-500">
        {notification.minutesAgo} minutes ago
      </p>
    </div>
  );
}
