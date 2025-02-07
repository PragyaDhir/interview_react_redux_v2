import { Item } from "../model/item";
import { Action, ActionType } from "./actiontype"
interface State {
    items : Item[],
    loading : boolean,
    error : string | null;
}

const intialState = {
    items : [],
    loading : false,
    error : null
}
export const imageReducer =(state : State= intialState, action :Action) =>{
    switch(action.type)
    {
        case ActionType.GET_IMAGE:
            return {
                loading :false
            }

        case ActionType.GET_IMAGE_SUCCESS:
            return {
                loading : false,
                items : action.payload

        }
        case 'GET_IMAGE_FAIL': return {
            loading :false,
            error : action.payload
        }
        default :
        return state;

    }
}