import { create } from 'zustand';
import { initTemplatesState, initUserState } from '../state';
import { templateReducer, userReducer } from '../reducer';
import type { templateAction, userAction } from '../action';

interface IUserPatch {
  useDispatch: (_action: userAction) => void;
}

interface ITemplatePatch {
  useDispatch: (_action: templateAction) => void;
}

export const useUserStore = create<typeof initUserState & IUserPatch>(
  (set) => ({
    ...initUserState,
    useDispatch: (action: userAction) =>
      set((state) => userReducer(state, action)),
  }),
);

export const useTemplateStore = create<
  typeof initTemplatesState & ITemplatePatch
>((set) => ({
  ...initTemplatesState,
  useDispatch: (action: templateAction) =>
    set((state) => templateReducer(state, action)),
}));

export default {};
