import { Action } from 'redux';
import { CounterActions } from '@/store/actions/counter.actions';

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

export const counterReducer = (
  state = initialState,
  action: Action<CounterActions> & { payload: { quantity: number } },
) => {
  switch (action.type) {
    case CounterActions.CHANGE_COUNT:
      return {
        ...state,
        count: state.count + action.payload.quantity,
      };

    case CounterActions.RESET_COUNT:
      return initialState;

    default:
      return state;
  }
};
