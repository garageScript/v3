import * as React from "react";

export function SideBySide({ children }) {
  const childrenArr = React.Children.toArray(children);
  let [first, ...rest] = childrenArr;
  const hrIndex = childrenArr.findIndex((e) => {
    return e.type === "hr";
  });
  if (hrIndex >= 0) {
    rest = childrenArr.splice(hrIndex);
    rest.shift();
    first = childrenArr;
  }
  return (
    <div className="side-by-side flex row">
      <div className="left column equal-width">{first}</div>
      <div className="right column equal-width">{rest}</div>
    </div>
  );
}

export const sideBySide = {
  render: "SideBySide",
};
