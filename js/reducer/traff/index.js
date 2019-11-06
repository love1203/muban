import Types from '../../action/types'
import AsyncStorage from '@react-native-community/async-storage'


const defaultState={
    traff: {
        lk:false,
        snmap:false,
        maplc:false,
        treed:false,
        textlabel:true,
        znz:false,
        blc:false
    }
}
export default function onAction(state=defaultState,action){
    switch(action.type){
        case Types.MAP_TRAFF:
            return{
                ...state,
                traff:action.traff
            };
        default:
            return state;
    }
}