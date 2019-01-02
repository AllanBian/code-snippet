import React, { Component } from 'react';
import { View } from "react-native";
// import { Entypo, Feather } from '@expo/vector-icons';
import {
    Text, Icon
} from "native-base";

import Layout from '../../constants/Layout';
import styles from './indexStyle';


export default class FootComponent extends Component {
    state = {
        text: this.props.text || '已加载所有数据'
    };

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Text style={styles.text}>
                        {this.state.text}
                    </Text>
                </View>
            </View>
        )
    }
}
