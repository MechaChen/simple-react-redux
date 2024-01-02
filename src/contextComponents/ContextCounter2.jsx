import React, { memo } from 'react';

import { useCounterContext } from './CountersInContext';

import './Counter.css';

function Counter2Child() {
  console.log('Counter2 Child render');
  
  return (
    <p className="counter__child">
      Counter 2 Child
    </p>
  );
}

function ContextCounter2() {
  console.log('ContextCounter2 render');

  const { count2, setCount2 } = useCounterContext();

  const addCount = () => {
    setCount2(count2 + 1);
  };

  const minusCount = () => {
    setCount2(count2 - 1);
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

export default memo(ContextCounter2);
