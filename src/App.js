import "./styles.css";
import React from "react";
import { State1Provider, State2Provider } from "./context";
import { CounterOne } from "./counterOne";
import { CounterTwo } from "./counterTwo";

console.clear();

export default function App() {
  return (
    <State1Provider>
      <State2Provider>
        <div className="App">
          <CounterOne />
          <div className={"spacer"}></div>
          <CounterTwo />
        </div>
      </State2Provider>
    </State1Provider>
  );
}
