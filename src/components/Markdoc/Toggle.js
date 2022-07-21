import * as React from "react";

export function Toggle({ summary, children }) {
  return (
    <details className="shadow-xl p-2 mb-5">
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
