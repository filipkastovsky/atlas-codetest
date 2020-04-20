import { ActionTypes } from '../_types/ActionTypes';

export const setListId = (payload: string) => ({
    type: ActionTypes.setListId,
    payload,
});

export type setListIdActionType = ReturnType<typeof setListId>;
