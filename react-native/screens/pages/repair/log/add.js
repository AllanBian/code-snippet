import React, { PureComponent } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Container, Header, Text, Body, Title, Content, Left, Button, Icon, Right } from "native-base";

import AddComponent from './AddComponent';

// 引入当前页面样式
import styles from './addStyle';
import Layout from '../../../../constants/Layout';

class RepairLogAdd extends PureComponent {

    constructor(props){
        super(props);
    }

    state = {
        logs: [
            {
                code: "320102310239120",
                type: "",
                degree: "",
                content: "",
                photos: "",
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

    setLog = (log, index) => {
        const logs = [].concat(this.state.logs);
        logs[index] = log;
        this.setState({
            logs
        })
    }

    submitAll = () => {
        alert(JSON.stringify(this.state.logs));
    }

    render() {
        const { logs } = this.state;

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
                            添加工作日志
                        </Title>
                    </Body>
                    <Right></Right>
                </Header>
                <Content style={[Layout.contentPad]}>
                    <View style={styles.formContainer}>
                        {
                            logs.map((log, index) =>
                                <AddComponent key={index} log={log} index={index} setLog={this.setLog} />
                            )
                        }
                    </View>
                    <Button rounded block style={[Layout.btnBgColor]} onPress={this.submitAll}>
                        <Text style={Layout.btnText}>确认修改</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

export default RepairLogAdd;
