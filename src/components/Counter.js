import React from "react";
import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";
const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const incrementHandlerBy2 = () => {
    dispatch(counterActions.incrementBy2(2));
  };

  const decrementHandlerBy2 = () => {
    dispatch(counterActions.decrementBy2(2));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      {show && <div className={classes.value}>{counter}</div>}
      {!show && <div className={classes.value}>--Counter--</div>}

      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={incrementHandlerBy2}>IncrementBy2</button>
        <button onClick={decrementHandlerBy2}>DecrementBy2</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
