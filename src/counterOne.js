import { useContext } from "react";
import { State1ActionContext, State1StateContext } from "./context";

export const CounterOne = function () {
  console.log(`Rendering <counterOne/>`);

  const state = useContext(State1StateContext);
  const dispatch = useContext(State1ActionContext);

  function inc(evt) {
    dispatch({ type: "INC_1" });
  }

  function dec(evt) {
    dispatch({ type: "DEC_1" });
  }

  return (
    <div>
      <div>Counter Value: {state.value}</div>
      <div>
        <button onClick={inc}>Increment One</button>
        <button onClick={dec}>Decrement One</button>
      </div>
    </div>
  );
};
