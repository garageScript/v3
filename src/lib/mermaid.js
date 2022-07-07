// source: https://github.com/mermaid-js/mermaid-live-editor/blob/b5978e6faf7635e39452855fb4d062d1452ab71b/src/lib/util/serde.ts#L19

import { deflate, inflate } from "pako";
import { toUint8Array, fromUint8Array, toBase64, fromBase64 } from "js-base64";

export const serialize = (code) => {
  const data = new TextEncoder().encode(
    JSON.stringify({
      code,
      mermaid: '{\n  "theme": "dark"\n}',
      updateEditor: false,
      autoSync: true,
      updateDiagram: false,
    })
  );
  const compressed = deflate(data, { level: 9 });
  return fromUint8Array(compressed, true);
};
