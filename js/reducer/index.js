import {combineReducers} from 'redux'
import theme from './theme'
import traff from './traff'
import map from './map/index'
import poi from './poi'
import loading from './loading'
import {rootCom,RootNavigator} from '../navigators/AppNavigators'

const navstate=RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams(rootCom))

const navReducer=(state=navstate,action)=>{
    const nextState=RootNavigator.router.getStateForAction(action,state)
    return nextState||state
}

const index=combineReducers({
    nav:navReducer,
    theme:theme,
    traff:traff,
    map:map,
    poi:poi,
    loading:loading
})

export default index