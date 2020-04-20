import { setFileIdActionType } from './setFileId';
import { setListIdActionType } from './setListId';
import { openFileActionType } from './openFile';
import { closeFileActionType } from './closeFile';
//! Don't confuse with ActionTypes, which refers to an enum of type values of actions

export type ActionsType =
    | setFileIdActionType
    | setListIdActionType
    | openFileActionType
    | closeFileActionType;
