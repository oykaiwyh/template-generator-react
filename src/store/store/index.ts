import { create } from 'zustand';
import { initUserState } from '../state';
import { userReducer } from '../reducer';
import type { userAction } from '../action';

interface fi {
  // eslint-disable-next-line no-unused-vars
  useDispatch: (action: userAction) => void;
}

export const useUserStore = create<typeof initUserState & fi>((set) => ({
  ...initUserState,
  useDispatch: (action: userAction) =>
    set((state) => userReducer(state, action)),
}));

export default {};
