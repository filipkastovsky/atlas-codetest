import { ActionTypes } from '../_types/ActionTypes';

export const setFileId = (payload: string) => ({
    type: ActionTypes.setFileId,
    payload,
});

export type setFileIdActionType = ReturnType<typeof setFileId>;
