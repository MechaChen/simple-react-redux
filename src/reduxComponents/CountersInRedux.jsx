import React, { createContext } from 'react';

import { Provider } from './simpleReactRedux';

import store from './store';
import ReduxCounter1 from './ReduxCounter1';
import ReduxCounter2 from './ReduxCounter2';
// import ReduxCounter3 from './ReduxCounter3';

function CountersInRedux() {
  return (
    <div>
      <Provider store={store}>
        <h2>In Redux</h2>
        <ReduxCounter1 />
        <ReduxCounter2 />
        {/* <Counter3 /> */}
      </Provider>
    </div>
  );
}

export default CountersInRedux;
