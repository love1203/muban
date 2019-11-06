import React,{Component} from 'react'
import {View,Text} from 'react-native'
import {createBottomTabNavigator,createAppContainer} from 'react-navigation'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {BottomTabBar} from 'react-navigation-tabs'
import {connect} from 'react-redux'
import EventBus from "react-native-event-bus";

import HotPage from '../page/HotPage'
import QsPage from '../page/QsPage'
import CodePush from '../page/CodePush'
import MyPage from '../page/MyPage'

const TABS={
    HotPage:{
        screen:HotPage,
        navigationOptions:{
            tabBarLabel:'首页',
            tabBarIcon:({tintColor,focused})=>(
                <AntDesign
                name={'home'}
                size={22}
                style={{color:tintColor}}
                />
            )
        }
    },
    QsPage:{
        screen:QsPage,
        navigationOptions:{
            tabBarLabel:'发现',
            tabBarIcon:({tintColor,focused})=>(
                <AntDesign
                name={'search1'}
                size={20}
                style={{color:tintColor}}
                />
            )
        }
    },
    MyPage:{
        screen:MyPage,
        navigationOptions:{
            tabBarLabel:'我的',
            tabBarIcon:({tintColor,focused})=>(
                <AntDesign
                name={'user'}
                size={20}
                style={{color:tintColor}}
                />
            )
        }
    },
    CodePush:{
        screen:CodePush,
        navigationOptions:{
            tabBarLabel:'更新',
            tabBarIcon:({tintColor,focused})=>(
                <AntDesign
                name={'user'}
                size={20}
                style={{color:tintColor}}
                />
            )
        }
    }
};

class BottomNavigators extends Component{
    constructor(props){
        super(props)
    }
    _createBottomNav(){
        const {HotPage,QsPage,MyPage,CodePush}=TABS
        if(this.tabs){
            return this.tabs
        }
        return this.tabs=createAppContainer(createBottomTabNavigator({HotPage,QsPage,MyPage,CodePush},{
            tabBarComponent:props=>{return <CreateBottom color={this.props.color} {...props}/>},
            tabBarOptions:{
                style:{
                    height:50
                }
            }
        }))
    }

    render(){
        const BottomNav=this._createBottomNav()
        return <BottomNav
            onNavigationStateChange={(prevState,nextState,aciton)=>{
                EventBus.getInstance().fireEvent('enentClick',{
                    from:prevState.index,
                    to:nextState.index
                })
            }}
        />
    }
}

class CreateBottom extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return <BottomTabBar
            {...this.props}
            activeTintColor={this.props.color}
        />
    }
}

const mapStateToProps=state=>({
    color:state.theme.color,
    text:state.theme.text
})

export default connect(mapStateToProps)(BottomNavigators)