import React, { PureComponent } from 'react';
import { TouchableOpacity, View, FlatList } from 'react-native';
import { Container, Header, Text, Body, Title, Content, Left, Button, Icon, Right } from "native-base";

import ListComponent from './ListComponent';

// 引入当前页面样式
import styles from './indexStyle';
import Layout from '../../../../constants/Layout';

class RepairLog extends PureComponent {

    constructor(props){
        super(props);
    }

    state = {
        refreshing: false,
        lists: [
            {
                id: 1,
                name: "张一山",
                liushui: "231409",
                content: "设备维修保养",
                code: "WP13128390128301",
                time: "2018-09-23 12:20:09",
            },
            {
                id: 2,
                name: "张一山",
                liushui: "231409",
                content: "设备维修保养",
                code: "WP13128390128301",
                time: "2018-09-23 12:20:09",
            },
            {
                id: 3,
                name: "张一山",
                liushui: "231409",
                content: "设备维修保养",
                code: "WP13128390128301",
                time: "2018-09-23 12:20:09",
            },
            {
                id: 4,
                name: "张一山",
                liushui: "231409",
                content: "设备维修保养",
                code: "WP13128390128301",
                time: "2018-09-23 12:20:09",
            },
            {
                id: 5,
                name: "张一山",
                liushui: "231409",
                content: "设备维修保养",
                code: "WP13128390128301",
                time: "2018-09-23 12:20:09",
            },
            {
                id: 6,
                name: "张一山",
                liushui: "231409",
                content: "设备维修保养",
                code: "WP13128390128301",
                time: "2018-09-23 12:20:09",
            },
            {
                id: 7,
                name: "张一山",
                liushui: "231409",
                content: "设备维修保养",
                code: "WP13128390128301",
                time: "2018-09-23 12:20:09",
            },
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

    goTo = (routeName) => {
        const { navigation } = this.props;
        navigation.push(routeName, {
            name: 'test',
            callback: ((name) => {
                console.log(name);
            })
        });
    }

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
                            工作日志
                        </Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.goTo("RepairLogAdd")}>
                            <Icon ios="ios-add" android="md-add" style={Layout.LeftButtonIcon} />
                        </Button>
                    </Right>
                </Header>
                <View style={styles.flatBox}>
                    <Text style={styles.listTitle} >
                        共3条数据
                    </Text>
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

export default RepairLog;
