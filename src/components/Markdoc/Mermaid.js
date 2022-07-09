// https://markdoc.io/docs/tags#create-a-custom-tag
import * as React from "react";

import { serialize } from "../../lib/mermaid.js";

export function Mermaid({ children }) {
  const contentList = children.props.children;
  const str = contentList.reduce((acc, e) => {
    if (!e.trim()) {
      return acc + "\n";
    }
    return acc + e;
  }, "");

  const encodedStr = serialize(str);
  return (
    <a href={`https://mermaid.live/edit#pako:${encodedStr}`}>
      <img src={`https://mermaid.ink/img/pako:${encodedStr}`} alt="Diagram" />
    </a>
  );
}

export const mermaid = {
  render: "Mermaid",
};
