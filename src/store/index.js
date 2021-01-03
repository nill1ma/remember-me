import { createStore } from "redux";

const INITIAL_STATE = {
  data: [
    { id: "0", letter: "A", show: false, correct: false },
    { id: "1", letter: "A", show: false, correct: false },
    { id: "2", letter: "B", show: false, correct: false },
    { id: "3", letter: "B", show: false, correct: false },
    { id: "5", letter: "C", show: false, correct: false },
    { id: "4", letter: "C", show: false, correct: false },
    { id: "7", letter: "D", show: false, correct: false },
    { id: "6", letter: "D", show: false, correct: false },
    { id: "9", letter: "E", show: false, correct: false },
    { id: "8", letter: "E", show: false, correct: false },
    { id: "10", letter: "F", show: false, correct: false },
    { id: "11", letter: "F", show: false, correct: false },
    { id: "12", letter: "G", show: false, correct: false },
    { id: "13", letter: "G", show: false, correct: false },
    { id: "14", letter: "H", show: false, correct: false },
    { id: "15", letter: "H", show: false, correct: false },
    { id: "16", letter: "I", show: false, correct: false },
    { id: "17", letter: "I", show: false, correct: false },
  ].sort(() => .5 - Math.random())
};

function listMemory(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "UPDATE":
      return { ...state, data: [...action.updated] };
    default:
      return state;
  }
}

const store = createStore(listMemory);

export default store;
