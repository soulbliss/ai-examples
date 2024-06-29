"use client";

import { useState } from "react";
import { getNotifications } from "./actions";
import { notification, notifications } from "./types";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

const notification1 = [
  {
    name: "Batman",
    message: "Batman is the best superhero",
    minutesAgo: 10,
  },
  {
    name: "Superman",
    message: "Superman is the best superhero",
    minutesAgo: 10,
  },
];
export default function Home() {
  const [generation, setGeneration] = useState<notifications>();

  return (
    <div className="flex flex-col py-24 items-center h-screen">
      <button
        onClick={async () => {
          const { notifications } = await getNotifications(
            "Messages during finals week."
          );
          console.log(notifications);
          setGeneration(notifications);
        }}
      >
        View Notifications
      </button>

      <div className="p-4">
        {generation?.notifications.map((notification) => (
          <Card key={notification.name} notification={notification} />
        ))}
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
