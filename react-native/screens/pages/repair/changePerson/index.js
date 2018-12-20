import React, { PureComponent } from 'react';
import { View, FlatList } from 'react-native';
import { Container, Header, Text, Body, Title, Input, Left, Button, Icon, Right } from "native-base";

import ListComponent from './ListComponent';

// 引入当前页面样式
import Layout from '../../../../constants/Layout';
import styles from './indexStyle';

class RepairChangePerson extends PureComponent {

    constructor(props) {
        super(props);
    }

    state = {
        refreshing: false,
        selected: [],
        lists: [
            {
                id: 1,
                name: "张一山",
                job: "设备设施人员",
                status: "繁忙",
            },
            {
                id: 2,
                name: "张一山",
                job: "设备设施人员",
                status: "繁忙",
            },
            {
                id: 3,
                name: "张一山",
                job: "设备设施人员",
                status: "繁忙",
            },
            {
                id: 4,
                name: "张一山",
                job: "设备设施人员",
                status: "繁忙",
            },
            {
                id: 5,
                name: "张一山",
                job: "设备设施人员",
                status: "繁忙",
            },
            {
                id: 6,
                name: "张一山",
                job: "设备设施人员",
                status: "繁忙",
            },
            {
                id: 7,
                name: "张一山",
                job: "设备设施人员",
                status: "繁忙",
            },
            {
                id: 8,
                name: "张一山",
                job: "设备设施人员",
                status: "繁忙",
            },
            {
                id: 9,
                name: "张一山",
                job: "设备设施人员",
                status: "繁忙",
            },
            {
                id: 10,
                name: "张一山",
                job: "设备设施人员",
                status: "繁忙",
            },
            {
                id: 11,
                name: "张一山",
                job: "设备设施人员",
                status: "繁忙",
            },
            {
                id: 12,
                name: "张一山",
                job: "设备设施人员",
                status: "繁忙",
            },
            {
                id: 13,
                name: "张一山",
                job: "设备设施人员",
                status: "繁忙",
            }
        ],
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
        // alert("上拉加载成功:" + currentglTab);
    }

    onPressItem = (id) => {
        let selected = [];
        selected.push(id)
        this.setState({
            selected
        })
    }
    
    renderItem = ({ item }) => (
        <ListComponent
            id={item.id}
            selected={this.state.selected}
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
                            选择转单人员
                        </Title>
                    </Body>
                    <Right></Right>
                </Header>
                <View>
                    <View style={styles.searchArea}>
                        <View style={styles.searchBox}>
                            <Icon ios="ios-search" android="md-search" style={styles.searchIcon} />
                            <Input style={styles.inputItem} placeholder="请输入关键字" placeholderTextColor="#203c7d" onChangeText={this.onChangeText} />
                            <Icon type="Feather" name="filter" style={styles.searchFilter} />
                        </View>
                    </View>
                    <View style={[Layout.contentPad]}>
                        <View>
                            <Text style={styles.listTitle}>共有70条数据</Text>
                        </View>
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
                        <Button rounded block style={[Layout.btnBgColor, Layout.btnTopMargin]}>
                            <Text style={Layout.btnText}>确认选择</Text>
                        </Button>
                    </View>
                </View>
            </Container>
        )
    }
}

export default RepairChangePerson;
