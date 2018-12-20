import React, { PureComponent } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Text, Card, CardItem, Body, Right } from "native-base";

// 引入当前页面样式
import Layout from '../../../../constants/Layout';

const styles = StyleSheet.create({
    cardStyle: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        // marginTop: 10,
    },
    cardTopBody: {
        flex: 2,
        justifyContent: "center",
    },
    cardTopRight: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    cardTitle: {
        color: "#203c7d",
        fontSize: 16,
    },
    cardBadgeText: {
        color: "#203c7d",
        padding: 0,
        fontSize: 12,
    },
    cardCenter: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginTop: 10,
        marginBottom: 5,
    },
    cardCenterBody: {
        flex: 2,
    },
    cardContent: {
        color: "#aaa",
        fontSize: 12,
    },
})

class ListComponent extends PureComponent {

    constructor(props) {
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

    onPressItem = () => {
        this.props.onPressItem(this.props.id);
    }

    render() {
        const { item } = this.props;
        const { name, liushui, content, code, time } = item;

        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={this.onPressItem}
            >
                <Card style={styles.cardStyle}>
                    <CardItem>
                        <Body style={styles.cardTopBody}>
                            <Text style={styles.cardTitle}>申请人:{name}</Text>
                        </Body>
                        <Right style={styles.cardTopRight}>
                            <Text style={styles.cardBadgeText}>流水号:{liushui}</Text>
                        </Right>
                    </CardItem>
                    <CardItem style={styles.cardCenter}>
                        <Body style={styles.cardCenterBody}>
                            <Text style={styles.cardContent}>工作内容:{content}</Text>
                            <Text style={styles.cardContent}>业务数据编号:{code}</Text>
                            <Text style={styles.cardContent}>填写时间:{time}</Text>
                        </Body>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        )
    }
}

export default ListComponent;
