import Markdoc from "@markdoc/markdoc";
import React from "react";
import { createRoot } from "react-dom/client";

import "./css/variables.css";
import "./css/app.css";

import { CodeBlock, fence } from "./components/Markdoc/Fence.js";
import { Exercise, exercise } from "./components/Markdoc/Exercise.js";
import { Heading, heading } from "./components/Markdoc/Heading.js";
import { Mermaid, mermaid } from "./components/Markdoc/Mermaid.js";
import { SideBySide, sideBySide } from "./components/Markdoc/SideBySide.js";
import { SlideShow, slideShow } from "./components/Markdoc/SlideShow.js";

const markdocVariables = JSON.parse(markdocVariableString);

const currentTimeTS = Date.now();
markdocVariables.roundTripTime =
  (currentTimeTS - markdocVariables.serverTS) / 1000;

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
        exercise,
        mermaid,
        sideBySide,
        slideShow,
      },
    });
    const children = Markdoc.renderers.react(content, React, {
      components: {
        CodeBlock,
        Exercise,
        Heading,
        Mermaid,
        SideBySide,
        SlideShow,
      },
    });

    const root = createRoot(document.querySelector("#root"));
    root.render(children);
  });
