import React,{Component} from 'react'
import {createStackNavigator,createAppContainer,createSwitchNavigator} from 'react-navigation'
import WelcomePage from '../page/WelcomePage'
import DetailPage from '../page/DetailPage'
import HomePage from '../page/HomePage'
import {connect} from 'react-redux'
import {createReactNavigationReduxMiddleware,createReduxContainer} from 'react-navigation-redux-helpers'

export const rootCom='Init'

const InitNavigator=createStackNavigator({
    WelcomePage:{
        screen:WelcomePage,
        navigationOptions:{
            header:null
        }
    }
})

const MainNavigator=createStackNavigator({
    HomePage:{
        screen:HomePage,
        navigationOptions:{
            header:null
        }
    },
    DetailPage:{
        screen:DetailPage,
        navigationOptions:{
            header:null
        }
    },  
})

export const RootNavigator= createAppContainer(createSwitchNavigator({
    [rootCom]:InitNavigator,
    Main:MainNavigator,
},{
    navigationOptions:{
        header:null
    }
}))

export const middleWare=createReactNavigationReduxMiddleware(
    state => state.nav,
    'root',
)

const AppWithNavigationState = createReduxContainer(RootNavigator, 'root');

const mapStateToProps = state => ({
    state: state.nav,//v2
});

export default connect(mapStateToProps)(AppWithNavigationState);