import type { editorActions, templateAction, userAction } from '../action';
import {
  IComponentProps,
  IUserProps,
  initEditorState,
  initTemplatesState,
} from '../state';

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

export const editorReducer = <T extends IComponentProps | string>(
  state: typeof initEditorState,
  { type, payload }: TEditorReducersProps<T>,
): typeof initEditorState => {
  switch (type) {
    case 'change':
      return state;
    case 'add':
      return payload
        ? {
            ...state,
            components: [...state.components, payload as IComponentProps],
          }
        : state;
    case 'choose':
      return payload
        ? {
            ...state,
            currentComponentID: payload as string,
          }
        : state;
    default:
      return state;
  }
};

export default {};
