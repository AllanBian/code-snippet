import React, { PureComponent } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { Container, Header, Text, Body, Title, Content, Left, Button, Icon, Right } from "native-base";

import AddComponent from './AddComponent';

// 引入当前页面样式
import styles from './indexStyle';
import Layout from '../../../../constants/Layout';

const sao = require('../../../../assets/home/sao.png');


class RepairCreate extends PureComponent {

    constructor(props){
        super(props);
    }

    state = {
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
                            报修
                        </Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.goTo("BarCodeScanner")}>
                            <Image source={sao} style={styles.sao} />
                        </Button>
                    </Right>
                </Header>
                <Content style={[Layout.contentPad]}>
                    <View style={styles.formContainer}>
                        <AddComponent />
                    </View>
                    <Button rounded block style={[Layout.btnBgColor]} onPress={this.submitAll}>
                        <Text style={Layout.btnText}>确认报修</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

export default RepairCreate;
