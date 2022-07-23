// Source: https://github.com/markdoc/markdoc-starter/blob/main/components/CodeBlock.tsx
import * as React from "react";
import Prism from "prismjs";

import "prismjs/themes/prism-okaidia.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-highlight/prism-line-highlight.js";
import "prismjs/plugins/line-highlight/prism-line-highlight.css";

export function CodeBlock({ children, language }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current, false);
    }
  }, [children]);

  let content = children;
  const childrenLines = children.split("\n");
  const firstLine = childrenLines.shift().trim();
  const dataAttributes = {};
  if (firstLine.includes("data-line")) {
    firstLine
      .split(";")
      .filter((e) => e)
      .forEach((chunk) => {
        const [property, ...restArr] = chunk.split("|");
        dataAttributes[property] = restArr.join("|");
      });
    content = childrenLines.join("\n");
  }

  return (
    <pre className={`language-${language} line-numbers`} {...dataAttributes}>
      <code ref={ref}>{content}</code>
    </pre>
  );
}

// fence is the official term for three backticks
export const fence = {
  render: "CodeBlock",
  attributes: {
    content: { type: String },
    language: {
      type: String,
      description:
        "The programming language of the code block. Place it after the backticks.",
    },
  },
};

/* Example Usage

1-2, 5, 9-20
    Lines 1 through 2, line 5, lines 9 through 20

```js
data-line|1-2, 4, 11-15;
const a = require("http");
const b = `
  <link rel="stylesheet" href="https://fonts.xz.style/serve/inter.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css">
  <article>
  <h1>What's just happened!?</h1>
  <p>What happened when you put a <strong>url</strong> (i.e <code>69.181.248.93:8035</code>) into the url bar and hit &quot;enter&quot;?</p>
  <h2>Receiving Your Request on Device</h2>
  ...
  </article>
`;

const c = function (req, res) {
  res.send(b)
};

const d = http.createServer(c);

server.listen(3035)
```

*/
