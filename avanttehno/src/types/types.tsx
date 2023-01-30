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
  isOpenModalCallback?: boolean;
};

export type DispatchType = {
  type?: string;
  payload: State;
};

export type DispatchForkliftType = {
  type?: string;
  payload: ForkliftState;
};

export type DispatchFormType = {
  type?: string;
  payloadForm: FormParamState;
};

export type DispatchFormCallbackType = {
  type?: string;
  payloadFormCallback: FormCallbackParamState;
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
  model?: string;
  errorName?: string;
  errorNumber?: string;
  errorEmail?: string;
  errorMessage?: string;
};
export type FormCallbackParamState = {
  name?: string;
  phoneNumber?: string;
  errorName?: string;
  errorNumber?: string;
};

// export type Forklifts = {
//   electricForklift: ForkliftCardType;
//   petrolForklift: ForkliftCardType;
//   dieselForklift: ForkliftCardType;
//   tricycleForklift: ForkliftCardType;
//   offRoadForklift: ForkliftCardType;
//   sideForklift: ForkliftCardType;
// };

export type ForkliftState = {
  type: string;
};

export type ForkliftCardType = {
  title?: string;
  img?: string;
  values?: object;
};

type SpecificationsType = {
  model?: string;
  loadCapacity?: string;
  engineType?: string;
  liftingHeight?: string;
  wheelType?: string;
};

export type TypeForForkliftCard = {
  title?: string;
  img?: string;
  description?: SpecificationsType;
};

export type PropsCardType = {
  cardValue: ForkliftCardType;
  key: number;
  onOpenForklift?: () => void;
};

export type PropsForkliftCardType = {
  cardValue: TypeForForkliftCard;
  key: number;
  onOpenForklift?: () => void;
};
