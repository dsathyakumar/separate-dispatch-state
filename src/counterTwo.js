// import react from "react";
import { useContext } from "react";
import { State2ActionContext, State2StateContext } from "./context";

export const CounterTwo = function () {
  console.log(`Rendering <counterTwo/>`);

  const state = useContext(State2StateContext);
  const dispatch = useContext(State2ActionContext);

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
        <button onClick={inc}>Increment two</button>
        <button onClick={dec}>Decrement two</button>
      </div>
    </div>
  );
};
