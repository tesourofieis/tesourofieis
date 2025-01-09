import React, { type ReactElement, useState } from "react";

export function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = React.Children.toArray(children);

  return (
    <div className="mt-4 pb-2">
      <div className="flex border-b border-sepia-200">
        {tabs.map((tab: ReactElement, index: number) => (
          <button
            type="button"
            key={tab.props.label}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 mr-2 text-sm font-medium rounded-t-lg ${
              activeTab === index
                ? "bg-sepia-50 text-sepia-600 border-b-2 border-sepia-600"
                : "text-sepia-500 hover:text-sepia-700"
            }`}
          >
            {tab.props.label}
          </button>
        ))}
      </div>
      {tabs[activeTab]}
    </div>
  );
}

// biome-ignore lint/correctness/noUnusedVariables: <explanation>
export function TabItem({ label, children }) {
  return children;
}
