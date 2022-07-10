import Markdoc from "@markdoc/markdoc";
import React from "react";

import { CodeBlock, fence } from "./Fence.js";
import { Heading, heading } from "./Heading.js";
import { Mermaid, mermaid } from "./Mermaid.js";
import { SideBySide, sideBySide } from "./SideBySide.js";
import { SlideShow, slideShow } from "./SlideShow.js";
import { Toggle, toggle } from "./Toggle.js";

export const renderMarkdoc = ({
  content,
  variables,
  extraTags = {},
  extraComponents = {},
}) => {
  const ast = Markdoc.parse(content);
  const tags = {
    mermaid,
    sideBySide,
    slideShow,
    toggle,
  };
  Object.keys(extraTags).forEach((newTag) => {
    tags[newTag] = extraTags[newTag];
  });
  const transformParams = {
    nodes: {
      fence,
      heading,
    },
    tags,
  };
  if (variables) {
    transformParams.variables = variables;
  }
  const transformation = Markdoc.transform(ast, transformParams);

  const components = {
    CodeBlock,
    Heading,
    Mermaid,
    SideBySide,
    SlideShow,
    Toggle,
  };
  Object.keys(extraComponents).forEach((newComponent) => {
    components[newComponent] = extraComponents[newComponent];
  });
  return Markdoc.renderers.react(transformation, React, {
    components,
  });
};
