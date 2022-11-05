import React, { Dispatch } from 'react';
import { State, DispatchType } from '../types/types';

type Props = {
  state: State;
  dispatch: Dispatch<DispatchType>;
};
export const Context = React.createContext<Props>({
  state: { isOpenRequisites: false },
  dispatch: () => {},
});
