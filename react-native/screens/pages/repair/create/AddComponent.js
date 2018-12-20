import React, { PureComponent } from 'react';
import { Platform, StyleSheet, TouchableOpacity, View, Dimensions, Image } from 'react-native';
import { Header, Left, Body, Right, Button, Icon, Title, Form, Item, Input, Label, Picker, Text, Textarea } from "native-base";
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

// 引入当前页面样式
import Layout from '../../../../constants/Layout';

const soundImg = require('../../../../assets/common/sound.png');

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
        paddingRight: 15,
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
        paddingRight: 15,
    },
    video: {
        paddingLeft: 2,
        paddingRight: 4,
        paddingVertical: 4,
        borderRadius: 3,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    soundTouch: {
        marginRight: 5,
    },
    sound: {
        width: 18,
        height: 16,
    },
    iconColor: {
        color: "#ffffff",
    },
    iconSize: {
        fontSize: 16,
    },
    tipMsg: {
        color: "#b5b5b5",
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
        deviceName: "大金空调A型号",
        content: "",
        video: "",
        photos: "",
        address: "",
        degree: "",
        wantTime: "",
        finishTime: "",
    }

    componentWillMount = () => {

    }

    componentDidMount = () => {

    }

    componentWillUnmount = () => {

    }

    makeCall = (tel) => {
    }

    onValueChange = (tag, value) => {
        // const index = this.props.index;
        // const log = { ...this.state, type };

        this.setState({
            [tag]: value
        })
        // this.props.setLog(log , index);
    }

    render() {
        const { deviceName, content, video, photos, address, degree, wantTime, finishTime } = this.state;
        const img = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545135678911&di=689766daa425e32bc3b004e10d79e145&imgtype=0&src=http%3A%2F%2Fimg.aso.aizhan.com%2Ficon%2F2a%2F45%2Feb%2F2a45eb55a56313921b0d4edcbaf704f3.jpg";

        return (
            <Form style={styles.formMember}>
                <Item fixedLabel style={styles.formItem}>
                    <Label style={styles.label}>报修设备</Label>
                    <Text style={styles.text}>{deviceName}</Text>
                </Item>
                <Item stackedLabel style={[styles.formItemPadRight]}>
                    <Label style={styles.label}>报修内容</Label>
                    <Textarea rowSpan={3} bordered onChangeText={this.onValueChange.bind(this, "content")} value={content} style={styles.textarea} placeholder="请输入报修内容" />
                </Item>
                <Item fixedLabel style={[styles.formItem, styles.formItemPadRight]}>
                    <Label style={styles.label}>添加语音描述</Label>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.soundTouch}
                    >
                        <Image source={soundImg} style={styles.sound} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={[styles.video, Layout.btnBgColor]}
                    >
                        <MaterialIcons name="keyboard-voice" style={[styles.iconSize, styles.iconColor]} />
                        <Text style={styles.iconColor}>按住我说话</Text>
                    </TouchableOpacity>
                </Item>
                <Item stackedLabel style={[styles.formItemPadRight]}>
                    <Label style={styles.label}>
                        报修照片<Text style={styles.tipMsg}>(长按删除,点击查看大图)</Text>
                    </Label>
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
                            <Text style={Layout.addPhotoText}>上传照片</Text>
                        </TouchableOpacity>
                    </View>
                </Item>
                <Item stackedLabel style={[styles.formItemPadRight]}>
                    <Label style={styles.label}>报修地址</Label>
                    <Textarea rowSpan={3} bordered onChangeText={this.onValueChange.bind(this, "address")} value={address} style={styles.textarea} placeholder="请输入报修地址" />
                </Item>

                
                <Item fixedLabel style={styles.formItemPadRight}>
                    <Label style={styles.label}>紧急程度</Label>
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
                                        选择紧急程度
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
                        onValueChange={this.onValueChange.bind(this, "degree")}
                    >
                        <Picker.Item label="普通" value="" />
                        <Picker.Item label="紧急" value="a" />
                    </Picker>
                </Item>

                <Item fixedLabel style={styles.formItemPadRight}>
                    <Label style={styles.label}>期望到场时间</Label>
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
                                        选择期望到场时间
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
                        selectedValue={wantTime}
                        onValueChange={this.onValueChange.bind(this, "wantTime")}
                    >
                        <Picker.Item label="" value="" />
                        <Picker.Item label="待定" value="a" />
                    </Picker>
                </Item>

                <Item fixedLabel style={[styles.formItemLast, styles.formItemPadRight]}>
                    <Label style={styles.label}>要求完成时间</Label>
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
                                        选择要求完成时间
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
                        selectedValue={finishTime}
                        onValueChange={this.onValueChange.bind(this, "finishTime")}
                    >
                        <Picker.Item label="" value="" />
                        <Picker.Item label="待定" value="a" />
                    </Picker>
                </Item>

                
            </Form>
        )
    }
}

export default AddComponent;
