import React, { PureComponent } from 'react';
import { Container, Content, Picker, Icon, Text, Header, Left, Body, Title, Right, Button, Badge, H3 } from "native-base";
import { ImageBackground, View, Platform, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-navigation";
import { MaterialIcons } from '@expo/vector-icons';

import Layout from '../../../constants/Layout';
// 引入当前页面样式
import styles from './workbenchStyle';

const workTop = require('../../../assets/home/workTop.png');
const baoxiu = require('../../../assets/home/baoxiu.png');
const sao = require('../../../assets/home/sao.png');
const jiedan = require('../../../assets/home/jiedan.png');
const icon1 = require('../../../assets/home/icon1.png');
const icon2 = require('../../../assets/home/icon2.png');
const icon3 = require('../../../assets/home/icon3.png');
const icon4 = require('../../../assets/home/icon4.png');
const icon5 = require('../../../assets/home/icon5.png');
const icon6 = require('../../../assets/home/icon6.png');
const icon7 = require('../../../assets/home/icon7.png');

class WorkbenchComponent extends PureComponent {

    constructor(props) {
        super(props);
    }

    state = {
        currentProject: 'demo'
    }

    componentWillMount = () => {

    }

    componentDidMount = () => {

    }

    componentWillUnmount = () => {

    }

    onValueChange = (currentProject) => {
        this.setState({
            currentProject
        })
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
        const { currentProject } = this.state;

        return (
            <Container>
                <Content>
                    <SafeAreaView forceInset={{ bottom: 'never', top: 'never' }}>
                        <ImageBackground source={workTop} style={styles.workTop} resizeMode='cover'>
                            <View style={styles.pickProject}>
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
                                                    选择企业
                                                </Title>
                                            </Body>
                                            <Right />
                                        </Header>
                                    }
                                    mode="dropdown"
                                    iosIcon={<MaterialIcons name="keyboard-arrow-down" color="white" />}
                                    style={{ width: Platform.OS === "ios" ? 120 : 160 }}
                                    textStyle={{ color: "#ffffff" }}
                                    selectedValue={currentProject}
                                    onValueChange={this.onValueChange.bind(this)}
                                >
                                    <Picker.Item label="demo工作台" value="demo" />
                                    <Picker.Item label="一汽工作台" value="一汽" />
                                    <Picker.Item label="上汽工作台" value="上汽" />
                                </Picker>
                            </View>

                            <View style={styles.actionList}>
                                <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
                                    <Image source={baoxiu} style={styles.actionIcon} resizeMode="contain" />
                                    <Text style={styles.actionText}>报修</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.actionButton} activeOpacity={0.8} onPress={() => this.goTo("BarCodeScanner")}>
                                    <Image source={sao} style={styles.actionIcon} resizeMode="contain" />
                                    <Text style={styles.actionText}>扫一扫</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
                                    <Image source={jiedan} style={styles.actionIcon} resizeMode="contain" />
                                    <Text style={styles.actionText}>待接单</Text>
                                    <Badge warning style={styles.badge}>
                                        <Text style={styles.badgeText}>9</Text>
                                    </Badge>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.boardBox}>
                                <View style={styles.boardItem}>
                                    <Text style={styles.boardText}>4</Text>
                                    <Text style={styles.boardTypeText}>我的关注</Text>
                                </View>
                                <View style={styles.boardItem}>
                                    <Text style={styles.boardText}>10</Text>
                                    <Text style={styles.boardTypeText}>我发起的</Text>
                                </View>
                                <View style={styles.boardItem}>
                                    <Text style={styles.boardText}>4</Text>
                                    <Text style={styles.boardTypeText}>我的工作</Text>
                                </View>
                                <View style={styles.boardItem}>
                                    <Text style={styles.boardText}>4</Text>
                                    <Text style={styles.boardTypeText}>我的审核</Text>
                                </View>
                            </View>
                        </ImageBackground>

                        <View style={styles.appBox}>
                            <H3 style={styles.appBoxTitle}>
                                常用应用
                            </H3>
                            <View style={styles.appList}>
                                <TouchableOpacity style={styles.appItem} activeOpacity={0.8}>
                                    <Image source={icon1} style={styles.appIcon} resizeMode="contain" />
                                    <Text style={styles.appText}>设施设备</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.appItem} activeOpacity={0.8}>
                                    <Image source={icon2} style={styles.appIcon} resizeMode="contain" />
                                    <Text style={styles.appText}>维护保养</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.appItem} activeOpacity={0.8}>
                                    <Image source={icon3} style={styles.appIcon} resizeMode="contain" />
                                    <Text style={styles.appText}>设备资料库</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.appItem} activeOpacity={0.8}>
                                    <Image source={icon4} style={styles.appIcon} resizeMode="contain" />
                                    <Text style={styles.appText}>巡检工单</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.appItem} activeOpacity={0.8} onPress={() => this.goTo("RepairPage")}>
                                    <Image source={icon5} style={styles.appIcon} resizeMode="contain" />
                                    <Text style={styles.appText}>维修管理</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.appItem} activeOpacity={0.8}>
                                    <Image source={icon6} style={styles.appIcon} resizeMode="contain" />
                                    <Text style={styles.appText}>管理看板</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.appItem} activeOpacity={0.8}>
                                    <Image source={icon7} style={styles.appIcon} resizeMode="contain" />
                                    <Text style={styles.appText}>分析评价</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </SafeAreaView>
                </Content>
            </Container>
        )
    }
}

export default WorkbenchComponent;