import Types from '../../action/types'
import AsyncStorage from '@react-native-community/async-storage'


const defaultState={
    theme: 'standard'
}
export default function onAction(state=defaultState,action){
    switch(action.type){
        case Types.MAP_THEME:
            return{
                ...state,
                theme:action.theme
            };
        default:
            return state;
    }
}