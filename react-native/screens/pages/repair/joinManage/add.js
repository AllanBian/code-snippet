import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Linking } from "expo";
import { Container, Header, Text, Body, Title, Content, Left, Right, Button, Icon } from "native-base";

import AddComponent from './AddComponent';

// 引入当前页面样式
import styles from './addStyle';
import Layout from '../../../../constants/Layout';

class RepairJoinManageAdd extends PureComponent {

    constructor(props){
        super(props);
    }

    state = {
        persons: [
            {
                name: "张三",
                tel: "13861737911",
                type: "",
                reason: "测试"
            },
            {
                name: "李四",
                tel: "13861737911",
                type: "",
                reason: "哈哈"
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

    setPerson = (person, index) => {
        const persons = [].concat(this.state.persons);
        persons[index] = person;
        this.setState({
            persons
        })
    }

    submitAll = () => {
        alert(JSON.stringify(this.state.persons));
    }

    render() {
        const { persons } = this.state;

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
                            添加参与人
                        </Title>
                    </Body>
                    <Right></Right>
                </Header>
                <Content style={[Layout.contentPad]}>
                    <View style={styles.formContainer}>
                        {
                            persons.map((person, index) =>
                                <AddComponent key={index} person={person} index={index} setPerson={this.setPerson} />
                            )
                        }

                        <Button rounded block style={[Layout.btnBgColor]} onPress={this.submitAll}>
                            <Text style={Layout.btnText}>确认添加</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        )
    }
}

export default RepairJoinManageAdd;
