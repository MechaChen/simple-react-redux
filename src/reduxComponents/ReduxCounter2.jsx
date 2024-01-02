import React from 'react';

import { useSelector, useDispatch } from './simpleReactRedux';
import { actionTypes } from './store';

import './Counter.css';

function Counter2Child() {
  console.log('Counter 2 Child render');

  return (
    <p className="counter__child">
      Counter 2 Child
    </p>
  );
}

function ReduxCounter2() {
  const count2 = useSelector((state) => state.count2);
  const dispatch = useDispatch();

  const addCount = () => {
    dispatch({ type: actionTypes.ADD_COUNT2 });
  };

  const minusCount = () => {
    dispatch({ type: actionTypes.MINUS_COUNT2 });
  };

  return (
    <div className="counter__container">
      <h3>Counter 2</h3>
      <p>{count2}</p>
      <div className="counter__controllers">
        <button onClick={addCount}>+ 1</button>
        <button onClick={minusCount}>- 1</button>
      </div>
      <Counter2Child />
    </div>
  );
}

export default ReduxCounter2;
