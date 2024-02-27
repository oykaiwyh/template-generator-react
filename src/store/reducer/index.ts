import type { userAction } from '../action';
import { IUserProps } from '../state';

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

export default {};
