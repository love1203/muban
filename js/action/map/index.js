import Types from '../types'

export function onLocation(lnglat){
    return dispatch=>{
        dispatch({type:Types.MAP_LOCATION,lnglat:lnglat})
    }
}

export function onPoi(poi){
    return dispatch=>{
        dispatch({type:Types.MAP_POI,poi:poi})
    }
}

export function onLoading(loading){
    return dispatch=>{
        dispatch({type:Types.MAP_LOADING,loading:loading})
    }
}

