import Types from '../../action/types'


const defaultState={
    loading:false
}
export default function onAction(state=defaultState,action){
    switch(action.type){
        case Types.MAP_LOADING:
            return{
                ...state,
                loading:action.loading
            };
        default:
            return state;
    }
}