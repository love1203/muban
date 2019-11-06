import React,{Component} from 'react'
import {View,Text} from 'react-native'
import {Provider} from 'react-redux'
import AppNavigators from './navigators/AppNavigators'
import store from './store'

class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <Provider store={store}>
          <AppNavigators/>
        </Provider>
    }
}

export default App