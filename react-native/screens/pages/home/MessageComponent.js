import React, { PureComponent } from 'react';
import { View, FlatList } from 'react-native';
import { Container, Text, Header, Body, Title, Icon, Input } from "native-base";

import MessageListComponent from './MessageListComponent';

import Layout from '../../../constants/Layout';
import styles from './messageStyle';

class MessageComponent extends PureComponent {

    constructor(props) {
        super(props);
    }

    state = {
        refreshing: false,
        lists: [
            {
                id: 1,
                title: "工作通知: 维修单1",
                content: "维修等待接单:4.4米层 2,3号门之间的",
                time: "10:16",
                num: 10,
            },
            // {
            //     id: 2,
            //     title: "工作通知: 维修单2",
            //     content: "维修等待接单:4.4米层 2,3号门之间的",
            //     time: "10:16",
            //     num: 111,
            // },
        ],
    }

    componentWillMount = () => {

    }

    componentDidMount = () => {

    }

    componentWillUnmount = () => {

    }

    onPressItem = (id) => {
        const { navigate } = this.props.navigation;
        navigate("MessageList");
    }

    renderItem = ({ item }) => (
        <MessageListComponent
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
                    <Body>
                        <Title style={Layout.headerTitleColor}>
                            消息通知
                        </Title>
                    </Body>
                </Header>
                <View>
                    <View style={styles.searchArea}>
                        <View style={styles.searchBox}>
                            <Icon ios="ios-search" android="md-search" style={styles.searchIcon} />
                            <Input style={styles.inputItem} placeholder="请输入关键字" placeholderTextColor="#203c7d" onChangeText={this.onChangeText} />
                        </View>
                    </View>
                    <View style={[Layout.contentPad]}>
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
                    </View>

                </View>
            </Container>
        )
    }
}

export default MessageComponent;