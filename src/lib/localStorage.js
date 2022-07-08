const STORAGE_KEY = "exercise";
const exerciseData = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");

export const exerciseStat = {
  getCorrectCount: (articleName, exerciseId) => {
    const articleExerciseStat = exerciseData[articleName] || {};
    const exerciseInfo = articleExerciseStat[exerciseId] || {};

    return exerciseInfo.correctCount || 0;
  },

  increaseCorrectCount: (articleName, exerciseId) => {
    const articleExerciseStat = exerciseData[articleName] || {};
    const exerciseInfo = articleExerciseStat[exerciseId] || {};

    const correctCount = exerciseInfo.correctCount || 0;

    exerciseInfo.correctCount = correctCount + 1;
    articleExerciseStat[exerciseId] = exerciseInfo;
    exerciseData[articleName] = articleExerciseStat;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(exerciseData));
  },
};
