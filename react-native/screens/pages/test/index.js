import React, { Component } from 'react';
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text, Header, Body, Title, Content } from "native-base";

import Layout from '../../../constants/Layout';

class Device extends Component {

    constructor(props) {
        super(props);
    }

    state = {

    }

    componentWillMount = async () => {

    }

    componentDidMount = async () => {
        
    }

    componentWillUnmount = async () => {

    }

    goBack = async (page) => {
        const { navigation } = this.props;
        // alert(JSON.stringify(navigation));
        navigation.state.params.callback('allan:' + (new Date()).getTime());
        navigation.goBack();
    }

    render() {

        return (
            <Container>
                <Header style={Layout.headerColor}>
                    <Body>
                        <Title style={Layout.headerTitleColor}>
                            测试传值
                        </Title>
                    </Body>
                </Header>
                <Content padder>
                    <Text>
                        测试传值页面
                    </Text>
                    <Button onPress={() => this.goBack()}>
                        <Text>返回测试反向传参</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

export default Device;