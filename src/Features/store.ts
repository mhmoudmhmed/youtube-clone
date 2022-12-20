import { searchState } from "src/Components/search.slice";
import search from "../Components/search.slice";
import { Action, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export interface RootState {
  search: searchState;
}

const rootReducer = {
  search,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (middleware) =>
    middleware({
      serializableCheck: false,
    }),
});

export default store;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;

export const useAppThunkDispatch = () => useDispatch<ThunkAppDispatch>();
export declare type TRootState = ReturnType<typeof store.getState>;
