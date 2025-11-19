"use client";

interface SidebarHeaderProps {
  branchName?: string;
  onToggle?: () => void;
  className?: string;
}

export const SidebarHeader = ({
  branchName = "main",
  onToggle,
  className = "",
}: SidebarHeaderProps) => {
  return (
    <div className={`sidebar-header flex items-center justify-between p-4 border-b border-gray-200 ${className}`}>
      <div className="flex items-center gap-2">
        <span className="text-xs font-medium text-gray-500">Branch:</span>
        <span className="text-sm font-semibold text-gray-800">{branchName}</span>
      </div>
      {onToggle && (
        <button
          onClick={onToggle}
          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle sidebar"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

