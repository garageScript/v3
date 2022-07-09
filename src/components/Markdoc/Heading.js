import React from "react";
import { nodes, Tag } from "@markdoc/markdoc";

// https://github.com/markdoc/docs/blob/d86eb4a6b667335bb101d11ff894f8d32b15f411/components/Heading.js
export function Heading({ id = "", level = 1, children, className }) {
  const Component = `h${level}`;

  const link = (
    <Component className={["heading", className].filter(Boolean).join(" ")}>
      <div id={id} />
      {children}
    </Component>
  );

  return <a href={`#${id}`}>{link}</a>;
}

// https://github.com/markdoc/docs/blob/d86eb4a6b667335bb101d11ff894f8d32b15f411/markdoc/nodes/heading.markdoc.js
function generateID(children, attributes) {
  if (attributes.id && typeof attributes.id === "string") {
    return attributes.id;
  }
  return children
    .filter((child) => typeof child === "string")
    .join(" ")
    .replace(/[?]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

export const heading = {
  render: "Heading",
  children: ["inline"],
  attributes: {
    id: { type: String },
    level: { type: Number, required: true, default: 1 },
    className: { type: String },
  },
  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);
    const id = generateID(children, attributes);

    return new Tag(this.render, { ...attributes, id }, children);
  },
};
