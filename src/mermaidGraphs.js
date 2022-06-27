const { serialize } = require("./lib/mermaid");

const getGraphUrl = (code) => {
  const paramValue = serialize(code);
  return `[![](https://mermaid.ink/img/pako:${paramValue})](https://mermaid.live/edit#pako:${paramValue}) `;
};

const getGraphs = (article, data) => {
  if (article === "what-happens-when-you-buy-internet") {
    const { reqIp } = data;
    const externalIpGraph = `
    graph LR
        A[Your Computer] --> B(Modem)
        B -->|1. Sends a Request with source: ${reqIp}| C(Youtube)
        C -->|2. Sends a Response with destination: ${reqIp} | B
    `;
    return [getGraphUrl(externalIpGraph)];
  }
  if (article === "ip-request-response-example") {
    const { reqIp, destIp, exampleLocalIp } = data;
    const journey = `
    graph LR
    A[1. Your Browser, localIP ${exampleLocalIp}] --> B[2. Router]
    B --> C[3. Modem IP ${reqIp}]
    C -->|Sends a Request| D[The Internet]
    D --> |request| E(3. My Modem IP ${destIp})
    E -->F[4. Router]
    `;
    const journey2 = `
    graph LR
    D[The Internet] --> |request| E(My Modem IP ${destIp})
    E -->F[4. Router]
    F -->G[5. My Computer]
        
    `;
    return [getGraphUrl(journey), getGraphUrl(journey2)];
  }

  return [];
};

module.exports = {
  getGraphs,
};
