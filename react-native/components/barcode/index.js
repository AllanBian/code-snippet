import React, { PureComponent, Component } from 'react';
import { TouchableOpacity, View, StyleSheet, Text, Image, Platform } from 'react-native';
import { Container, Header, Body, Title, Content, Left, Button, Icon, Right } from "native-base";
import { BarCodeScanner, Permissions } from 'expo';

// 引入当前页面样式
import Layout from '../../constants/Layout';
import styles from './indexStyle';

const scan = require('../../assets/common/sao.png');

class BarCode extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        hasCameraPermission: null,
    }

    componentWillMount = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermission: status === 'granted'
        });
    }

    componentDidMount = () => {

    }

    componentWillUnmount = () => {

    }

    goBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    handleBarCodeScanned = ({ type, data }) => {
        // alert(`${data}`);
        const { navigation } = this.props;
        // alert(JSON.stringify(navigation));
        navigation.state.params.callback(data);
        navigation.goBack();
    }

    getQRCode = (code) => {
        alert('code:' + code);
    }

    render() {
        const { hasCameraPermission } = this.state;

        if (hasCameraPermission === null) {
            return <Text>需要照相机权限</Text>
        }
        if (hasCameraPermission === false) {
            return <Text>没有照相机权限</Text>
        }
        return (
            <Container style={styles.containerBg}>
                {
                    Platform.OS === "ios" ?
                    (
                        <Header transparent style={styles.headerBg}>
                            <Left>
                                <Button transparent onPress={() => this.goBack()}>
                                    <Icon ios="ios-arrow-back" android="md-arrow-back" style={styles.LeftButtonIcon} />
                                </Button>
                            </Left>
                            <Body>
                                <Title style={styles.titleColor}>
                                    扫一扫
                                </Title>
                            </Body>
                            <Right></Right>
                        </Header>
                    )
                    :
                    (
                        <Header style={styles.headerBg}>
                            <Left>
                                <Button transparent onPress={() => this.goBack()}>
                                    <Icon ios="ios-arrow-back" android="md-arrow-back" style={styles.LeftButtonIcon} />
                                </Button>
                            </Left>
                            <Body>
                                <Title style={styles.titleColor}>
                                    扫一扫
                                </Title>
                            </Body>
                            <Right></Right>
                        </Header>
                    )
                }
                <View style={styles.container}>
                    <BarCodeScanner
                        onBarCodeScanned={this.handleBarCodeScanned}
                        style={StyleSheet.absoluteFill}
                    />
                    <View style={Layout.scannedArea}>
                        <Image source={scan} style={Layout.scanArea} />
                        <Text style={Layout.scanText}>对准二维码扫描</Text>
                    </View>
                </View>
            </Container>
        )
    }
}

export default BarCode;
