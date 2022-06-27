const { serialize } = require("./lib/mermaid");

const getGraphs = (article, data) => {
  if (article === "what-happens-when-you-buy-internet") {
    const { reqIp } = data;
    const externalIpGraph = `
    graph LR
        A[Your Computer] --> B(Modem)
        B -->|1. Sends a Request with source: ${reqIp}| C(Youtube)
        C -->|2. Sends a Response with destination: ${reqIp} | B
    `;
    return [serialize(externalIpGraph)];
  }

  return [];
};

module.exports = {
  getGraphs,
};
