import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Badge } from 'native-base';

// 引入当前页面样式
import Layout from '../../../../constants/Layout';
const styles = StyleSheet.create({
    itemBox: {
        borderLeftWidth: 2,
        borderLeftColor: "#1bc7cc",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: 30,
        paddingTop: 10,
        paddingBottom: 30,
    },
    round: {
        width: 10,
        height: 10,
        backgroundColor: "#1bc7cc",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ffffff",
        overflow: "hidden",
        position: "absolute",
        left: -6,
        top: 15,
    },
    itemBody: {
        flex: 1,
    },
    itemTitle: {
        fontSize: 18,
        color: "#203c7d",
        fontWeight: "bold",
    },
    itemTime: {
        fontSize: 14,
        color: "#203c7d",
    },
})

class ListComponent extends PureComponent {
    constructor(props){
        super(props);
    }
    
    state = {

    }

    componentWillMount = () => {

    }

    componentDidMount = () => {

    }

    componentWillUnmount = () => {

    }

    render() {
        const { item } = this.props;
        const { title, time } = item;

        return (
            <View style={styles.itemBox}>
                <View style={styles.round}></View>
                <View style={styles.itemBody}>
                    <Text style={styles.itemTitle}>{title}</Text>
                    <Text style={styles.itemTime}>{time}</Text>
                </View>
            </View>
        )
    }
}

export default ListComponent;