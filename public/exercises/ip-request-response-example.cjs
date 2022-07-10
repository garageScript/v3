{
  urlIdentification1: {
    generateQuestion: () => {
      const protocolPort = {
        "http": 80,
        "https": 443,
        "smtp": 25,
        "ftp": 21,
        "postgresql": 5432,
        "ssh": 22,
      };
      const hostnames = [
        "localhost",
        "facebook.com",
        "amazon.com",
        "157.240.22.35",
        "54.239.28.85",
        "142.250.189.174",
        "192.168.0.1",
      ]

      const protocols = Object.keys(protocolPort)
      const randomProtocol = protocols[Math.floor(Math.random()*protocols.length)]
      const randomHostname = hostnames[Math.floor(Math.random()*hostnames.length)]

      let randomPort = Math.floor(Math.random() * 2) % 2 
        ?  3000 + Math.floor(Math.random()*5000)
        : false
      if (randomProtocol === 'postgresql') {
        randomPort = '5432'
      }

      const portStr = randomPort ? `:${randomPort}` : ""

      const url = `${randomProtocol}://${randomHostname}${portStr}`

      const partsArr = ['port', 'protocol', 'hostname', 'port', 'port']
      const randomPart = partsArr[Math.floor(Math.random() * partsArr.length)]

      let portExplanation = `The port number is specified to be **${randomPort}**`
      if (!randomPort) {
        portExplanation = `Since the port number is not specified, the default port for the protocol is used: **${protocolPort[randomProtocol]}**`
      }

      return {
        title: `Identifying URLs`,
        prompt: `
Given this URL

**${url}** {% .text-center %}

What is the ${randomPart}?
        `,
        answerUnit: '',
        validate: (submission) => {
          submission = submission.trim()
          if (randomPart === 'port') {
            if(randomPort) {
              return submission === `${randomPort}`
            }
            return submission === `${protocolPort[randomProtocol]}`
          }
          if (randomPart === 'hostname') {
            return submission === randomHostname
          }
          return submission === randomProtocol
        },
        explanation: `
The protocol is **${randomProtocol}**

The hostname is **${randomHostname}**

${portExplanation}
        `,
        requiredCorrect: 15
      };
    },
  },
};

