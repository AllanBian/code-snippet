import React, { PureComponent } from 'react';
import { Platform, StyleSheet, TouchableOpacity, View, Dimensions, Image } from 'react-native';
import { Linking } from "expo";
import { Header, Left, Body, Right, Button, Icon, Title, Form, Item, Input, Label, Picker, Text, Textarea } from "native-base";
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';

// 引入当前页面样式
import Layout from '../../../../constants/Layout';

const callImg = require('../../../../assets/common/call.png');
const checkedImg = require('../../../../assets/common/checked.png');
const checkingImg = require('../../../../assets/common/checking.png');

const { width, height } = Dimensions.get('window');

import styles from './addStyle';
// const styles = StyleSheet.create({

// })

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
        max: [1,2,3,4,5],
        current: 4,
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
        const { max, current, code, from, repairUser, tel, time, wantTime, finishTime, repairContent, repairPhotos, repairDegree, repairArea, repairMajor, repairAddress, arrivePhotos } = this.state;


        const img = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545135678911&di=689766daa425e32bc3b004e10d79e145&imgtype=0&src=http%3A%2F%2Fimg.aso.aizhan.com%2Ficon%2F2a%2F45%2Feb%2F2a45eb55a56313921b0d4edcbaf704f3.jpg";

        return (
            <View>

                <Form style={styles.formMember}>
                    <View style={[styles.Item, styles.ItemHide]}>
                        <Text style={styles.label}>单号: 20180716001</Text>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.downUpIconBtn}
                        >
                            <Icon ios="ios-arrow-up" android="md-arrow-up" style={styles.downUpIcon} />
                        </TouchableOpacity>
                    </View>
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
                    <Item stackedLabel style={[styles.formItemPadRight]}>
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
                    <Item fixedLabel style={styles.formItem}>
                        <Label style={styles.label}>紧急程度</Label>
                        <Text style={styles.text}>普通</Text>
                    </Item>
                    <Item fixedLabel style={styles.formItem}>
                        <Label style={styles.label}>故障设备</Label>
                        <Text style={styles.text}>发动机</Text>
                    </Item>
                    <Item fixedLabel style={styles.formItem}>
                        <Label style={styles.label}>报修地址</Label>
                        <Text style={styles.text}>厂区顶楼通风口</Text>
                    </Item>
                    <Item fixedLabel style={styles.formItem}>
                        <Label style={styles.label}>专业</Label>
                        <Text style={styles.text}>土建</Text>
                    </Item>
                    <Item fixedLabel style={styles.formItem}>
                        <Label style={styles.label}>期望到场时间</Label>
                        <Text style={styles.text}>{wantTime}</Text>
                    </Item>
                    <Item fixedLabel style={styles.formItem}>
                        <Label style={styles.label}>要求完成时间</Label>
                        <Text style={styles.text}>{finishTime}</Text>
                    </Item>
                    <Item stackedLabel style={[styles.textareaItem, styles.formItemLast, styles.formItemPadRight]}>
                        <Label style={styles.label}>报修内容</Label>
                        <View style={styles.textareaItemView}>
                            <Text style={styles.textareaItemText}>{repairContent}</Text>
                        </View>
                    </Item>
                </Form>

                <Form style={styles.formMember}>
                    <View style={[styles.Item, styles.ItemHide]}>
                        <Text style={styles.label}>维修信息 <Text style={styles.tipMsg}>(接单人: 李杰)</Text></Text>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.downUpIconBtn}
                        >
                            <Icon ios="ios-arrow-up" android="md-arrow-up" style={styles.downUpIcon} />
                        </TouchableOpacity>
                    </View>
                    <Item fixedLabel style={[styles.formItem, styles.formItemPadRight]}>
                        <Label style={styles.label}>主维修人</Label>
                        <Text style={styles.orangeText}>李杰</Text>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.addPerson}
                            onPress={() => this.goTo("RepairJoinManageList")}
                        >
                            <Icon ios="ios-add-circle-outline" android="md-add-circle-outline" style={styles.addPersonIcon} />
                            <Text style={styles.addPersonText}>添加参与人</Text>
                        </TouchableOpacity>
                    </Item>
                    <Item stackedLabel style={[styles.formItemPadRight]}>
                        <Label style={styles.label}>
                            到场照片<Text style={styles.tipMsg}>(点击查看大图)</Text>
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
                    <Item fixedLabel style={[styles.formItem, styles.formItemPadRight]}>
                        <Label style={styles.label}>参与人</Label>
                        <Text style={styles.grayText}>孙一凡</Text>
                        <Text style={styles.grayText}>张一山</Text>
                        <Text style={styles.grayText}>赵子涵</Text>
                    </Item>
                    <Item fixedLabel style={styles.formItem}>
                        <Label style={styles.label}>总工时</Label>
                        <Text style={styles.text}>200分</Text>
                    </Item>
                    <Item fixedLabel style={styles.formItem}>
                        <Label style={styles.label}>我的工时</Label>
                        <Text style={styles.text}>200分</Text>
                    </Item>
                    <Item fixedLabel style={styles.formItemPadRight}>
                        <Label style={styles.label}>是否维修范围</Label>
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
                                            选择是否维修范围
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
                            <Picker.Item label="是" value="" />
                            <Picker.Item label="不是" value="a" />
                        </Picker>
                    </Item>
                    <Item fixedLabel style={styles.formItem} onPress={() => this.goTo("RepairLog")}>
                        <Label style={styles.label}>工作日志</Label>
                        <Text style={styles.text}>
                            <FontAwesome name="angle-right" style={styles.rightIcon} />
                        </Text>
                    </Item>
                    <Item fixedLabel style={styles.formItemPadRight}>
                        <Label style={styles.label}>故障分类</Label>
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
                                            选择故障分类
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
                            <Picker.Item label="" value="" />
                            <Picker.Item label="人为原因" value="a" />
                            <Picker.Item label="老化" value="a" />
                        </Picker>
                    </Item>
                    <Item stackedLabel style={[styles.formItemPadRight]}>
                        <Label style={styles.label}>故障原因</Label>
                        {/* <Input onChangeText={this.onValueChangeReason} value={reason} style={styles.input} /> */}
                        <Textarea rowSpan={3} bordered onChangeText={this.onValueChange.bind(this, "repairAddress")} value={repairAddress} style={styles.textarea} placeholder="请输入故障原因" />
                    </Item>
                    <Item stackedLabel style={[styles.formItemPadRight]}>
                        <Label style={styles.label}>采取措施</Label>
                        {/* <Input onChangeText={this.onValueChangeReason} value={reason} style={styles.input} /> */}
                        <Textarea rowSpan={3} bordered onChangeText={this.onValueChange.bind(this, "repairAddress")} value={repairAddress} style={styles.textarea} placeholder="请输入采取措施" />
                    </Item>
                    <Item stackedLabel style={[styles.formItemPadRight]}>
                        <Label style={styles.label}>
                            完成照片<Text style={styles.tipMsg}>(点击查看大图)</Text>
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
                        <Label style={styles.label}>未完成理由</Label>
                        {/* <Input onChangeText={this.onValueChangeReason} value={reason} style={styles.input} /> */}
                        <Textarea rowSpan={3} bordered onChangeText={this.onValueChange.bind(this, "repairAddress")} value={repairAddress} style={styles.textarea} placeholder="请输入未完成理由" />
                    </Item>
                    <Item fixedLabel style={[styles.formItem, styles.formItemPadRight]}>
                        <Label style={styles.label}>备品备件</Label>
                        <Input onChangeText={this.onValueChange.bind(this, "repairAddress")} value={repairAddress} style={styles.input} />
                    </Item>
                    <Item fixedLabel style={styles.formItem}>
                        <Label style={styles.label}>服务评分</Label>
                        <View style={Layout.starBox}>
                            {
                                max.map((star, index) => {
                                    return (
                                        <Ionicons key={index} style={[Layout.starIcon, star <= current && Layout.starIconActive]} name={Platform.OS === 'ios' ? "ios-star" : "md-start"} />
                                    )
                                })
                            }
                        </View>
                    </Item>
                    <Item stackedLabel style={[styles.textareaItem, styles.formItemLast, styles.formItemPadRight]}>
                        <Label style={styles.label}>服务评语</Label>
                        <View style={styles.textareaItemView}>
                            <Text style={styles.textareaItemText}>本次维修任务完成的不错，继续加油</Text>
                        </View>
                    </Item>
                </Form>

                <Form style={styles.formMember}>
                    <View style={[styles.Item, styles.ItemHide]}>
                        <Text style={styles.label}>审核人 <Text style={styles.tipMsg}>(接单人: 李杰)</Text></Text>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.downUpIconBtn}
                        >
                            <Icon ios="ios-arrow-up" android="md-arrow-up" style={styles.downUpIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.checkArea}>
                        <View style={styles.checkItem}>
                            <View style={styles.checkLabelArea}>
                                <Image style={styles.checkAvatar} source={{uri: img}} />
                                <Text style={styles.checkName}>张三</Text>
                            </View>
                            <View style={styles.checkTextArea}>
                                <Text style={styles.checkDone}>审核通过</Text>
                                <Image style={styles.checkIcon} source={checkedImg} />
                            </View>
                        </View>
                        <View style={styles.checkItem}>
                            <View style={styles.checkLabelArea}>
                                <Image style={styles.checkAvatar} source={{uri: img}} />
                                <Text style={styles.checkName}>李四</Text>
                            </View>
                            <View style={styles.checkTextArea}>
                                <Text style={styles.checkNow}>审核中</Text>
                                <Image style={styles.checkIcon} source={checkingImg} />
                            </View>
                        </View>
                    </View>
                </Form>

            </View>
        )
    }
}

export default AddComponent;
