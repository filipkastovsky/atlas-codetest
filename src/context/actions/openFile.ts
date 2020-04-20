import { ActionTypes } from '../_types/ActionTypes';

export const openFile = (payload: string) => ({
    type: ActionTypes.openFile,
    payload,
});

export type openFileActionType = ReturnType<typeof openFile>;
