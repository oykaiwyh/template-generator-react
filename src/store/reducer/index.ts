import { IETextDefaultProps } from '@/utils/interface';
import { CSSProperties } from 'react';
import { produce } from 'immer';
import type { editorActions, templateAction, userAction } from '../action';

import {
  IComponentProps,
  IEditorProps,
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

export type TActionType = {
  [P in keyof IETextDefaultProps]?: string;
};

export const editorReducer = <
  T extends IComponentProps | string | CSSProperties,
>(
  state: IEditorProps,
  { type, payload }: TEditorReducersProps<T>,
): typeof initEditorState => {
  switch (type) {
    case 'change':
      if (payload) {
        const currentIndex = state.components.findIndex(
          (item) => item.id === state.currentComponentID,
        );
        return produce(state, (draft) => {
          draft.components[currentIndex].props = {
            ...draft.components[currentIndex].props,
            ...(payload as CSSProperties),
          };
        });
      }
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
