export enum ItemActionType{
    GET_ITEM = 'GET_ITEM',
    GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS',
    GET_ITEM_FAIL = 'GET_ITEM_FAIL'
}
interface itemPending
{
    type : ItemActionType.GET_ITEM;
}

interface itemSuccess {
    type: ItemActionType.GET_ITEM_SUCCESS;
    payload: string[];
}

interface itemFail {
    type: ItemActionType.GET_ITEM_FAIL;
    payload: string ;
}

export type ItemAction = itemPending | itemSuccess | itemFail;
