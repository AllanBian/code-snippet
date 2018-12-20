import React, { PureComponent } from 'react';
import { View, Platform, Dimensions, FlatList } from 'react-native';
import { Container, Header, Left, Right, Button, Icon, Title, Text, Body } from "native-base";

import ListComponent from './ListComponent';

import styles from './indexStyle';
import Layout from '../../../../constants/Layout';

class RepairHistory extends PureComponent {

    constructor(props) {
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

    componentWillMount = () => {

    }

    componentDidMount = () => {

    }

    componentWillUnmount = () => {

    }

    goBack = (page) => {
        const { navigation } = this.props;
        navigation.goBack();
    }
    
    // 下拉刷新触发
    onRefresh = () => {
    }

    // 上拉加载
    onEndReached = () => {
    }

    onPressItem = (id) => {
        // alert(id);
    }

    renderItem = ({ item }) => (
        <ListComponent
            id={item.id}
            item={item}
            onPressItem={this.onPressItem}
        />
    )

    render() {
        const { refreshing, lists } = this.state;

        return (
            <Container style={Layout.containerBg}>
                <Header style={Layout.headerColor}>
                    <Left>
                        <Button transparent onPress={() => this.goBack()}>
                            <Icon ios="ios-arrow-back" android="md-arrow-back" style={Layout.LeftButtonIcon} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={Layout.headerTitleColor}>
                            维修历史记录
                        </Title>
                    </Body>
                    <Right></Right>
                </Header>
                <View style={styles.flatBox}>
                    <FlatList
                        data={lists}
                        keyExtractor={item => item.id.toString()}
                        refreshing={refreshing}
                        onRefresh={this.onRefresh}
                        onEndReached={this.onEndReached}
                        onEndReachedThreshold={0.5}
                        extraData={this.state}
                        renderItem={this.renderItem}
                    />
                </View>
            </Container>
        )
    }
}

export default RepairHistory;
