import React,{Component} from 'react'
import {View,Text} from 'react-native'
import BottomNavigators from '../navigators/BottomNavigators'
import NavigationUtil from '../navigators/NavigationUtil'

export default class HomePage extends Component{
    constructor(props){
        super(props)
    }

    render(){
        NavigationUtil.navigation=this.props.navigation
        return <View style={{flex:1}}>
            <BottomNavigators/>
        </View>
    }
}