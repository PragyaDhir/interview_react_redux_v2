import axios from 'axios';
import { Dispatch } from 'redux';
import { ItemAction, ItemActionType } from "../actions/itemActionType"

export const getItems =() => {
    return async (dispatch: Dispatch<ItemAction>) => {
        dispatch({
            type: ItemActionType.GET_ITEM
        });

        try {
            const { data } = await axios.get(`http://localhost:8080/items`);
            dispatch({
                type: ItemActionType.GET_ITEM_SUCCESS,
                payload: data  
            });

        } catch(err) {
            dispatch({
                type: ItemActionType.GET_ITEM_FAIL,
                payload: err.message
            });
        }
    }
} 