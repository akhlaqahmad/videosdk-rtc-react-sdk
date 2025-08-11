import React, { useState } from 'react';
import { usePubSub } from "@videosdk.live/react-sdk";
import { useMeeting } from "@videosdk.live/react-sdk";
import { nameTructed } from "../utils/helper";

const SystemEvents = () => {
  const [systemEvents, setSystemEvents] = useState([]);
  const mMeeting = useMeeting();

  // Handle hand-raise events
  usePubSub("RAISE_HAND", {
    onMessageReceived: (data) => {
      const localParticipantId = mMeeting?.localParticipant?.id;
      const { senderId, senderName } = data;
      const isLocal = senderId === localParticipantId;

      const event = {
        id: Date.now(),
        type: 'hand-raise',
        message: `${isLocal ? "You" : nameTructed(senderName, 15)} raised hand 🖐🏼`,
        timestamp: new Date(),
        isLocal
      };

      setSystemEvents(prev => [...prev, event]);

      // Auto-remove after 5 seconds
      setTimeout(() => {
        setSystemEvents(prev => prev.filter(e => e.id !== event.id));
      }, 5000);
    },
  });

  // Handle recording events
  usePubSub("RECORDING_STATUS", {
    onMessageReceived: (data) => {
      const event = {
        id: Date.now(),
        type: 'recording',
        message: `Recording ${data.status === 'started' ? 'started' : 'stopped'} 📹`,
        timestamp: new Date(),
        isLocal: false
      };

      setSystemEvents(prev => [...prev, event]);

      // Auto-remove after 5 seconds
      setTimeout(() => {
        setSystemEvents(prev => prev.filter(e => e.id !== event.id));
      }, 5000);
    },
  });

  if (systemEvents.length === 0) return null;

  return (
    <div className="fixed top-20 right-4 z-50 space-y-2 max-w-sm">
      {systemEvents.map((event) => (
        <div
          key={event.id}
          className={`p-3 rounded-lg shadow-lg border-l-4 transition-all duration-300 ${
            event.type === 'hand-raise'
              ? 'bg-brand-50 border-brand-500 text-brand-900'
              : 'bg-accent-50 border-accent-500 text-accent-900'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{event.message}</span>
            <button
              onClick={() => setSystemEvents(prev => prev.filter(e => e.id !== event.id))}
              className="ml-2 text-gray-500 hover:text-gray-700"
              aria-label="Dismiss notification"
            >
              ×
            </button>
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {event.timestamp.toLocaleTimeString()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SystemEvents;
