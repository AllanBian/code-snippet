import React, { PureComponent } from 'react';
import { View, StyleSheet, Platform, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { Card, CardItem, Body, Right, Text } from "native-base";

import variables from "../../../theme/variables/yiyou";
const { width, height } = Dimensions.get('window');

const flatHeight = Platform.OS === "ios" ? 50 : 20;

const styles = StyleSheet.create({
    flatBox: {
        paddingHorizontal: 20,
        height: height - variables.toolbarHeight - variables.footerHeight - flatHeight - 90,
    },
    cardStyle: {
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginBottom: 10,
    },
    cardCenter: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginTop: 10,
        marginBottom: 5,
    },
    cardTitle: {
        color: "#203c7d",
        fontSize: 16,
    },
    cardGray: {
        color: "#aaa",
        fontSize: 12,
    },
    cardStatus: {
        color: "#666",
        fontSize: 12,
    },
})

class ZDComponent extends PureComponent {
    constructor(props){
        super(props);
    }

    state = {
        refreshing: false,
        lists: [
            {
                id: 1,
                title: "测试维修",
                person: "张志超",
                deal: "李杰",
                status: "等待到场",
                code: "Demo201810250001",
                time: "10-23 19:24"
            },
            {
                id: 2,
                title: "测试维修",
                person: "张志超",
                deal: "李杰",
                status: "等待到场",
                code: "Demo201810250001",
                time: "10-23 19:24"
            },
            {
                id: 3,
                title: "测试维修",
                person: "张志超",
                deal: "李杰",
                status: "等待到场",
                code: "Demo201810250001",
                time: "10-23 19:24"
            },
            {
                id: 4,
                title: "测试维修",
                person: "张志超",
                deal: "李杰",
                status: "等待到场",
                code: "Demo201810250001",
                time: "10-23 19:24"
            },
            {
                id: 5,
                title: "测试维修",
                person: "张志超",
                deal: "李杰",
                status: "等待到场",
                code: "Demo201810250001",
                time: "10-23 19:24"
            },
            {
                id: 6,
                title: "测试维修",
                person: "张志超",
                deal: "李杰",
                status: "等待到场",
                code: "Demo201810250001",
                time: "10-23 19:24"
            },
            {
                id: 7,
                title: "测试维修",
                person: "张志超",
                deal: "李杰",
                status: "等待到场",
                code: "Demo201810250001",
                time: "10-23 19:24"
            },
            {
                id: 8,
                title: "测试维修",
                person: "张志超",
                deal: "李杰",
                status: "等待到场",
                code: "Demo201810250001",
                time: "10-23 19:24"
            }
        ]
    }

    // 下拉刷新触发
    onRefresh = () => {

    }

    // 上拉加载
    onEndReached = () => {

        // alert("上拉加载成功:" + currentglTab);
    }

    touchOrder = (id) => {
        alert(id)
    }

    goTo = (routeName) => {
        const { navigation } = this.props;
        navigation.push(routeName, {
            name: 'test',
            callback: ((name) => {
                console.log(name);
            })
        });
    }

    reset = () => {
        const { searchText } = this.props;
        alert('reset:' + searchText);
    }

    renderItem = ({ item, index}) => {
        const { id, title, person, deal, status, code, time } = item;
        const Component = (
            <Card style={styles.cardStyle}>
                <CardItem>
                    <Body>
                        <Text style={styles.cardTitle}>{title}</Text>
                    </Body>
                </CardItem>
                <CardItem style={styles.cardCenter}>
                    <Body>
                        <Text style={styles.cardGray}>发起人: {person}</Text>
                        <Text style={styles.cardGray}>处理人: {deal}</Text>
                    </Body>
                    <Right>
                        <Text style={styles.cardStatus}>{status}</Text>
                    </Right>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text style={styles.cardGray}>{code}</Text>
                    </Body>
                    <Right>
                        <Text style={styles.cardGray}>{time}</Text>
                    </Right>
                </CardItem>
            </Card>
        )
        return (
            <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={() => {this.goTo("RepairCreate")}}
            >
                {Component}
            </TouchableOpacity>
        );
    }

    render() {
        const { lists, refreshing } = this.state;

        return (
            <View style={styles.flatBox}>
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

export default ZDComponent;