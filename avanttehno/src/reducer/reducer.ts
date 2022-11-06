import { State, FormParamState, DispatchType, DispatchFormType } from '../types/types';

export function reducer(state: State, action: DispatchType) {
  switch (action.type) {
    case 'resetRequisites':
      state.isOpenRequisites = action.payload.isOpenRequisites;
      return {
        ...state,
      };
    case 'resetModal':
      state.isOpenModal = action.payload.isOpenModal;
      return {
        ...state,
      };
    default:
      return state;
  }
}

export function formReducer(state: FormParamState, action: DispatchFormType) {
  switch (action.type) {
    case 'name':
      state.name = action.payloadForm.name;
      return {
        ...state,
      };
    case 'phoneNumber':
      state.phoneNumber = action.payloadForm.phoneNumber;
      return {
        ...state,
      };
    case 'email':
      state.email = action.payloadForm.email;
      return {
        ...state,
      };
    case 'message':
      state.message = action.payloadForm.message;
      return {
        ...state,
      };
    case 'errorName':
      // state.isOpenRequisites = action.payload.isOpenRequisites;
      return {
        ...state,
      };
    case 'errorNumber':
      // state.isOpenRequisites = action.payload.isOpenRequisites;
      return {
        ...state,
      };
    case 'errorEmail':
      // state.isOpenRequisites = action.payload.isOpenRequisites;
      return {
        ...state,
      };
    case 'errorMessage':
      // state.isOpenRequisites = action.payload.isOpenRequisites;
      return {
        ...state,
      };
    default:
      return state;
  }
}
