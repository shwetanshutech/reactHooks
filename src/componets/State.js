import React, { useState } from "react";
export default function State() {
  const [state, setState] = useState({ count: 4, theme: "blue" });
  const count = state.count;
  const theme = state.theme;
  //  object is over riden and is not automatically merge in  useState hook
  //   The biggest Advantage is to use the useState multiple time
  //   for controlling multiple attributes like this
  //useState(()=>{}) - this allows to execute the function only once not every time the count or variable changes
  function decrementCount() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  }
  function incremenetCount() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  }

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incremenetCount}>+</button>
    </div>
  );
}
