import Markdoc from "@markdoc/markdoc";
import React from "react";
import { createRoot } from "react-dom/client";

import "./css/variables.css";
import "./css/app.css";

import { Exercise, exercise } from "./components/Markdoc/Exercise.js";
import { renderMarkdoc } from "./components/Markdoc/render.js";

const markdocVariables = JSON.parse(markdocVariableString);

const currentTimeTS = Date.now();
markdocVariables.roundTripTime =
  (currentTimeTS - markdocVariables.serverTS) / 1000;

// Fetch for content because content has HTML code snippets, can't find a way to put it into the HTML DOM
fetch(mdContentPath)
  .then((r) => r.text())
  .then((content) => {
    const children = renderMarkdoc({
      content,
      variables: markdocVariables,
      extraTags: { exercise },
      extraComponents: { Exercise },
    });

    const App = () => {
      return (
        <div className="container">
          <article className="prose m-auto mt-32">{children}</article>
        </div>
      );
    };

    const root = createRoot(document.querySelector("#root"));
    root.render(<App />);
  });
