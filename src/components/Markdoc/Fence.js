// Source: https://github.com/markdoc/markdoc-starter/blob/main/components/CodeBlock.tsx
import * as React from "react";
import Prism from "prismjs";

import "prismjs/themes/prism-okaidia.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

export function CodeBlock({ children, language }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current, false);
    }
  }, [children]);

  return (
    <pre className={`language-${language} line-numbers`}>
      <code ref={ref}>{children}</code>
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
