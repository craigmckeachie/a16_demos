import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from "@ngrx/store";

import { counterReducer } from "../counter/shared/counter.reducer";

export interface State {
  count: number;
}

export const reducers: ActionReducerMap<State> = {
  count: counterReducer,
};

export const metaReducers: MetaReducer<State>[] = [];
