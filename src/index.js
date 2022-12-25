import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const reducer = (initalState = 0, action) => {
  console.log(initalState, action);
  if (action.type === "ADD") {
    return initalState + 1;
  } else if (action.type === "Minus") {
    return initalState - 1;
  }
  console.log(initalState);
  return initalState;
};

const handleAdd = () => {
  store.dispatch({ type: "ADD" });
};
const store = createStore(reducer);

store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
console.log(store.getState());

add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);
