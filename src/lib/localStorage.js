const STORAGE_KEY = "exercise";
const exerciseData = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");

const getExerciseInfo = (articleName, exerciseId) => {
  const articleExerciseStat = exerciseData[articleName] || {};
  return articleExerciseStat[exerciseId] || {};
};

const setExerciseInfo = (articleName, exerciseId, exerciseInfo) => {
  const articleExerciseStat = exerciseData[articleName] || {};

  articleExerciseStat[exerciseId] = { ...exerciseInfo };
  exerciseData[articleName] = articleExerciseStat;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(exerciseData));
};

export const exerciseStat = {
  getCorrectCount: (articleName, exerciseId) => {
    const exerciseInfo = getExerciseInfo(articleName, exerciseId);

    return exerciseInfo.correctCount || 0;
  },

  hasCompleted: (articleName, exerciseId) => {
    const exerciseInfo = getExerciseInfo(articleName, exerciseId);

    return !!exerciseInfo.isComplete;
  },

  completeExercise: (articleName, exerciseId) => {
    const exerciseInfo = getExerciseInfo(articleName, exerciseId);

    exerciseInfo.isComplete = true;
    setExerciseInfo(articleName, exerciseId, exerciseInfo);
  },

  increaseCorrectCount: (articleName, exerciseId) => {
    const exerciseInfo = getExerciseInfo(articleName, exerciseId);

    const correctCount = exerciseInfo.correctCount || 0;
    exerciseInfo.correctCount = correctCount + 1;
    setExerciseInfo(articleName, exerciseId, exerciseInfo);
  },
};
