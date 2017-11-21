import React, { Component } from 'react';
import { Platform, StyleSheet, Text, Button, View } from 'react-native';

const globalVals = require ('../../libs/global');

import Swiper from 'react-native-swiper';
import styles from '../../libs/style/style';
import walkThroughtStyle from './style';

class WalkThrough extends Component {

    render(){
        return(
            <View style={walkThroughtStyle.sliderWrapper}>
                <Text style={walkThroughtStyle.textColor}>reactJs</Text>
            </View>
        )
    }

}

export default WalkThrough;

