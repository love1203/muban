import Types from '../types'

export function onThemeChange(theme){
    return dispatch=>{
        dispatch({type:Types.MAP_THEME,theme:theme})
    }
}

export function onTraffChange(traff){
    return dispatch=>{
        dispatch({type:Types.MAP_TRAFF,traff:traff})
    }
}

