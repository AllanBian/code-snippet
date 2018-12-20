import React, { PureComponent } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Container, Header, Text, Body, Title, Content, Left, Button, Icon, Right } from "native-base";

import ListComponent from './ListComponent';

// 引入当前页面样式
import styles from './indexStyle';
import Layout from '../../../../constants/Layout';

class RepairFlow extends PureComponent {

    constructor(props) {
        super(props);
    }

    state = {
        lists: [
            {
                title: "开始",
                time: "开始时间: 2018-09-12 09:00"
            },
            {
                title: "接单",
                time: "接单时间: 2018-09-12 09:00"
            },
            {
                title: "到场",
                time: "到场时间: 2018-09-12 09:00"
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

    render() {
        const { lists } = this.state;
        
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
                            工作流程
                        </Title>
                    </Body>
                    <Right></Right>
                </Header>
                <Content>
                    <View style={styles.contentPad}>
                        <View style={styles.container}>
                            {
                                lists.map((item, index) => <ListComponent key={index} {...this.props} item={item} />)
                            }
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}

export default RepairFlow;
