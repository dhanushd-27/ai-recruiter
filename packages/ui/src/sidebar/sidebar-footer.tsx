"use client";

import { UserProfile } from "../profile";

interface SidebarFooterProps {
  className?: string;
}

export const SidebarFooter = ({ className = "" }: SidebarFooterProps) => {
  return (
    <div className={`sidebar-footer border-t border-gray-200 p-4 ${className}`}>
      <UserProfile />
    </div>
  );
};

