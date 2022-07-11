// https://markdoc.io/docs/tags#create-a-custom-tag
import React, { useRef, useState, useEffect, useMemo } from "react";
import Markdoc from "@markdoc/markdoc";

import { exerciseStat } from "../../lib/localStorage.js";
import { renderMarkdoc } from "./render.js";

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

  return (
    <div className="text-right">
      <button className="btn btn-outline" onClick={onNext}>
        Next Problem
      </button>
    </div>
  );
};

const Requirement = ({ requiredCorrect, currentCorrect }) => {
  if (!requiredCorrect) {
    return <> </>;
  }

  const diff = parseInt(requiredCorrect) - currentCorrect;

  if (diff <= 0) {
    return (
      <p className="text-success">You have already passed this exercise</p>
    );
  }

  return <p>You need {diff} more correct answers to pass this section</p>;
};

const Solution = ({ explanation, viewed, viewSolution }) => {
  const explanationComponent = useMemo(() => {
    return renderMarkdoc({
      content: explanation,
    });
  }, [explanation]);

  if (!viewed) {
    return (
      <div>
        <button className="btn btn-ghost" onClick={viewSolution}>
          View Solution
        </button>
      </div>
    );
  }

  return <>{explanationComponent}</>;
};

const SubmitButton = ({ onClick, viewedSolution }) => {
  if (viewedSolution) {
    return <></>;
  }
  return (
    <button className="btn" onClick={onClick}>
      Submit
    </button>
  );
};

const ResultMessage = ({ result }) => {
  let resultMessage = "";
  if (result === true) {
    return <p className="text-success text-center">Your answer is correct!</p>;
  }
  if (result === false) {
    return (
      <p className="text-error text-center">
        Your answer is wrong, please try again!{" "}
      </p>
    );
  }

  return "";
};

const CompletionMessage = ({
  dismiss,
  articleName,
  exerciseId,
  requiredCorrect,
}) => {
  if (
    exerciseStat.getCorrectCount(articleName, exerciseId) !== requiredCorrect ||
    exerciseStat.hasCompleted(articleName, exerciseId)
  ) {
    return "";
  }
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 bg-success-content p-12 text-center">
      <h1 className="">Congratulations!</h1>
      <p>
        You have completed this exercise. Feel free to practice more if you
        think you need it.{" "}
      </p>
      <div className="text-center mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-1/6 w-1/6 m-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <button className="btn btn-link text-neutral-content" onClick={dismiss}>
        Dismiss
      </button>
    </div>
  );
};

export function Exercise({ exerciseId, articleName, children }) {
  const [result, setResult] = useState(null);
  const [ansValue, setAnsValue] = useState("");
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
    return renderMarkdoc({
      content: prompt,
    });
  }, [prompt]);

  if (!prompt) {
    return "No Question";
  }

  const dismissCompletion = () => {
    exerciseStat.completeExercise(articleName, exerciseId);
    setCount(count + 1);
    setResult(null);
    setViewedSolution(false);
  };

  const handleClick = () => {
    if (viewedSolution) {
      return;
    }
    const result = validate(ansValue);
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
    setAnsValue("");
  };

  const onTextChange = (e) => {
    setAnsValue(e.target.value);
  };

  const answerUnitComponent = answerUnit ? <span>{answerUnit}</span> : "";

  return (
    <div className="relative card bg-base-200 shadow-xl mt-16">
      <div className="card-body">
        <h3 className="card-title">Exercise: {title}</h3>
        {promptComponent}

        <div className="form-control">
          <label className="input-group">
            <input
              type="text"
              className="input input-bordered w-full"
              disabled={viewedSolution}
              onChange={onTextChange}
              value={ansValue}
            ></input>
            {answerUnitComponent}
          </label>
          <SubmitButton onClick={handleClick} viewedSolution={viewedSolution} />
        </div>

        <div className="absolute top-0 right-3">
          <Requirement
            requiredCorrect={requiredCorrect}
            currentCorrect={exerciseStat.getCorrectCount(
              articleName,
              exerciseId
            )}
          />
        </div>
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

      <CompletionMessage
        dismiss={dismissCompletion}
        exerciseId={exerciseId}
        articleName={articleName}
        requiredCorrect={requiredCorrect}
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
