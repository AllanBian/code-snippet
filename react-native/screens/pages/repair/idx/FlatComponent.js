import React, { PureComponent } from 'react';
import { View, StyleSheet, Platform, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { Right, Text, Body, Card, CardItem } from "native-base";

import Layout from '../../../../constants/Layout';
import variables from "../../../theme/variables/yiyou";
const { width, height } = Dimensions.get('window');

const flatHeight = Platform.OS === "ios" ? 50 : 20;

const styles = StyleSheet.create({
    flatBox: {
        paddingHorizontal: 20,
        height: height - variables.toolbarHeight - variables.footerHeight - flatHeight - 150,
    },
    cardStyle: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginBottom: 10,
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

class SearchComponent extends PureComponent {
    constructor(props){
        super(props);
    }

    state = {
        refreshing: false,
        lists: [
            {
                id: 1,
                title: "UASTYDAUSOJD180912021",
                badge: "普通",
                content: "T1航站楼出发层9号门里面旅客",
                status: "等待接单",
                person: "张志超",
                time: "10-23 19:24",
            },
            {
                id: 2,
                title: "ASUDIOASID0912021",
                badge: "普通",
                content: "T1航站楼出发层9号门里面旅客",
                status: "等待接单",
                person: "张志超",
                time: "10-23 19:24",
            },
            {
                id: 3,
                title: "CAJKSHDIUASD912021",
                badge: "普通",
                content: "T1航站楼出发层9号门里面旅客",
                status: "等待接单",
                person: "张志超",
                time: "10-23 19:24",
            },
            {
                id: 4,
                title: "PDT1ZH20180912021",
                badge: "普通",
                content: "T1航站楼出发层9号门里面旅客",
                status: "等待接单",
                person: "张志超",
                time: "10-23 19:24",
            },
            {
                id: 5,
                title: "PDT1ZH20180912021",
                badge: "普通",
                content: "T1航站楼出发层9号门里面旅客",
                status: "等待接单",
                person: "张志超",
                time: "10-23 19:24",
            },
            {
                id: 6,
                title: "PDT1ZH20180912021",
                badge: "普通",
                content: "T1航站楼出发层9号门里面旅客",
                status: "等待接单",
                person: "张志超",
                time: "10-23 19:24",
            },
            {
                id: 7,
                title: "PDT1ZH20180912021",
                badge: "普通",
                content: "T1航站楼出发层9号门里面旅客",
                status: "等待接单",
                person: "张志超",
                time: "10-23 19:24",
            },
            {
                id: 8,
                title: "PDT1ZH20180912021",
                badge: "普通",
                content: "T1航站楼出发层9号门里面旅客",
                status: "等待接单",
                person: "张志超",
                time: "10-23 19:24",
            }
        ]
    }

    
    // 下拉刷新触发
    onRefresh = () => {
        const { currentglTab } = this.props;

        if( currentglTab === "wait") {

        }

        if( currentglTab === "doing") {

        }

        if( currentglTab === "check") {

        }

        if( currentglTab === "done") {

        }
    }

    // 上拉加载
    onEndReached = () => {
        const { currentglTab } = this.props;

        if( currentglTab === "wait") {

        }

        if( currentglTab === "doing") {

        }

        if( currentglTab === "check") {

        }

        if( currentglTab === "done") {

        }

        // alert("上拉加载成功:" + currentglTab);
    }

    touchOrder = (id) => {
        alert(id)
    }

    goTo = (routeName) => {
        const { navigation, currentglTab } = this.props;
        if( currentglTab === "wait") {
            navigation.push("RepairDetail");
        }

        if( currentglTab === "doing") {
            navigation.push("RepairTake");
        }

        if( currentglTab === "check") {
            navigation.push("RepairDetail");
        }

        if( currentglTab === "done") {
            navigation.push("RepairDetail");
        }
        
    }

    renderItem = ({ item, index}) => {
        const { id, title, badge, content, status, person, time } = item;
        const Component = (
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
        )
        return (
            <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={() => {this.goTo()}}
            >
                {Component}
            </TouchableOpacity>
        );
    }

    render() {
        const { searchText, item, currentglTab } = this.props;
        const { refreshing, lists } = this.state;

        return (
            <View style={[styles.flatBox, item.type !== currentglTab && Layout.hideView]}>
                <FlatList
                    data={lists}
                    keyExtractor={item => item.id.toString()}
                    refreshing={refreshing}
                    onRefresh={this.onRefresh}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={0.5}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

export default SearchComponent;