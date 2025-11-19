"use client";

import { useState } from "react";
import { Sidebar } from "@repo/ui/sidebar";
import { ChatInput } from "@repo/ui/input";
import type { Thread } from "@repo/ui/chat-threads";

export default function ChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedThreadId, setSelectedThreadId] = useState<string | undefined>("1");
  const [threads, setThreads] = useState<Thread[]>([
    {
      id: "1",
      title: "Getting started with React",
      lastMessage: "How do I set up a new React project?",
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      unreadCount: 2,
    },
    {
      id: "2",
      title: "TypeScript questions",
      lastMessage: "What's the difference between interface and type?",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      unreadCount: 0,
    },
    {
      id: "3",
      title: "Next.js routing",
      lastMessage: "How does the app router work?",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
      unreadCount: 1,
    },
  ]);

  const handleSendMessage = (message: string, agentId?: string) => {
    console.log("Sending message:", message, "with agent:", agentId);
    // TODO: Implement message sending logic
  };

  const handleNewChat = () => {
    const newThread: Thread = {
      id: Date.now().toString(),
      title: "New Chat",
      timestamp: new Date(),
    };
    setThreads([newThread, ...threads]);
    setSelectedThreadId(newThread.id);
  };

  const selectedThread = threads.find((t) => t.id === selectedThreadId);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        branchName="main"
        threads={threads}
        selectedThreadId={selectedThreadId}
        onThreadSelect={setSelectedThreadId}
        onNewChat={handleNewChat}
        className="w-80 flex-shrink-0"
      />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Chat Header */}
        <div className="border-b border-gray-200 p-4 bg-white">
          <h1 className="text-xl font-semibold">
            {selectedThread?.title || "Select a thread"}
          </h1>
          {selectedThread?.lastMessage && (
            <p className="text-sm text-gray-500 mt-1">{selectedThread.lastMessage}</p>
          )}
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {selectedThreadId ? (
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="text-center text-gray-500 py-12">
                <p className="text-lg font-medium mb-2">Start a conversation</p>
                <p className="text-sm">Select an agent and type your message below</p>
              </div>
              {/* Messages will be rendered here */}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-gray-500">
                <p className="text-lg font-medium mb-2">No thread selected</p>
                <p className="text-sm">Select a thread from the sidebar or create a new chat</p>
              </div>
            </div>
          )}
        </div>

        {/* Input Box */}
        <div className="border-t border-gray-200 p-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <ChatInput
              onSend={handleSendMessage}
              placeholder="Type your message..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

