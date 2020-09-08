import {HIDE_DIALOG, SHOW_DIALOG} from "./DialogActionTypes";


export const showDialog = (dialogId, data = {}) => ({
    type: SHOW_DIALOG,
    id: dialogId,
    data
})

export const hideDialog = dialogId => ({
    type: HIDE_DIALOG,
    id: dialogId,
})
