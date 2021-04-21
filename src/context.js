import React from "react";

export const State1StateContext = React.createContext();
export const State1ActionContext = React.createContext();
export const State2StateContext = React.createContext();
export const State2ActionContext = React.createContext();

function reducer(currState, action) {
  switch (action.type) {
    case "INC_1":
      return {
        value: currState.value + 1
      };
    case "DEC_1":
      return {
        value: currState.value - 1
      };
    default:
      return currState;
  }
}

export const State1Provider = ({ children }) => {
  const [counterOnestate, dispatchToCounterOne] = React.useReducer(reducer, {
    value: 0
  });

  return (
    <State1StateContext.Provider value={counterOnestate}>
      <State1ActionContext.Provider value={dispatchToCounterOne}>
        {children}
      </State1ActionContext.Provider>
    </State1StateContext.Provider>
  );
};

export const State2Provider = ({ children }) => {
  const [counterTwostate, dispatchToCounterTwo] = React.useReducer(reducer, {
    value: 0
  });

  return (
    <State2StateContext.Provider value={counterTwostate}>
      <State2ActionContext.Provider value={dispatchToCounterTwo}>
        {children}
      </State2ActionContext.Provider>
    </State2StateContext.Provider>
  );
};
