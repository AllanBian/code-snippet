import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Container, Header, Text, Body, Title, Content, Left, Right, Button, Icon } from "native-base";

import DetailComponent from './DetailComponent';

// 引入当前页面样式
import styles from './detailStyle';
import Layout from '../../../constants/Layout';

import Message from '../../../lib/api/message';

class MessageDetail extends PureComponent {

    constructor(props){
        super(props);
    }

    state = {}

    componentWillMount = () => {
        this.getMsgDetail();
    }

    componentDidMount = () => {

    }

    componentWillUnmount = () => {

    }

    getMsgDetail = async () => {
        const { navigation } = this.props;
        const id = navigation.state.params.id;
        const postData = { id };
        const res = await Message.getMsgDetail(postData);
        const promise = Promise.resolve(res);
        promise.then(({data, response}) => {
            this.setState({
                ...data.data
            })
        })
    }

    goBack = (page) => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    render() {
        const item = { ...this.state };
        
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
                <Content style={[Layout.contentPad]}>
                    <View style={styles.formContainer}>
                        <DetailComponent item={item} />
                    </View>
                </Content>
            </Container>
        )
    }
}

export default MessageDetail;
