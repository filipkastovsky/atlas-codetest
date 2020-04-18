import { ActionTypes } from '../_types/ActionTypes';

export const someAction = (payload: any) => ({
    type: ActionTypes.SomeAction,
    payload,
});

export type someActionType = ReturnType<typeof someAction>;
