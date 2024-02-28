export type userActions = {
  login: () => void;
  logout: () => void;
};

export type userAction = {
  type: keyof userActions;
};

export type templateActions = {
  setID: () => void;
};

export type templateAction = {
  type: keyof templateActions;
};
