import React, { memo } from 'react';

import { useCounterContext } from './CountersInContext';

import './Counter.css';

function Counter1Child() {
  console.log('Counter1 Child render');

  return (
    <p className="counter__child">
      Counter 1 Child
    </p>
  );
}

function ContextCounter1() {
  console.log('ContextCounter1 render');

  const { count1, setCount1 } = useCounterContext();

  const addCount = () => {
    setCount1(count1 + 1);
  };

  const minusCount = () => {
    setCount1(count1 - 1);
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

export default memo(ContextCounter1);

