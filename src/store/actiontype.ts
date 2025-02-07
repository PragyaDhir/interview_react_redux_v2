export enum ActionType{
    GET_IMAGE = 'GET_IMAGE',
    GET_IMAGE_SUCCESS = 'GET_IMAGE_SUCCESS',
    GET_IMAGE_FAIL = 'GET_IMAGE_FAIL'
}
interface imagePending
{
    type : ActionType.GET_IMAGE;
}

interface imageSuccess {
    type: ActionType.GET_IMAGE_SUCCESS;
    payload: string[];
}

interface imageFail {
    type: ActionType.GET_IMAGE_FAIL;
    payload: string ;
}

export type Action = imagePending | imageSuccess | imageFail;
