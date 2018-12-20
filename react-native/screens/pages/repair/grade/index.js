import React, { PureComponent } from 'react';
import { TouchableOpacity, View, Platform } from 'react-native';
import { Container, Header, Text, Body, Form, Item, Label, Title, Textarea, Content, Left, Button, Icon, Right } from "native-base";
import { Ionicons } from '@expo/vector-icons';
// 引入当前页面样式
import styles from './indexStyle';
import Layout from '../../../../constants/Layout';

class RepairGrade extends PureComponent {

    constructor(props){
        super(props);
    }

    state = {
        max: [1,2,3,4,5],
        current: 0,
        commit: "",
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

    onValueChangeCommit = (commit) => {
        this.setState({
            commit
        })
    }

    pressStar = (current) => {
        this.setState({
            current
        })
    }

    render() {
        const { commit, current, max } = this.state;

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
                            终审通过
                        </Title>
                    </Body>
                    <Right></Right>
                </Header>
                <Content style={[Layout.contentPad]}>
                    <View style={styles.formContainer}>
                        <Form style={styles.formMember}>
                            <Item fixedLabel style={styles.formItem}>
                                <Label style={styles.label}>服务评分</Label>
                                <View style={Layout.starBox}>
                                    {
                                        max.map((star, index) => {
                                            return (
                                                <Ionicons key={index} onPress={this.pressStar.bind(this, star)} style={[Layout.starIcon, star <= current && Layout.starIconActive]} name={Platform.OS === 'ios' ? "ios-star" : "md-start"} />
                                            )
                                        })
                                    }
                                </View>
                            </Item>
                            <Item stackedLabel style={[styles.formItemLast, styles.formItemPadRight]}>
                                <Label style={styles.label}>评价</Label>
                                {/* <Input onChangeText={this.onValueChangeReason} value={reason} style={styles.input} /> */}
                                <Textarea rowSpan={3} bordered value={commit} onChangeText={this.onValueChangeCommit} style={styles.textarea} placeholder="请留下您的评价内容,以便更好的改善我们的工作" />
                            </Item>
                        </Form>
                        <Button rounded block style={[Layout.btnBgColor]} onPress={this.submitAll}>
                            <Text style={Layout.btnText}>完成</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        )
    }
}

export default RepairGrade;
