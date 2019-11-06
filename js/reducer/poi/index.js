import Types from '../../action/types'
import AsyncStorage from '@react-native-community/async-storage'


const defaultState={
    
}
export default function onAction(state=defaultState,action){
    switch(action.type){
        case Types.MAP_POI:
            return{
                ...state,
                poi:action.poi
            };
        default:
            return state;
    }
}