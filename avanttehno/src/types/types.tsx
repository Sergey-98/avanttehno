export type Props = {
  children?: React.ReactNode;
  placeholder?: React.ReactNode;
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
  value?: string;
};

export type DispatchType = {
  type?: string;
  payload: State;
};

export type InfoProps = {
  src: string;
  title: string;
  text: string;
};
