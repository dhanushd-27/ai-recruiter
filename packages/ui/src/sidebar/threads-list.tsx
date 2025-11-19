"use client";

import { ThreadList, Thread } from "../chat-threads";

interface ThreadsListProps {
  threads: Thread[];
  selectedThreadId?: string;
  onThreadSelect?: (threadId: string) => void;
  className?: string;
}

export const ThreadsList = ({
  threads,
  selectedThreadId,
  onThreadSelect,
  className = "",
}: ThreadsListProps) => {
  return (
    <div className={`sidebar-threads-list ${className}`}>
      <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2 px-2">
        Threads
      </h3>
      <ThreadList
        threads={threads}
        selectedThreadId={selectedThreadId}
        onThreadSelect={onThreadSelect}
      />
    </div>
  );
};

