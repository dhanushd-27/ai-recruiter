"use client";

import { ThreadItem } from "./thread-item";

export interface Thread {
  id: string;
  title: string;
  lastMessage?: string;
  timestamp?: Date;
  unreadCount?: number;
}

interface ThreadListProps {
  threads: Thread[];
  selectedThreadId?: string;
  onThreadSelect?: (threadId: string) => void;
  className?: string;
}

export const ThreadList = ({
  threads,
  selectedThreadId,
  onThreadSelect,
  className = "",
}: ThreadListProps) => {
  return (
    <div className={`thread-list flex flex-col gap-2 ${className}`}>
      {threads.map((thread) => (
        <ThreadItem
          key={thread.id}
          thread={thread}
          isSelected={thread.id === selectedThreadId}
          onClick={() => onThreadSelect?.(thread.id)}
        />
      ))}
      {threads.length === 0 && (
        <div className="text-center text-gray-500 py-8">
          No threads yet. Start a new chat!
        </div>
      )}
    </div>
  );
};

