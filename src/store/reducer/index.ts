import type { templateAction, userAction } from '../action';
import { IUserProps, initTemplatesState } from '../state';

export const userReducer = (
  state: IUserProps,
  action: userAction,
): IUserProps => {
  switch (action.type) {
    case 'login':
      return { isLogin: true };
    case 'logout':
      return { isLogin: false };
    default:
      return state;
  }
};

export const templateReducer = (
  state: typeof initTemplatesState,
  action: templateAction,
): typeof initTemplatesState => {
  switch (action.type) {
    case 'setID':
      return state;
    default:
      return state;
  }
};

export default {};
