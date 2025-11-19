"use client";

interface UserProfileProps {
  name?: string;
  email?: string;
  avatar?: string;
  onProfileClick?: () => void;
  className?: string;
}

export const UserProfile = ({
  name = "User",
  email,
  avatar,
  onProfileClick,
  className = "",
}: UserProfileProps) => {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <button
      onClick={onProfileClick}
      className={`user-profile flex items-center gap-3 w-full p-2 rounded-lg hover:bg-gray-100 transition-colors ${className}`}
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-medium text-sm">
        {avatar ? (
          <img src={avatar} alt={name} className="w-full h-full rounded-full object-cover" />
        ) : (
          <span>{getInitials(name)}</span>
        )}
      </div>
      <div className="flex-1 min-w-0 text-left">
        <div className="font-medium text-sm text-gray-800 truncate">{name}</div>
        {email && (
          <div className="text-xs text-gray-500 truncate">{email}</div>
        )}
      </div>
      <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
};

