"use client";

import { Thread } from "./thread-list";

interface ThreadItemProps {
  thread: Thread;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

export const ThreadItem = ({
  thread,
  isSelected = false,
  onClick,
  className = "",
}: ThreadItemProps) => {
  const formatTimestamp = (date?: Date) => {
    if (!date) return "";
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <div
      onClick={onClick}
      className={`thread-item p-3 rounded-lg cursor-pointer transition-colors ${
        isSelected
          ? "bg-blue-100 border border-blue-300"
          : "bg-gray-50 hover:bg-gray-100 border border-transparent"
      } ${className}`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="font-medium text-sm truncate">{thread.title}</div>
          {thread.lastMessage && (
            <div className="text-xs text-gray-600 truncate mt-1">
              {thread.lastMessage}
            </div>
          )}
        </div>
        <div className="flex flex-col items-end gap-1 flex-shrink-0">
          {thread.timestamp && (
            <span className="text-xs text-gray-500">
              {formatTimestamp(thread.timestamp)}
            </span>
          )}
          {thread.unreadCount && thread.unreadCount > 0 && (
            <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-0.5 min-w-[20px] text-center">
              {thread.unreadCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

