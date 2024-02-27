export type userActions = {
  login: () => void;
  logout: () => void;
};

export type userAction = {
  type: keyof userActions;
};
