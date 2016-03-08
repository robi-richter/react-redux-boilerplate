import { INCREMENT_COUNTER } from '../actionTypes';

const INITIAL_STATE = {
  counter: 0
};

export function counterReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        counter: state.counter + 1
      };
    default:
      return state;
  }
}
