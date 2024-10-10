import React, { useState } from "react";
// import './Tabs.css';

export function Tabs({ children, defaultValue, className = "", ...props }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className={`tabs ${className}`} {...props}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  );
}

export function TabsList({ children, className = "", ...props }) {
  return (
    <div className={`tabs-list ${className}`} {...props}>
      {children}
    </div>
  );
}

export function TabsTrigger({
  children,
  value,
  activeTab,
  setActiveTab,
  className = "",
  ...props
}) {
  return (
    <button
      className={`tabs-trigger ${
        activeTab === value ? "active" : ""
      } ${className}`}
      onClick={() => setActiveTab(value)}
      {...props}
    >
      {children}
    </button>
  );
}

export function TabsContent({
  children,
  value,
  activeTab,
  className = "",
  ...props
}) {
  if (value !== activeTab) return null;
  return (
    <div className={`tabs-content ${className}`} {...props}>
      {children}
    </div>
  );
}
