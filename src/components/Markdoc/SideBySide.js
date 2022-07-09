import * as React from "react";

export function SideBySide({ children }) {
  const [first, ...rest] = React.Children.toArray(children);
  return (
    <div className="side-by-side flex row">
      <div className="left flex column equal-width">{first}</div>
      <div className="right flex column equal-width">{rest}</div>
    </div>
  );
}

export const sideBySide = {
  render: "SideBySide",
};
