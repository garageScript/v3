import * as React from "react";

export function Toggle({ summary, children }) {
  return (
    <details className="alert shadow-lg">
      <summary>{summary}</summary>
      {children}
    </details>
  );
}

export const toggle = {
  render: "Toggle",
  attributes: {
    summary: {
      type: String,
      description: "Summary String",
    },
  },
};
