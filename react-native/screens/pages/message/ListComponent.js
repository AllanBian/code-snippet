import React, { PureComponent } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Card, CardItem, Left, Body, Right, Text, Icon } from 'native-base';

// 引入当前页面样式
import Layout from '../../../constants/Layout';
const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
    },
    cardItem: {
        marginHorizontal: 10,
        marginVertical: 6,
    },
    body: {
        flex: 4,
    },
    titleBox: {
        position: "relative",
    },
    tip: {
        width: 6,
        height: 6,
        borderRadius: 3,
        right: -6,
        top: 0,
        backgroundColor: "orange",
        position: "absolute",
    },
    title: {
        fontSize: 16,
        color: "#203c7d",
        lineHeight: 26,
    },
    time: {
        fontSize: 12,
        color: "#aaa",
        lineHeight: 22,
    },
})

class ListComponent extends PureComponent {
    constructor(props) {
        super(props)
    }

    onPressItem = () => {
        this.props.onPressItem(this.props.id)
    }

    render() {
        const { id, item } = this.props;
        const { createDate, pointName, system } = item;

        return (
            <TouchableOpacity
                 onPress={this.onPressItem}
                 activeOpacity={0.8}
            >
                <Card style={styles.card}>
                    <CardItem style={styles.cardItem}>
                        <Body style={styles.body}>
                            <View style={styles.titleBox}>
                                <Text style={styles.title}>{system} - {pointName}</Text>
                                <View style={styles.tip}></View>
                            </View>
                            <Text style={styles.time}>创建时间: {createDate}</Text>
                        </Body>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        )
    }

}

export default ListComponent;