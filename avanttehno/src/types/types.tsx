export type Props = {
  children?: React.ReactNode;
  placeholder?: React.ReactNode;
  onClick?: () => void;
};

export type ContactType = {
  icon?: string;
  title?: string;
  text?: string;
  id?: number;
};
export type AdvantageProps = {
  title: string;
  text: string;
  icon?: string;
};

export type State = {
  isOpenRequisites?: boolean;
  isOpenMenu?: boolean;
  isOpenModal?: boolean;
};

export type DispatchType = {
  type?: string;
  payload: State;
};

export type DispatchFormType = {
  type?: string;
  payloadForm: FormParamState;
};

export type InfoProps = {
  src: string;
  title: string;
  text: string;
};

export type FormParamState = {
  name?: string;
  phoneNumber?: string;
  email?: string;
  message?: string;
  errorName?: string;
  errorNumber?: string;
  errorEmail?: string;
  errorMessage?: string;
};
