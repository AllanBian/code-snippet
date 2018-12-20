import React, { PureComponent } from 'react';
import { Platform, StyleSheet, TouchableOpacity, View, Dimensions, Image } from 'react-native';
import { Linking } from "expo";
import { Header, Left, Body, Right, Button, Icon, Title, Form, Item, Input, Label, Picker, Text, Textarea } from "native-base";
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

// 引入当前页面样式
import Layout from '../../../../constants/Layout';

const callImg = require('../../../../assets/common/call.png');

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    codeStyle: {
        color: "#b5b5b5",
        paddingBottom: 15,
    },
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
    call: {
        width: 18,
        height: 18,
        marginRight: 5,
    },
    tipMsg: {
        color: "#b5b5b5",
    },
    input: {
        textAlign: "right",
    },
    textareaItem: {
        minHeight: 30,
    },
    textareaItemView: {
        alignSelf: "flex-start",
        flexDirection: "row",
    },
    textareaItemText: {
        paddingVertical: 10,
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
        code: "FDTIHZL201809120921",
        from: "巡检报修",
        repairUser: "李杰",
        tel: "18152678986",
        time: "2018-09-20 10:20",
        wantTime: "2018-09-20 10:20",
        finishTime: "2018-09-20 10:20",
        repairContent: "6米层国际到达长廊29号桥附近有个漏水点",
        repairPhotos: "",
        repairDegree: "",
        repairArea: "",
        repairMajor: "",
        repairAddress: "",
        arrivePhotos: "",
    }

    componentWillMount = () => {

    }

    componentDidMount = () => {

    }

    componentWillUnmount = () => {

    }

    makeCall = (tel) => {
        Linking.openURL("tel:" + tel);
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
        const { code, from, repairUser, tel, time, wantTime, finishTime, repairContent, repairPhotos, repairDegree, repairArea, repairMajor, repairAddress, arrivePhotos } = this.state;


        const img = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545135678911&di=689766daa425e32bc3b004e10d79e145&imgtype=0&src=http%3A%2F%2Fimg.aso.aizhan.com%2Ficon%2F2a%2F45%2Feb%2F2a45eb55a56313921b0d4edcbaf704f3.jpg";

        return (
            <View>
                <Text style={styles.codeStyle}>
                    {code}
                </Text>

                <Form style={styles.formMember}>
                    <Item fixedLabel style={styles.formItem}>
                        <Label style={styles.label}>报修来源</Label>
                        <Text style={styles.text}>{from}</Text>
                    </Item>
                    <Item fixedLabel style={styles.formItem}>
                        <Label style={styles.label}>报修人</Label>
                        <Text style={styles.text}>{repairUser}</Text>
                    </Item>
                    <Item fixedLabel style={styles.formItem}>
                        <Label style={styles.label}>联系方式</Label>
                        <Image source={callImg} style={styles.call} />
                        <Text style={styles.text} onPress={this.makeCall.bind(this, tel)}>{tel}</Text>
                    </Item>
                    <Item fixedLabel style={styles.formItem}>
                        <Label style={styles.label}>报修时间</Label>
                        <Text style={styles.text}>{time}</Text>
                    </Item>
                    <Item fixedLabel style={styles.formItem}>
                        <Label style={styles.label}>期望到场时间</Label>
                        <Text style={styles.text}>{wantTime}</Text>
                    </Item>
                    <Item fixedLabel style={styles.formItem}>
                        <Label style={styles.label}>要求完成时间</Label>
                        <Text style={styles.text}>{finishTime}</Text>
                    </Item>
                    <Item stackedLabel style={[styles. textareaItem, styles.formItemPadRight]}>
                        <Label style={styles.label}>报修内容</Label>
                        <View style={styles.textareaItemView}>
                            <Text style={styles.textareaItemText}>{repairContent}</Text>
                        </View>
                    </Item>
                    <Item stackedLabel style={[styles.formItemLast, styles.formItemPadRight]}>
                        <Label style={styles.label}>
                            故障照片<Text style={styles.tipMsg}>(点击查看大图)</Text>
                        </Label>
                        <View style={Layout.photoContainer}>
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
                            </View>
                        </View>
                    </Item>
                </Form>

                <Form style={styles.formMember}>
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
                            selectedValue={repairDegree}
                            onValueChange={this.onValueChange.bind(this, "repairDegree")}
                        >
                            <Picker.Item label="普通" value="" />
                            <Picker.Item label="紧急" value="a" />
                        </Picker>
                    </Item>
                    <Item fixedLabel style={[styles.formItem, styles.formItemPadRight]}>
                        <Label style={styles.label}>区域</Label>
                        <Input onChangeText={this.onValueChange.bind(this, "repairArea")} value={repairArea} style={styles.input} />
                    </Item>
                    <Item fixedLabel style={[styles.formItem, styles.formItemPadRight]}>
                        <Label style={styles.label}>专业</Label>
                        <Input onChangeText={this.onValueChange.bind(this, "repairMajor")} value={repairMajor} style={styles.input} />
                    </Item>
                    <Item fixedLabel style={[styles.formItem, styles.formItemLast, styles.formItemPadRight]}>
                        <Label style={styles.label}>地址</Label>
                        <Input onChangeText={this.onValueChange.bind(this, "repairAddress")} value={repairAddress} style={styles.input} />
                    </Item>
                </Form>

                <Form style={styles.formMember}>
                    <Item stackedLabel style={[styles.formItemLast, styles.formItemPadRight]}>
                        <Label style={styles.label}>
                            到场照片<Text style={styles.tipMsg}>(长按删除,点击查看大图)</Text>
                        </Label>
                        <View style={Layout.photoContainer}>
                            {/* <View style={[ styles.photoItemWidth, Layout.photoItem ]}>
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
                </Form>

            </View>
        )
    }
}

export default AddComponent;
