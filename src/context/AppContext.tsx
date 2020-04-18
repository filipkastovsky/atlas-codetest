import { createContext } from 'react';
import { IInitialState } from './_types/IInitialState';

export const AppContext = createContext<IInitialState>({});
