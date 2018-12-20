import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { Form, Item, Label, Text } from "native-base";

// 引入当前页面样式
import Layout from '../../../constants/Layout';
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
        color: "#aaa",
        fontSize: 17,
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
        paddingTop: 10,
    },
    textareaText: {
        color: "#aaa",
        fontSize: 17,
        paddingRight: 20,
    },
})

class DetailComponent extends PureComponent {

    constructor(props) {
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

    render() {
        const { pointName, facilityName, level, system, department, content, lastSeconds } = this.props.item;

        return (
            <Form style={styles.formMember}>
                <Item fixedLabel style={styles.formItem}>
                    <Label style={styles.label}>点位</Label>
                    <Text style={styles.text}>{pointName}</Text>
                </Item>
                <Item fixedLabel style={styles.formItem}>
                    <Label style={styles.label}>设备</Label>
                    <Text style={styles.text}>{facilityName}</Text>
                </Item>
                <Item fixedLabel style={styles.formItem}>
                    <Label style={styles.label}>报警等级</Label>
                    <Text style={styles.text}>{level}</Text>
                </Item>
                <Item fixedLabel style={styles.formItem}>
                    <Label style={styles.label}>所属系统</Label>
                    <Text style={styles.text}>{system}</Text>
                </Item>
                <Item fixedLabel style={styles.formItem}>
                    <Label style={styles.label}>部门</Label>
                    <Text style={styles.text}>{department}</Text>
                </Item>
                <Item fixedLabel style={styles.formItem}>
                    <Label style={styles.label}>持续时间</Label>
                    <Text style={styles.text}>{lastSeconds}秒</Text>
                </Item>
                <Item stackedLabel style={[styles.formItemLast]}>
                    <Label style={styles.label}>报警详细描述</Label>
                    <View style={styles.textarea}>
                        <Text style={styles.textareaText}>{content}</Text>
                    </View>
                </Item>
                
            </Form>
        )
    }
}

export default DetailComponent;
