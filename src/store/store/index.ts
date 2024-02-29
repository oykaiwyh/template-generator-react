import { create } from 'zustand';
import { initEditorState, initTemplatesState, initUserState } from '../state';
import {
  TEditorReducersProps,
  editorReducer,
  templateReducer,
  userReducer,
} from '../reducer';
import type { templateAction, userAction } from '../action';

interface IUserPatch {
  useDispatch: (action: userAction) => void;
}

interface ITemplatePatch {
  useDispatch: (action: templateAction) => void;
}
interface IEditorPatch {
  useDispatch: <T>({ type, payload }: TEditorReducersProps<T>) => void;
}

// 用户数据
export const useUserStore = create<typeof initUserState & IUserPatch>(
  (set) => ({
    ...initUserState,
    useDispatch: (action: userAction) =>
      set((state) => userReducer(state, action)),
  }),
);

// 首页数据
export const useTemplateStore = create<
  typeof initTemplatesState & ITemplatePatch
>((set) => ({
  ...initTemplatesState,
  useDispatch: (action: templateAction) =>
    set((state) => templateReducer(state, action)),
}));

// Editor 页面数据
export const useEditorStore = create<typeof initEditorState & IEditorPatch>(
  (set) => ({
    ...initEditorState,
    useDispatch: (data) => set((state) => editorReducer(state, data)),
  }),
);

export default {};
