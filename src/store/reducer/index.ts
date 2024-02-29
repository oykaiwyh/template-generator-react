import type { editorActions, templateAction, userAction } from '../action';
import { IUserProps, initEditorState, initTemplatesState } from '../state';

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

export type TEditorReducersProps<T> = {
  type: keyof editorActions;
  payload?: T;
};

export const editorReducer = <T>(
  state: typeof initEditorState,
  { type }: TEditorReducersProps<T>,
): typeof initEditorState => {
  switch (type) {
    case 'change':
      return state;
    default:
      return state;
  }
};

export default {};
