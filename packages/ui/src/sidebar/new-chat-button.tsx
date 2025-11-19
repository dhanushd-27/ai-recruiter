"use client";

interface NewChatButtonProps {
  onClick?: () => void;
  className?: string;
}

export const NewChatButton = ({
  onClick,
  className = "",
}: NewChatButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`new-chat-button w-full px-4 py-2.5 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 ${className}`}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
      <span>New Chat</span>
    </button>
  );
};

