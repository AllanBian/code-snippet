import React, { PureComponent } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Linking } from "expo";
import { Header, Left, Body, Right, Button, Icon, Title, Form, Item, Input, Label, Picker, Text, Textarea } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

// 引入当前页面样式
import Layout from '../../../../constants/Layout';
const styles = StyleSheet.create({
    formMember: {
        backgroundColor: "#fff",
        marginBottom: 20,
        borderRadius: 5,
    },
    formItem: {
        height: 50,
    },
    formItemPadRight: {
        paddingRight: 20,
    },
    formItemLast: {
        borderBottomWidth: 0
    },
    label: {
        color: "#203c7d",
        fontSize: 17,
    },
    text: {
        color: "#203c7d",
        paddingRight: 20,
    },
    input: {
        // textAlign: "right",
    },
    textarea: {
        borderWidth: 0,
        borderColor: "white",
        paddingLeft: 0,
        paddingRight: 0,
        width: "100%",
    },
})

class AddComponent extends PureComponent {

    constructor(props) {
        super(props);
    }

    state = {
        name: "",
        tel: "",
        type: "",
        reason: "",
    }

    componentWillMount = () => {
        const { name, tel, type, reason } = this.props.person;
        this.setState({
            name, tel, type, reason
        })
    }

    componentDidMount = () => {

    }

    componentWillUnmount = () => {

    }

    makeCall = (tel) => {
        Linking.openURL("tel:" + tel);
    }

    onValueChangeType = (type) => {
        const index = this.props.index;
        const person = { ...this.state, type };

        this.setState({
            type,
        })
        this.props.setPerson(person, index);
    }

    onValueChangeReason = (reason) => {
        const index = this.props.index;
        const person = { ...this.state, reason };

        this.setState({
            reason,
        })
        this.props.setPerson(person, index);
    }

    render() {
        const { name, tel, type, reason } = this.state;

        return (
            <Form style={styles.formMember}>
                <Item fixedLabel style={styles.formItem}>
                    <Label style={styles.label}>姓名</Label>
                    <Text style={styles.text}>{name}</Text>
                </Item>
                <Item fixedLabel style={styles.formItem}>
                    <Label style={styles.label}>联系方式</Label>
                    <Text style={styles.text} onPress={this.makeCall.bind(this, tel)}>{tel}</Text>
                </Item>
                <Item fixedLabel style={styles.formItemPadRight}>
                    <Label style={styles.label}>协作类别</Label>
                    <Picker
                        renderHeader={backAction =>
                            <Header style={Layout.headerColor}>
                                <Left>
                                    <Button transparent onPress={backAction}>
                                        <Icon ios="ios-arrow-back" android="md-arrow-back" style={Layout.LeftButtonIcon} />
                                    </Button>
                                </Left>
                                <Body>
                                    <Title style={Layout.headerTitleColor}>
                                        选择协作类别
                                    </Title>
                                </Body>
                                <Right />
                            </Header>
                        }
                        mode="dropdown"
                        iosIcon={<MaterialIcons name="keyboard-arrow-down" color="#000000" />}
                        style={{ width: Platform.OS === "ios" ? "auto" : "auto" }}
                        textStyle={{ color: "#203c7d" }}
                        itemTextStyle={{ textAlign: "right" }}
                        selectedValue={type}
                        onValueChange={this.onValueChangeType}
                    >
                        <Picker.Item label="协助" value="" />
                        <Picker.Item label="其他" value="a" />
                    </Picker>
                </Item>
                <Item stackedLabel style={[styles.formItemLast, styles.formItemPadRight]}>
                    <Label style={styles.label}>申请原因</Label>
                    {/* <Input onChangeText={this.onValueChangeReason} value={reason} style={styles.input} /> */}
                    <Textarea rowSpan={3} bordered onChangeText={this.onValueChangeReason} value={reason} style={styles.textarea} placeholder="请输入申请原因" />
                </Item>
            </Form>
        )
    }
}

export default AddComponent;
