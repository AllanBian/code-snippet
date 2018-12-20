import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Button, Left, Right, Text, Header, Body, Title, Content, Icon, Input, Card, CardItem, Footer, FooterTab, Badge } from "native-base";

import FootComponent from './idx/FootComponent';
import SearchComponent from './idx/SearchComponent';
import GLComponent from './idx/GLComponent'; // 维修管理逐渐
import ZDComponent from './idx/ZDComponent'; // 维修转单组件
import SSComponent from './idx/SSComponent'; // 工分申诉

import Layout from '../../../constants/Layout';

const guanli = require('../../../assets/device/guanli.png');
const guanli_active = require('../../../assets/device/guanli_active.png');
const zhuandan = require('../../../assets/device/zhuandan.png');
const zhuandan_active = require('../../../assets/device/zhuandan_active.png');
const shensu = require('../../../assets/device/shensu.png');
const shensu_active = require('../../../assets/device/shensu_active.png');

class RepairIndex extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        searchText: "",
        footerTabs: [
            { "type": "guanli", normal: guanli, active: guanli_active, text: "维修管理" },
            { "type": "zhuandan", normal: zhuandan, active: zhuandan_active, text: "维修转单" },
            // { "type": "shensu", normal: shensu, active: shensu_active, text: "工分申诉" },
        ],
        currentFooterTab: "guanli",
        glTabs: [
            {
                type: "wait",
                text: "待接单",
            },
            {
                type: "doing",
                text: "未完成",
            },
            {
                type: "check",
                text: "审批中",
            },
            {
                type: "done",
                text: "已结束",
            },
        ],
        currentglTab: "wait",
    }

    componentWillMount = async () => {

    }

    componentDidMount = async () => {

    }

    componentWillUnmount = async () => {

    }

    goBack = async (page) => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    goTo = async (page) => {
        const { navigation } = this.props;
        navigation.push(page);
    }

    switchTab = (currentFooterTab) => {
        this.setState({
            currentFooterTab
        })
    }

    changeGLTab = (currentglTab) => {
        this.setState({
            currentglTab,
        })
    }

    onChangeText = (searchText) => {
        this.setState({
            searchText
        }, () => {
            // this.refs.zdComponent.reset();
        })
    }

    render() {
        const { searchText, footerTabs, currentFooterTab, glTabs, currentglTab } = this.state;
        const currentFooterObj = footerTabs.filter((item, index) => {
            return item.type === currentFooterTab;
        })
        // 标题
        const title = currentFooterObj[0]["text"];
        // alert(styles.flatBox.height);

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
                            {title}
                        </Title>
                    </Body>
                    <Right>
                        {
                            currentFooterTab === "guanli" ?
                            (
                                <Button transparent onPress={() => this.goTo("RepairCreate")}>
                                    <Icon ios="ios-add" android="md-add" style={Layout.LeftButtonIcon} />
                                </Button>
                            )
                            :
                            null
                        }
                        
                    </Right>
                </Header>
                <View style={{ backgroundColor: 'white'}}>
                    <SearchComponent {...this.props} onChangeText={this.onChangeText} />
                </View>
                <View style={[currentFooterTab !== "guanli" && Layout.hideView]}>
                    <GLComponent ref="glComponent" {...this.props} glTabs={glTabs} currentglTab={currentglTab} searchText={searchText} changeGLTab={this.changeGLTab} />
                </View>
                <View style={[currentFooterTab !== "zhuandan" && Layout.hideView]}>
                    <ZDComponent ref="zdComponent" {...this.props} searchText={searchText} />
                </View>
                {/* <View style={[currentFooterTab !== "shensu" && Layout.hideView]}>
                    <SSComponent ref="ssComponent" {...this.props} />
                </View> */}
                {/* <Text>
                    设备页面
                </Text>
                <Button onPress={() => { this.goTo('DeviceDetail') }}>
                    <Text>设备详情</Text>
                </Button> */}
                
                <FootComponent {...this.props} footerTabs={footerTabs} currentFooterTab={currentFooterTab} onPress={this.switchTab} />
                
            </Container>
        )
    }
}

export default RepairIndex;