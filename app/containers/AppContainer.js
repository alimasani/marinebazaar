import React, { Component } from 'react'
import { Platform, StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { ActionCreators } from '../actions'
import styles from '../libs/style/style'
import WalkThrough from '../components/walkThrough/walkThrough'

class AppContainer extends Component {

    addCategory(){
        this.props.addCategory();
    }

    render() {
        return (
             <View>
                <WalkThrough />
                <Text>Count: {this.props.reactCount}</Text>
                <TouchableHighlight onPress={() => this.props.addCategory()}><Text>Increase</Text></TouchableHighlight>
            </View>
        );
      }

      // Test change
      
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(ActionCreators,dispatch);
}

export default connect((state) => { 
    
    return {
        reactCount: state.reactCount
    }

}, mapDispatchToProps)(AppContainer);