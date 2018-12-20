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
        marginHorizontal: 6,
        marginVertical: 6,
    },
    left: {
        flex: 1,
        marginRight: 14,
    },
    icon: {
        fontSize: 20,
        color: "#fff",
    },
    iconBg: {
        backgroundColor: "#00a4c1",
        width: "100%",
        borderRadius: 5,
        position: "relative",
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
    },
    tip: {
        position: "absolute",
        right: -5,
        top: -5,
        backgroundColor: "orange",
        color: "#fff",
        fontSize: 12,
        borderRadius: 2,
        overflow: "hidden",
        paddingHorizontal: 2,
    },
    body: {
        flex: 4,
    },
    title: {
        fontSize: 16,
        color: "#203c7d",
    },
    content: {
        fontSize: 16,
        color: "#aaa",
    },
    right: {
        flex: 1,
    },
    time: {
        fontSize: 12,
        color: "#aaa",
    },
})

class MessageListComponent extends PureComponent {
    constructor(props) {
        super(props)
    }

    onPressItem = () => {
        this.props.onPressItem(this.props.id)
    }

    render() {
        const { id, item } = this.props;
        const { title, content, time, num } = item;

        return (
            <TouchableOpacity
                 onPress={this.onPressItem}
                 activeOpacity={0.8}
            >
                <Card style={styles.card}>
                    <CardItem style={styles.cardItem}>
                        <Left style={styles.left}>
                            <View style={styles.iconBg}>
                                <Icon type="FontAwesome" name="shopping-bag" style={styles.icon} />
                                <Text style={styles.tip}>{num > 99 ? "99+" : num}</Text>
                            </View>
                        </Left>
                        <Body style={styles.body}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.content}>{content}</Text>
                        </Body>
                        <Right style={styles.right}>
                            <Text style={styles.time}>{time}</Text>
                        </Right>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        )
    }

}

export default MessageListComponent;