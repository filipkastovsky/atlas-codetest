import { IAppState } from '../_types/IAppState';
import { ActionsType } from '../actions/ActionsType';
import { ActionTypes } from '../_types/ActionTypes';
import uniq from 'lodash/uniq';

export const appReducer = (
    state: IAppState,
    action: ActionsType,
): IAppState => {
    console.log(action);
    switch (action.type) {
        case ActionTypes.setFileId:
            return { ...state, fileId: action.payload };
        case ActionTypes.setListId:
            return { ...state, listId: action.payload };
        case ActionTypes.openFile:
            return {
                ...state,
                fileId: action.payload,
                openFileIds: uniq([...state.openFileIds, action.payload]),
            };
        case ActionTypes.closeFile:
            return {
                ...state,
                fileId: '',
                openFileIds: state.openFileIds.filter(
                    (id) => id !== action.payload,
                ),
            };
        default:
            return state;
    }
};

export type appReducerType = typeof appReducer;
