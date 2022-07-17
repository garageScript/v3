module.exports = {
  urlIdentification1: {
    generateQuestion: () => {
      const protocolPort = {
        http: 80,
        https: 443,
        smtp: 25,
        ftp: 21,
        postgresql: 5432,
        ssh: 22,
      };
      const hostnames = [
        "localhost",
        "facebook.com",
        "amazon.com",
        "157.240.22.35",
        "54.239.28.85",
        "142.250.189.174",
        "192.168.0.1",
      ];

      const protocols = Object.keys(protocolPort);
      const randomProtocol =
        protocols[Math.floor(Math.random() * protocols.length)];
      const randomHostname =
        hostnames[Math.floor(Math.random() * hostnames.length)];

      let randomPort =
        Math.floor(Math.random() * 2) % 2
          ? 3000 + Math.floor(Math.random() * 5000)
          : false;
      if (randomProtocol === "postgresql") {
        randomPort = "5432";
      }

      const portStr = randomPort ? `:${randomPort}` : "";

      const url = `${randomProtocol}://${randomHostname}${portStr}`;

      const partsArr = ["port", "protocol", "hostname", "port", "port"];
      const randomPart = partsArr[Math.floor(Math.random() * partsArr.length)];

      let portExplanation = `The port number is specified to be **${randomPort}**`;
      if (!randomPort) {
        portExplanation = `Since the port number is not specified, the default port for the protocol is used: **${protocolPort[randomProtocol]}**`;
      }

      return {
        title: `Identifying URLs`,
        prompt: `
Given this URL

**${url}** {% .text-center %}

What is the ${randomPart}?
        `,
        answerUnit: "",
        validate: (submission) => {
          submission = submission.trim();
          if (randomPart === "port") {
            if (randomPort) {
              return submission === `${randomPort}`;
            }
            return submission === `${protocolPort[randomProtocol]}`;
          }
          if (randomPart === "hostname") {
            return submission === randomHostname;
          }
          return submission === randomProtocol;
        },
        explanation: `
The protocol is **${randomProtocol}**

The hostname is **${randomHostname}**

${portExplanation}
        `,
        requiredCorrect: 15,
      };
    },
  },
  biggerFileSize: {
    generateQuestion: () => {
      const fileName = `file${Date.now() % 1000}`;

      const options = [
        "You put the above text into Microsoft Word and save the file as `" +
          fileName +
          ".docx`",
        "You put the above text into VSCode and save the file as `" +
          fileName +
          ".txt`",
      ];
      let firstOption;
      if (Math.floor(Math.random() * 2)) {
        firstOption = options.pop();
      } else {
        firstOption = options.shift();
      }

      return {
        title: "Bigger File Size",
        prompt: `

\`\`\`
    Did you know? Random text is called Ipsum Lorem
    Ipsum Lorem is a bunch of random text words 
    that has no meaning. 
    It is primarily used for design
\`\`\`


${firstOption}

${options[0]}

Which file is smaller?
        `,
        validate: (submission) => {
          return submission.trim() === `${fileName}.txt`;
        },
        explanation: `
Microsoft Word needs to store additional information about your text to preserve rich text formatting.

A text editor like VSCode will only save exactly what you typed in

Therefore, a rich text editor like Microsoft Word will always need to store more data.

        `,
        requiredCorrect: 2,
      };
    },
  },
};
