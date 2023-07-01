import { Action } from 'movex';
 
// State
export type CounterState = {
  count: number;
};
 
export const initialCounterState: CounterState = {
  count: 0,
};
 
// Actions
export type CounterActions =
  | Action<'increment'>
  | Action<'decrement'>
  | Action<'incrementBy', number>;
 
// Reducer
export const reducer = (state = initialCounterState, action: CounterActions) => {
  if (action.type === 'increment') {
    return {
      ...state,
      count: state.count + 1,
    };
  }
 
  if (action.type === 'decrement') {
    return {
      ...state,
      count: state.count - 1,
    };
  }
 
  if (action.type === 'incrementBy') {
    return {
      ...state,
      count: state.count + action.payload,
    };
  }
 
  return state;
};

export default reducer;