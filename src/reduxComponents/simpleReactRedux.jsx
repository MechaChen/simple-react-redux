import React, { createContext, useEffect, useContext, useRef, useState } from 'react';

const ReduxContext = createContext(null);

function useReduxContext() {
  const store = useContext(ReduxContext);

  if (!store) {
    throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>')
  }

  return store;
}


// Provider api
export function Provider({ store, children }) {
  return (
    <ReduxContext.Provider value={store}>
      {children}
    </ReduxContext.Provider>
  );
}


// useDispatch api
export function useDispatch() {
  const store = useReduxContext();
  return store.dispatch;
}


// useSelector api
const defaultEqualityFn = (prevState, curState) => prevState === curState;

export function useSelector(selector, equalityFn = defaultEqualityFn) {
  // 1. 先取出 Redux store
  // 2. 用 selector 選取 initialState 監聽的部分，放到 ref 裡作為初始值
  // 3. 看看 store 中的 state 有沒有變更，用 shallow compare 跟 prevState 比較是否一樣
  // 4. 有變更的話就利用 setState 強制 re-render
  // 5. 將 step 4, 5 的步驟放到 updateIfChange function 中，註冊到 redux

  const store = useReduxContext();

  const selectedState = selector(store.getState());
  const prevSelectedState = useRef(selectedState);
  
  const [reRenderTimes, setReRenderTimes] = useState(0);

  const forceReRender = () => {
    setReRenderTimes((prev) => prev + 1);
  }

  const updateIfChange = () => {
    const newSelectedState = selector(store.getState());

    if (equalityFn(prevSelectedState.current, newSelectedState)) {
      return;
    }

    prevSelectedState.current = newSelectedState;
    forceReRender();
  }

  useEffect(() => {
    const unsubscribe = store.subscribe(updateIfChange);

    return unsubscribe;
  }, []);

  return selectedState;
}

export default {
  Provider,
  useDispatch,
  useSelector,
};
