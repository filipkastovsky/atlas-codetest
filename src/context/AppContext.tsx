import { createContext, Dispatch } from 'react';
import { initialState } from './reducers/initialState';
import { IAppState } from './_types/IAppState';
import { ActionsType } from './actions/ActionsType';

export const AppContext = createContext<{
    state: IAppState;
    dispatch: Dispatch<ActionsType>;
}>({
    state: initialState,
    dispatch: () => null,
});
