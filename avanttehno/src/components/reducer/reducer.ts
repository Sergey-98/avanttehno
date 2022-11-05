import { State, DispatchType } from '../../types/types';

export function reducer(state: State, action: DispatchType) {
  switch (action.type) {
    case 'resetRequisites':
      state.isOpenRequisites = action.payload.isOpenRequisites;
      return {
        ...state,
      };
    default:
      return state;
  }
  // return newState;
  // console.log(state);
}
