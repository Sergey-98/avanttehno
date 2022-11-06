import React, { Dispatch } from 'react';
import { State, FormParamState, DispatchType, DispatchFormType } from '../types/types';

type PropsP = {
  state: State;
  dispatch: Dispatch<DispatchType>;
  formState: FormParamState;
  formDispatch: Dispatch<DispatchFormType>;
};

export const Context = React.createContext<PropsP>({
  state: { isOpenRequisites: false, isOpenModal: false },
  dispatch: () => {},
  formState: {
    name: '',
    phoneNumber: '',
    email: '',
    message: '',
    errorName: '',
    errorNumber: '',
    errorEmail: '',
    errorMessage: '',
  },
  formDispatch: () => {},
});
