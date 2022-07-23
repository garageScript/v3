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
        title: "Understanding harddrive writes",
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

  approximateFileSizes: {
    generateQuestion: () => {
      const units = ["B", "KB", "MB", "GB", "TB", "PB"];
      const unitStrs = {};
      unitStrs["B"] = "bytes";
      unitStrs["KB"] = "KiloBytes";
      unitStrs["MB"] = "MegaBytes";
      unitStrs["GB"] = "GigaBytes";
      unitStrs["TB"] = "TeraBytes";
      unitStrs["PB"] = "PetaBytes";

      const getRandomUnit = (arr, exclusions = []) => {
        const randomIndex = Math.floor(Math.random() * arr.length);

        if (exclusions.includes(randomIndex)) {
          return getRandomUnit(arr, exclusions);
        }
        return randomIndex;
      };

      const givenUnitIdx = getRandomUnit(units);
      const destinationUnitIdx = getRandomUnit(units, [givenUnitIdx]);

      const givenUnit = units[givenUnitIdx];
      const destinationUnit = units[destinationUnitIdx];

      const unitDiff = Math.abs(destinationUnitIdx - givenUnitIdx);

      const givenSize =
        destinationUnitIdx > givenUnitIdx
          ? Math.floor(Math.random() * 99 * Math.pow(1000, unitDiff))
          : Math.random().toFixed(3 * unitDiff);

      const addCommas = (str, i = str.length, result = "") => {
        if (!str.includes) {
          return addCommas(str.toString(), i, result);
        }
        if (str.includes(".")) {
          return str;
        }
        if (i <= 3) {
          return `${str}${result}`;
        }
        const suffix = str.substring(i - 3);
        const prefix = str.substring(0, i - 3);
        return addCommas(prefix, i - 3, `,${suffix}${result}`);
      };

      const givenSizeWithCommas = addCommas(givenSize);

      const unitDiffValue = Math.pow(1024, unitDiff);
      const conversionStr = `There are \`${addCommas(unitDiffValue)} ${
        units[Math.min(givenUnitIdx, destinationUnitIdx)]
      }\` in a \`${units[Math.max(givenUnitIdx, destinationUnitIdx)]}\``;

      const actionStr =
        destinationUnitIdx > givenUnitIdx ? `divide` : `multiply`;

      return {
        title: "Approximate file sizes",
        prompt: `
A file size is \`${givenSizeWithCommas} ${givenUnit}\`

How do you express it in \`${unitStrs[destinationUnit]}\`?
`,
        requiredCorrect: 10,
        validate: (submission) => {
          const submissionStr = submission.split(",").join("");
          const submissionFloat = parseFloat(submissionStr);
          if (destinationUnitIdx > givenUnitIdx) {
            const ranges = [
              Math.floor(givenSize / Math.pow(1024, unitDiff)),
              Math.ceil(givenSize / Math.pow(1000, unitDiff)),
            ];
            return submissionFloat >= ranges[0] && submissionFloat <= ranges[1];
          }
          const ranges = [
            Math.floor(givenSize * Math.pow(1000, unitDiff)),
            Math.ceil(givenSize * Math.pow(1024, unitDiff)),
          ];
          return submissionFloat >= ranges[0] && submissionFloat <= ranges[1];
        },
        explanation: `
${conversionStr}

To convert from ${unitStrs[givenUnit]} to ${unitStrs[destinationUnit]}

You ${actionStr} \`${givenSizeWithCommas}\` by \`${addCommas(unitDiffValue)}\`
        `,
        answerUnit: destinationUnit,
      };
    },
  },
  binaryCount: {
    generateQuestion: () => {
      if (!window.binaryCount && window.binaryCount !== 0) {
        window.binaryCount = -1;
      }
      window.binaryCount += 1;
      let count = window.binaryCount;
      let previousTable = "";
      if (count) {
        previousTable = new Array(count).fill(0).reduce(
          (acc, _, i) => {
            return (
              acc +
              `
---
* ${i}
* ${i.toString(2)}
            `
            );
          },
          `
{% table %}
* Num
* Binary
        `
        );
        previousTable += `
{% /table %}
---
        `;
      }

      let explanation = "";
      if (count === 0) {
        explanation = `0 is 0 all counting systems, including binary`;
      } else {
        const previousNumber = count - 1;
        const previousNumberInBinary = previousNumber.toString(2);
        const numDigits = previousNumberInBinary.length;

        explanation = `${previousNumber} in binary is ${previousNumberInBinary}. To add to this:`;

        const zeroIndex = previousNumberInBinary
          .split("")
          .reverse()
          .findIndex((c) => c === "0");

        if (zeroIndex < 0) {
          explanation += `

Since we have used up all the digits (0 and 1) in the ${numDigits}-digit number, we just continue to ${
            numDigits + 1
          }-digit number.

Increment the first digit (imagine a 0 as the first digit) and set the rest to 0
          `;
        } else if (zeroIndex === 0) {
          explanation += `

Simply add 1
          `;
        } else {
          const substring = previousNumberInBinary.substring(
            numDigits - 1 - zeroIndex
          );
          const substringNum = parseInt(substring, 2);
          const incrementedNum = substringNum + 1;
          explanation += `

We have seen ${substring} (${substringNum}) before.

${substring} + 1 is \`${incrementedNum.toString(
            2
          )}\` (By incrementing the first digit and setting the rest to 0)
          `;
        }

        explanation += `

Answer: ${count.toString(2)}
        `;
      }
      return {
        title: "Counting In Binary",
        prompt: `
${previousTable}
What is ${count} in Binary?
        `,
        requiredCorrect: 20,
        validate: (submission) => {
          return parseInt(submission, 2) === count;
        },
        explanation,
      };
    },
  },
};
