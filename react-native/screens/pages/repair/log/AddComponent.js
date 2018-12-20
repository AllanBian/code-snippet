import React, { PureComponent } from 'react';
import { Platform, StyleSheet, TouchableOpacity, View, Dimensions, Image } from 'react-native';
import { Header, Left, Body, Right, Button, Icon, Title, Form, Item, Input, Label, Picker, Text, Textarea } from "native-base";
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

// 引入当前页面样式
import Layout from '../../../../constants/Layout';

const { width, height } = Dimensions.get('window');

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
    photoItemWidth: {
        width: (width - 120) / 4,
        height: (width - 120) / 4,
        resizeMode: "cover",
        marginRight: 10,
    },
})

class AddComponent extends PureComponent {

    constructor(props) {
        super(props);
    }

    state = {
        code: "",
        type: "",
        degree: "",
        content: "",
        photos: "",
    }

    componentWillMount = () => {
        const { code, type, degree, content, photos } = this.props.log;
        this.setState({
            code, type, degree, content, photos
        })
    }

    componentDidMount = () => {

    }

    componentWillUnmount = () => {

    }

    makeCall = (tel) => {
    }

    onValueChangeType = (type) => {
        const index = this.props.index;
        const log = { ...this.state, type };

        this.setState({
            type,
        })
        this.props.setLog(log , index);
    }

    onValueChangeDegree = (degree) => {
        const index = this.props.index;
        const log = { ...this.state, degree };
        
        this.setState({
            degree,
        })
        this.props.setLog(log , index);
    }

    render() {
        const { code, type, degree, content, photos } = this.state;
        const img = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545135678911&di=689766daa425e32bc3b004e10d79e145&imgtype=0&src=http%3A%2F%2Fimg.aso.aizhan.com%2Ficon%2F2a%2F45%2Feb%2F2a45eb55a56313921b0d4edcbaf704f3.jpg";

        return (
            <Form style={styles.formMember}>
                <Item fixedLabel style={styles.formItem}>
                    <Label style={styles.label}>业务数据编号</Label>
                    <Text style={styles.text}>{code}</Text>
                </Item>
                <Item fixedLabel style={styles.formItemPadRight}>
                    <Label style={styles.label}>日志类型</Label>
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
                                        选择日志类型
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
                        <Picker.Item label="工作记录" value="" />
                        <Picker.Item label="重要提醒" value="a" />
                        <Picker.Item label="告知他人" value="b" />
                    </Picker>
                </Item>
                <Item fixedLabel style={styles.formItemPadRight}>
                    <Label style={styles.label}>重要程度</Label>
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
                                        选择重要程度
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
                        selectedValue={degree}
                        onValueChange={this.onValueChangeDegree}
                    >
                        <Picker.Item label="普通" value="" />
                        <Picker.Item label="重要" value="a" />
                    </Picker>
                </Item>
                <Item stackedLabel style={[styles.formItemPadRight]}>
                    <Label style={styles.label}>工作内容</Label>
                    {/* <Input onChangeText={this.onValueChangeReason} value={reason} style={styles.input} /> */}
                    <Textarea rowSpan={3} bordered onChangeText={this.onValueChangeReason} value={content} style={styles.textarea} placeholder="请输入工作内容" />
                </Item>
                <Item stackedLabel style={[styles.formItemLast, styles.formItemPadRight]}>
                    <Label style={styles.label}>日志照片</Label>
                    {/* <Input onChangeText={this.onValueChangeReason} value={reason} style={styles.input} /> */}
                    <View style={Layout.photoContainer}>
                        {/* <View style={[ styles.photoItemWidth, Layout.photoItem ]}>
                            <Image style={styles.photoItemWidth} source={{uri: img}} />
                        </View>
                        <View style={[ styles.photoItemWidth, Layout.photoItem ]}>
                            <Image style={styles.photoItemWidth} source={{uri: img}} />
                        </View>
                        <View style={[ styles.photoItemWidth, Layout.photoItem ]}>
                            <Image style={styles.photoItemWidth} source={{uri: img}} />
                        </View>
                        <View style={[ styles.photoItemWidth, Layout.photoItem ]}>
                            <Image style={styles.photoItemWidth} source={{uri: img}} />
                        </View>
                        <View style={[ styles.photoItemWidth, Layout.photoItem ]}>
                            <Image style={styles.photoItemWidth} source={{uri: img}} />
                        </View> */}
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={[ styles.photoItemWidth, Layout.addPhoto, Layout.photoItem ]}
                        >
                            <Ionicons name={Platform.OS === "ios" ? "ios-add" : "md-add"} style={Layout.addPhotoIcon} />
                            <Text style={Layout.addPhotoText}>添加照片</Text>
                        </TouchableOpacity>
                    </View>
                </Item>
            </Form>
        )
    }
}

export default AddComponent;
