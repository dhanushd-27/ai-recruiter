"use client";

import { useState, useRef, useEffect } from "react";

export interface Agent {
  id: string;
  name: string;
  description?: string;
}

interface AgentDropdownProps {
  selectedAgent?: string;
  onAgentChange?: (agentId: string | undefined) => void;
  agents?: Agent[];
  className?: string;
}

const defaultAgents: Agent[] = [
  { id: "default", name: "Default Agent", description: "General purpose assistant" },
  { id: "code", name: "Code Assistant", description: "Helps with programming" },
  { id: "writer", name: "Writing Assistant", description: "Helps with writing" },
];

export const AgentDropdown = ({
  selectedAgent,
  onAgentChange,
  agents = defaultAgents,
  className = "",
}: AgentDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedAgentData = agents.find((a) => a.id === selectedAgent) || agents[0] || { id: "default", name: "Select Agent" };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg border border-gray-300 flex items-center gap-2 min-w-[150px]"
      >
        <span className="text-sm font-medium">{selectedAgentData.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute bottom-full mb-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
          {agents.map((agent) => (
            <button
              key={agent.id}
              type="button"
              onClick={() => {
                onAgentChange?.(agent.id);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                selectedAgent === agent.id ? "bg-blue-50" : ""
              }`}
            >
              <div className="font-medium text-sm">{agent.name}</div>
              {agent.description && (
                <div className="text-xs text-gray-500">{agent.description}</div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

