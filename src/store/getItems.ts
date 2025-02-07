import axios from 'axios';
import { Dispatch } from 'redux';
import { Action, ActionType } from "./actiontype"

export const getItems =() => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.GET_IMAGE
        });

        try {
            const { data } = await axios.get(`http://localhost:8080/items`);
            console.log(data);
            dispatch({
                type: ActionType.GET_IMAGE_SUCCESS,
                payload: data  
            });

        } catch(err) {
            dispatch({
                type: ActionType.GET_IMAGE_FAIL,
                payload: err.message
            });
        }
    }
} 