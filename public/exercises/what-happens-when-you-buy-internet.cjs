{
  ispSpeed: {
    generateQuestion: () => {
      const ranges = [
        [50, 500],
        [100, 1000],
      ];
      const [speed, size] = ranges.map((range) => {
        return range[0] + Math.floor(Math.random() * (range[1] - range[0]));
      });

      const speedBytes = Math.floor(speed/8)
      const sizeBits = size * 8

      const resultMin = Math.floor(
        Math.min(
          size/(Math.ceil(speed/8)), 
          sizeBits/speed
        )
      )

      const resultMax = Math.ceil(
        Math.max(
          size/(Math.floor(speed/10)), 
          sizeBits/speed
        ),
      )

      console.log([resultMin, resultMax])

      const sampleAnswer = Math.ceil(size / speedBytes)
      return {
        title: `Understanding ISP Speeds`,
        prompt: `Let's say you picked a plan that provides ${speed}mbps (megabits per second). How long will it take to download a ${size} megabyte file?`,
        answerUnit: 'seconds',
        validate: (submission) => {
          const value = parseInt(submission, 10)
          if (value === NaN) {
            return false
          }

          return value >= resultMin && value <= resultMax
        },
        explanation: [
          `First, we need to make sure that the speed and file are using the same units.`,
          `You can do that be either converting the speed to megabytes per second (${speed}/8 is ${speedBytes}) or converting file to megabits (${size} * 8 is ${sizeBits}). `,
          `Let's go with ${speedBytes} MegaBytes per second.`,
          `Now the question becomes, How many seconds does it take to download a ${size} megabyte file if your download speed is ${speedBytes} megabytes per second?`,
          `To get the number of seconds, just divide the size by the speed`,
          `${size} / ${speedBytes} is ${sampleAnswer} seconds`,

          `The answer is about ${sampleAnswer} seconds`
        ],
        requiredCorrect: 3
      };
    },
  },
};
