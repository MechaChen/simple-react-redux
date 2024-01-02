import React from 'react';

import { useSelector, useDispatch } from './simpleReactRedux';
import { actionTypes } from './store';

import './Counter.css';

function Counter1Child() {
  console.log('Counter 1 Child render');

  return (
    <p className="counter__child">
      Counter 1 Child
    </p>
  );
}

function ReduxCounter1() {
  const count1 = useSelector((state) => state.count1);
  const dispatch = useDispatch();

  const addCount = () => {
    dispatch({ type: actionTypes.ADD_COUNT1 });
  };

  const minusCount = () => {
    dispatch({ type: actionTypes.MINUS_COUNT1 });
  };

  return (
    <div className="counter__container">
      <h3>Counter 1</h3>
      <p>{count1}</p>
      <div className="counter__controllers">
        <button onClick={addCount}>+ 1</button>
        <button onClick={minusCount}>- 1</button>
      </div>
      <Counter1Child />
    </div>
  );
}

export default ReduxCounter1;
