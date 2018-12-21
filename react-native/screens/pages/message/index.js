import React, { PureComponent } from 'react';
import { View, FlatList } from 'react-native';
import { Container, Left, Right, Header, Body, Title, Icon, Button } from "native-base";

import ListComponent from './ListComponent';

import Layout from '../../../constants/Layout';
import styles from './indexStyle';

import { getMsgList } from '../../../lib/api/message';

class MessageList extends PureComponent {

    constructor(props) {
        super(props);
    }

    state = {
        pageNo: 1,
        pageSize: 20,
        downOrUp: "down",
        getAll: false,
        refreshing: false,
        lists: [],
    }

    componentWillMount = () => {
        this.getMsgList();
    }

    componentDidMount = () => {

    }

    componentWillUnmount = () => {

    }

    goBack = (page) => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    onPressItem = (id) => {
        const { navigate } = this.props.navigation;
        navigate("MessageDetail", {
            id
        });
    }

    // 下拉刷新触发
    onRefresh = () => {
        // alert("下拉刷新触发");
        this.setState({
            getAll: false,
            refreshing: true,
            downOrUp: "down",
            pageNo: 1,
            lists: [],
        },() => {
            this.getMsgList();
        })
    }

    // 上拉加载
    onEndReached = () => {
        const { getAll, pageNo, refreshing } = this.state;
        // alert("上拉加载触发");
        if(!getAll && !refreshing) {
            this.setState({
                downOrUp: "up",
                refreshing: true,
            },() => {
                this.getMsgList();
            })
        }
    }

    getMsgList = async () => {
        const { pageNo, pageSize, downOrUp } = this.state;
        const postData = { pageNo, pageSize };
        const res = await getMsgList(postData);
        const promise = Promise.resolve(res);
        promise.then(({data, response}) => {
            if(data.data.list.length !== 0){
                if (data.data.list.length < pageSize){
                    if (downOrUp === "down") {
                        this.setState({
                            lists: data.data.list,
                            getAll: true,
                            refreshing: false,
                        })
                    } else {
                        this.setState({
                            lists: [...this.state.lists, ...data.data.list],
                            pageNo: pageNo + 1,
                            getAll: true,
                            refreshing: false,
                        })
                    }
                } else {
                    if (downOrUp === "down") {
                        this.setState({
                            lists: data.data.list,
                            refreshing: false,
                        })
                    } else {
                        this.setState({
                            lists: [...this.state.lists, ...data.data.list],
                            pageNo: pageNo + 1,
                            refreshing: false,
                        })
                    }
                }
    
            } else {
                this.setState({
                    getAll: true,
                    refreshing: false,
                })
            }
        })

    }

    renderItem = ({ item }) => (
        <ListComponent
            id={item.id}
            item={item}
            onPressItem={this.onPressItem}
        />
    )

    render() {
        const { lists, refreshing } = this.state;

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
                            消息通知
                        </Title>
                    </Body>
                    <Right></Right>
                </Header>
                <View>
                    <View style={[Layout.contentPad]}>
                        <View style={styles.flatBox}> 
                            <FlatList
                                data={lists}
                                keyExtractor={item => item.id.toString()}
                                refreshing={refreshing}
                                onRefresh={this.onRefresh}
                                onEndReached={this.onEndReached}
                                onEndReachedThreshold={0.2}
                                extraData={this.state}
                                renderItem={this.renderItem}
                            />
                        </View>
                    </View>

                </View>
            </Container>
        )
    }
}

export default MessageList;