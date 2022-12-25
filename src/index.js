import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
// 초기값 0으로 주기
number.innerText = 0;
//reducer는 initalState와 action을 인자로 받는다.
const reducer = (initalState = 0, action) => {
  console.log(initalState, action);
  if (action.type === "ADD") {
    return initalState + 1;
  } else if (action.type === "MINUS") {
    return initalState - 1;
  }
  return initalState;
};
//store는 state 정보를 저장하고 state를 관리하는 공간이다.
const store = createStore(reducer);

const onChange = () => {
  number.innerText = store.getState();
  console.log("Listened the changed State");
};
//subscribe의 중요성은 state값이 변화했다는 것을 lISTEN 알아차리는 함수이다.
//state가 변할때 알아 차리고 함수를 인자로 받는다.
store.subscribe(onChange);

//dispatch는 type을 인자로받아
//type을 reducer로 전달한다.
const handleAdd = () => {
  store.dispatch({ type: "ADD" });
};

const handleMinus = () => {
  store.dispatch({ type: "MINUS" });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
