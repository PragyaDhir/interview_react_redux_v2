import { Item } from "../../model/item";
import { ItemAction, ItemActionType } from "../actions/itemActionType";
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
export const itemReducer =(state : State= intialState, action :ItemAction) =>{
    switch(action.type)
    {
        case ItemActionType.GET_ITEM:
            return {
                loading :false
            }

        case ItemActionType.GET_ITEM_SUCCESS:
            return {
                loading : false,
                items : action.payload

        }
        case ItemActionType.GET_ITEM_FAIL: return {
            loading :false,
            error : action.payload
        }
        default :
        return state;

    }
}