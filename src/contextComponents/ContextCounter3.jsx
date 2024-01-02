import React, { useState, memo } from 'react';

import './Counter.css';

function Counter3Child() {
  console.log('Counter3 Child render');
  
  return (
    <p className="counter__child">
      Counter 3 Child
    </p>
  );
}

function ContextCounter3() {
  console.log('ContextCounter3 render');
  
  const [count3, setCount3] = useState(0);

  const addCount = () => {
    setCount3(count3 + 1);
  };

  const minusCount = () => {
    setCount3(count3 - 1);
  };

  return (
    <div className="counter__container">
      <h3>Counter 3</h3>
      <p>{count3}</p>
      <div className="counter__controllers">
        <button onClick={addCount}>+ 1</button>
        <button onClick={minusCount}>- 1</button>
      </div>
      <Counter3Child />
    </div>
  );
}

export default memo(ContextCounter3);