import {HIDE_DIALOG, SHOW_DIALOG} from "../actions/DialogActions/DialogActionTypes";
import deepcopy from "deepcopy";

export const dialog = (state = {}, action) => {

    switch (action.type) {
        case SHOW_DIALOG:
            return {
                ...state,
                [action.id]: {
                    data: action.data,
                    open: true
                },
            }
        case HIDE_DIALOG:
            let copy = deepcopy(state)
            delete copy[action.id]
            return copy
        default:
            return state
    }
}

export default dialog