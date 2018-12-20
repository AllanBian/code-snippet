import React, { PureComponent } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Container, Header, Text, Body, Title, Content, Left, Button, Icon, Right } from "native-base";

import AddComponent from './AddComponent';

// 引入当前页面样式
import styles from './indexStyle';
import Layout from '../../../../constants/Layout';

class RepairTake extends PureComponent {

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
                            等待到场
                        </Title>
                    </Body>
                    <Right></Right>
                </Header>
                <Content style={[Layout.contentPad]}>
                    <View style={styles.formContainer}>
                        <AddComponent />
                    </View>
                    <View style={styles.buttonArea}>
                        <Button rounded block style={[Layout.btnBgColor, styles.buttonLeft]} onPress={this.submitAll}>
                            <Text style={Layout.btnText}>确认到场</Text>
                        </Button>
                        <Button rounded block style={[Layout.btnBgColor, styles.buttonRight]} onPress={() => this.goTo("RepairHistory")}>
                            <Text style={[Layout.btnText, styles.buttonRightText]}>维修记录</Text>
                        </Button>
                    </View>
                    <View style={styles.buttonArea}>
                        <Button rounded block style={[Layout.btnBgColor, styles.buttonLeft]} onPress={() => this.goTo("RepairFlow")}>
                            <Text style={Layout.btnText}>工作流程</Text>
                        </Button>
                    </View>
                    
                </Content>
            </Container>
        )
    }
}

export default RepairTake;
