// source: https://github.com/mermaid-js/mermaid-live-editor/blob/b5978e6faf7635e39452855fb4d062d1452ab71b/src/lib/util/serde.ts#L19

const { deflate, inflate } = require("pako");
const {
  toUint8Array,
  fromUint8Array,
  toBase64,
  fromBase64,
} = require("js-base64");

const serialize = (code) => {
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

module.exports = {
  serialize,
};
