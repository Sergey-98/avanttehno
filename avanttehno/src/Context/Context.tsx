import React, { Dispatch, SetStateAction } from 'react';
import {
  State,
  FormParamState,
  DispatchType,
  DispatchFormType,
  ForkliftState,
  DispatchForkliftType,
} from '../types/types';

type PropsP = {
  state: State;
  dispatch: Dispatch<DispatchType>;
  formState: FormParamState;
  formDispatch: Dispatch<DispatchFormType>;
  isBurger: boolean;
  catalogTitle: string;
  setCatalogTitle: Dispatch<SetStateAction<string>>;
  setIsBurger: Dispatch<SetStateAction<boolean>>;
  forkliftState: ForkliftState;
  forkliftDispatch: Dispatch<DispatchForkliftType>;
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
  isBurger: false,
  setIsBurger: () => {},
  catalogTitle: '',
  setCatalogTitle: () => {},
  forkliftState: { type: '' },
  forkliftDispatch: () => {},
});
