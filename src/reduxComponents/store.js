import { createStore } from 'redux';

export const actionTypes = {
  ADD_COUNT1: 'ADD_COUNT1',
  MINUS_COUNT1: 'MINUS_COUNT1',
  ADD_COUNT2: 'ADD_COUNT2',
  MINUS_COUNT2: 'MINUS_COUNT2',
}

const initialState = {
  count1: 0,
  count2: 100,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_COUNT1:
      return {
        ...state,
        count1: state.count1 + 1,
      }
    case actionTypes.MINUS_COUNT1:
      return {
        ...state,
        count1: state.count1 - 1,
      }
    case actionTypes.ADD_COUNT2:
      return {
        ...state,
        count2: state.count2 + 1,
      }
    case actionTypes.MINUS_COUNT2:
      return {
        ...state,
        count2: state.count2 - 1,
      }
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;