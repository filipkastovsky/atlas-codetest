import { ActionTypes } from '../_types/ActionTypes';

export const closeFile = (payload: string) => ({
    type: ActionTypes.closeFile,
    payload,
});

export type closeFileActionType = ReturnType<typeof closeFile>;
