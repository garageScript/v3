// https://markdoc.io/docs/tags#create-a-custom-tag
import React, { useRef, useState, useEffect, useMemo } from "react";
import Markdoc from "@markdoc/markdoc";

import { exerciseStat } from "../../lib/localStorage.js";

import { CodeBlock, fence } from "./Fence.js";
import { Mermaid, mermaid } from "./Mermaid.js";

/* Design
 * Once user reveals solution, cannot submit anymore
 * Once user reveals solution, cannot unreveal solution
 * User can move to next practice in 2 scenarios (Correct, or Viewed solution)
 * If answer is correct:
 *   increase correct count in localStorage.
 *   set viewedSolution to true so user can see explanation
 *   Cannot submit anymore
 * If answer is wrong, can retry as many times as he/she wants.
 *   Eventual correct answer counts.
 */

const NextProblem = ({ onNext, viewedSolution, isCorrect }) => {
  if (!viewedSolution && !isCorrect) {
    return <> </>;
  }

  return <a onClick={onNext}>Next Problem</a>;
};

const Requirement = ({ requiredCorrect, currentCorrect }) => {
  if (!requiredCorrect) {
    return <> </>;
  }

  const diff = parseInt(requiredCorrect) - currentCorrect;

  if (diff <= 0) {
    return <p>You have already passed this exercise</p>;
  }

  return <p>You need {diff} more correct answers to pass this section</p>;
};

const Solution = ({ explanation, viewed, viewSolution }) => {
  const explanationComponent = useMemo(() => {
    const ast = Markdoc.parse(explanation);
    const content = Markdoc.transform(ast, {
      nodes: {
        fence,
      },
      tags: {
        mermaid,
      },
    });
    return Markdoc.renderers.react(content, React, {
      components: {
        CodeBlock,
        Mermaid,
      },
    });
  }, [explanation]);

  if (!viewed) {
    return (
      <p>
        <a onClick={viewSolution}>View Solution</a>
      </p>
    );
  }

  return <>{explanationComponent}</>;
};

const SubmitButton = ({ onClick, viewedSolution }) => {
  if (viewedSolution) {
    return <></>;
  }
  return <button onClick={onClick}>Submit</button>;
};

const ResultMessage = ({ result }) => {
  let resultMessage = "";
  if (result === true) {
    resultMessage = "Your answer is correct!";
  }
  if (result === false) {
    resultMessage = "Your answer is wrong, please try again!";
  }

  return <p>{resultMessage}</p>;
};

const Completed = ({ dismiss }) => {
  return (
    <>
      <h1>Congratulations!</h1>
      <a onClick={dismiss}>Dismiss</a>
    </>
  );
};

export function Exercise({ exerciseId, articleName, children }) {
  const inputRef = useRef(null);
  const [result, setResult] = useState(null);
  const [question, setQuestion] = useState({});
  const [count, setCount] = useState(0);
  const [viewedSolution, setViewedSolution] = useState(null);

  const { generateQuestion } = markdocExercises[exerciseId];

  useEffect(() => {
    setQuestion(generateQuestion());
  }, [count]);

  const {
    title,
    prompt = "",
    answerUnit,
    validate,
    explanation,
    requiredCorrect,
  } = question;

  const promptComponent = useMemo(() => {
    const ast = Markdoc.parse(prompt);
    const content = Markdoc.transform(ast, {
      nodes: {
        fence,
      },
      tags: {
        mermaid,
      },
    });
    return Markdoc.renderers.react(content, React, {
      components: {
        CodeBlock,
        Mermaid,
      },
    });
  }, [prompt]);

  if (!prompt) {
    return "No Question";
  }

  if (
    exerciseStat.getCorrectCount(articleName, exerciseId) === requiredCorrect &&
    exerciseStat.hasNotCompleted(articleName, exerciseId)
  ) {
    const dismiss = () => {
      exerciseStat.completeExercise(articleName, exerciseId);
      setCount(count + 1);
      setResult(null);
      setViewedSolution(false);
    };
    return <Completed dismiss={dismiss} />;
  }

  const handleClick = () => {
    if (viewedSolution) {
      return;
    }
    const result = validate(inputRef.current.value);
    setResult(result);

    if (result) {
      exerciseStat.increaseCorrectCount(articleName, exerciseId);
      setViewedSolution(true);
    }
  };

  const viewSolution = () => {
    setViewedSolution(true);
  };

  const onNext = () => {
    setCount(count + 1);
    setResult(null);
    setViewedSolution(false);
  };

  return (
    <div>
      <p>{title}</p>
      {promptComponent}
      <input type="text" ref={inputRef}></input>
      {answerUnit}
      <SubmitButton onClick={handleClick} viewedSolution={viewedSolution} />
      <Requirement
        requiredCorrect={requiredCorrect}
        currentCorrect={exerciseStat.getCorrectCount(articleName, exerciseId)}
      />
      <hr />
      <ResultMessage result={result} />

      <NextProblem
        onNext={onNext}
        viewedSolution={viewedSolution}
        isCorrect={result}
      />

      <Solution
        explanation={explanation}
        viewed={viewedSolution}
        viewSolution={viewSolution}
      />
    </div>
  );
}

export const exercise = {
  render: "Exercise",
  attributes: {
    exerciseId: {
      type: String,
      description: "Exercise identifier",
    },
    articleName: {
      type: String,
      description: "Article identifier",
    },
  },
};
