import React, { PureComponent } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Text, Card, CardItem, Body, Right } from "native-base";

// 引入当前页面样式
import Layout from '../../../../constants/Layout';

const styles = StyleSheet.create({
    cardStyle: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginTop: 10,
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
        color: "#aaa",
        fontSize: 12,
    },
    cardBadge: {
        borderWidth: 1,
        borderColor: "#1bc7cc",
        backgroundColor: "white",
        alignSelf: "flex-end",
        padding: 2,
        marginLeft: 5,
        borderRadius: 4,
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
        color: "#203c7d",
        fontSize: 16,
    },
    cardStatus: {
        color: "#666",
        fontSize: 12,
    },
    cardBottomBody: {
        flex: 2,
    },
    cardPerson: {
        color: "#aaa",
        fontSize: 12,
    },
    cardTime: {
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
        const { id, title, badge, content, status, person, time } = item;

        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={this.onPressItem}
            >
                <Card style={styles.cardStyle}>
                    <CardItem>
                        <Body style={styles.cardTopBody}>
                            <Text style={styles.cardTitle}>{title}</Text>
                        </Body>
                        <Right style={styles.cardTopRight}>
                            <View style={styles.cardBadge}><Text style={styles.cardBadgeText}>{badge}</Text></View>
                        </Right>
                    </CardItem>
                    <CardItem style={styles.cardCenter}>
                        <Body style={styles.cardCenterBody}>
                            <Text style={styles.cardContent}>{content}</Text>
                        </Body>
                        <Right>
                            <Text style={styles.cardStatus}>{status}</Text>
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Body style={styles.cardBottomBody}>
                            <Text style={styles.cardPerson}>
                                发布人:{person}
                            </Text>
                        </Body>
                        <Right>
                            <Text style={styles.cardTime}>
                                {time}
                            </Text>
                        </Right>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        )
    }
}

export default ListComponent;
