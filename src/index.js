import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// 초기값 0으로 주기
number.innerText = 0;

//ACTION TYPE을 아래와 같이 문자열이 아닌
// IDENTIFIER로 만들면 Actiontype이 문자열일때
// 오타가 발생해도 에러 메세지가 안뜨는 문제를
// 변수명을 통해 오타시 에러를 발생시켜서
// 오타가 발생했다는 JS의 Error를 Notice 하고
// ERROR MESAGE가 뜨게 만들 수 있다.
const ADD = "ADD";
const MINUS = "MINUS";

//reducer는 initalState와 action을 인자로 받는다.
const reducer = (initalState = 0, action) => {
  //  switch 형태로 만들어 improve한다.
  switch (action.type) {
    case ADD:
      return initalState + 1;
    case MINUS:
      return initalState - 1;
    default:
      return initalState;
  }
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
  store.dispatch({ type: ADD });
};

const handleMinus = () => {
  store.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
