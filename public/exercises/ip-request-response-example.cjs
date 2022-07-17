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
  writeSpeed: {
    generateQuestion: () => {
      const fasterInternetSpeeds = [40, 80];
      const slowerInternetSpeeds = [2, 4];
      const driveSpeeds = [1, 1.5, 2, 2.5];

      const isInternetFaster = !!Math.floor(Math.random() * 2);
      const internetSpeeds = isInternetFaster
        ? fasterInternetSpeeds
        : slowerInternetSpeeds;

      const fileSize = Math.floor(Math.random() * 200) + 50;

      const internetSpeed = internetSpeeds[0];
      const driveSpeed = driveSpeeds[0];

      const internetSpeedRangesInBytes = [
        internetSpeed / 10,
        internetSpeed / 8,
      ];

      const internetSpeedInBytes = internetSpeed / 8;

      const explanationTxt = isInternetFaster
        ? `Since internet speed is faster than your file write speed, the time it takes to store ${fileSize} GB file is determined by the hard drive write speed:

${fileSize}/${driveSpeed}GBps
        `
        : `Since internet speed is slower than your file write speed, the time it takes to store ${fileSize} GB file is determined by your internet speed.

${fileSize}/${internetSpeedInBytes}GBps
        `;

      return {
        title: "Understanding harddrive speeds",
        prompt: `
Let's say your internet download speed is \`${internetSpeed}gbps\` (gigabits per second). 

Let's say your harddrive write speed is \`${driveSpeed} GBps\` (Gigabytes per second).

How long does it take to finish downloading a \`${fileSize} GB\` (Gigabyte) file?
`,
        requiredCorrect: 5,
        validate: (submission) => {
          const submissionNum = parseFloat(submission);
          if (isInternetFaster) {
            const [lower, higher] = [
              Math.floor(fileSize / driveSpeed),
              Math.ceil(fileSize / driveSpeed),
            ];
            return submission >= lower && submission <= higher;
          }
          const [lower, higher] = [
            Math.floor(fileSize / internetSpeedRangesInBytes[1]),
            Math.ceil(fileSize / internetSpeedRangesInBytes[0]),
          ];
          return submission >= lower && submission <= higher;
        },
        explanation: `
First we need to convert internet speed from bits to bytes.

There are 8 bits an a byte, so your internet speed is ${internetSpeed} gigabits / 8

Your internet speed is ${internetSpeedInBytes} GBps

Computers can write to the hard drive as the file is coming through the internet

${explanationTxt}
        `,
        answerUnit: "seconds",
      };
    },
  },
};
