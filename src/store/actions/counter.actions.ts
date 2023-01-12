export enum CounterActions {
  CHANGE_COUNT = 'CHANGE_COUNT',
  RESET_COUNT = 'RESET_COUNT',
}

export const changeCount = (payload: { quantity: number }) => ({
  type: CounterActions.CHANGE_COUNT,
  payload,
});

export const resetCount = () => ({ type: CounterActions.RESET_COUNT });
