import React, { createContext, useState, useMemo, useContext } from 'react';

import Counter1 from './ContextCounter1';
import Counter2 from './ContextCounter2';
import Counter3 from './ContextCounter3';

// 1. create context
// 2. useContext
// 3. pass to provider
const CounterContext = createContext(null);

export function useCounterContext() {
  const counterContext = useContext(CounterContext);

  return counterContext;
}

function CountersInContext() {
  const [count1,setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const contextValue = useMemo(() => ({
    count1,
    count2,
    setCount1,
    setCount2,
  }), [
    count1,
    count2,
    setCount1,
    setCount2,
  ]);

  return (
    <div>
      <CounterContext.Provider value={contextValue}>
        <h2>In Context</h2>
        <Counter1 />
        <Counter2 />
        <Counter3 />
      </CounterContext.Provider>
    </div>
  );
}

export default CountersInContext;
