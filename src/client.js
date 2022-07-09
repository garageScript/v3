import Markdoc from "@markdoc/markdoc";
import { createRoot } from "react-dom/client";
import React from "react";

import { CodeBlock, fence } from "./components/Markdoc/Fence.js";
import { Mermaid, mermaid } from "./components/Markdoc/Mermaid.js";
import { Exercise, exercise } from "./components/Markdoc/Exercise.js";
import { Heading, heading } from "./components/Markdoc/Heading.js";

const markdocVariables = JSON.parse(markdocVariableString);

// Fetch for content because content has HTML code snippets, can't find a way to put it into the HTML DOM
fetch(mdContentPath)
  .then((r) => r.text())
  .then((mdContent) => {
    const ast = Markdoc.parse(mdContent);
    const content = Markdoc.transform(ast, {
      variables: markdocVariables,
      nodes: {
        fence,
        heading,
      },
      tags: {
        mermaid,
        exercise,
      },
    });
    const children = Markdoc.renderers.react(content, React, {
      components: {
        CodeBlock,
        Mermaid,
        Exercise,
        Heading,
      },
    });

    const root = createRoot(document.querySelector("#root"));
    root.render(children);
  });
