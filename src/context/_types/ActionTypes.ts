//! Don't confuse with ActionsType, which refers to discriminated unions of the types of actions

export enum ActionTypes {
    setListId = 'SET_LIST_ID',
    setFileId = 'SET_FILE_ID',
    openFile = 'OPEN_FILE',
    closeFile = 'CLOSE_FILE',
}
