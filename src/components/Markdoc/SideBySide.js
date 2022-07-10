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
    <div className="flex w-full">
      <div className="w-full">{first}</div>
      <div className="divider divider-horizontal"></div>
      <div className="w-full">{rest}</div>
    </div>
  );
}

export const sideBySide = {
  render: "SideBySide",
};
