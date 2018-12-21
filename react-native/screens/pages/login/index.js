import React, { Component } from 'react';
import { ImageBackground, View, TouchableOpacity, Platform } from "react-native";
import { Container, Text, Content, Icon, Item, Input, Toast } from "native-base";
import { LinearGradient } from 'expo';
import User from '../../../lib/api/user';
import Auth from '../../../lib/storage/auth';

// 引入当前页面样式
import styles from './loginStyle';

const AppBg = require("../../../assets/login/bg.png");
const logo = require("../../../assets/login/logo.png");

class Login extends Component {

    constructor(props){
        super(props);
    }

    state = {
        remember: false,
        userAccount: '',
        password: '',
    }

    componentWillMount = () => {

    }

    componentDidMount = () => {

    }

    componentWillUnmount = () => {

    }

    rememberMe = () => {
        const { remember } = this.state;
        this.setState({
            remember: !remember
        })
    }

    onChangeText = (tag, value) => {
        this.setState({
            [tag]: value
        })
    } 

    login = () => {
        const { password, userAccount } = this.state;
        if (userAccount === "") {
            Toast.show({
                text: "请输入用户名",
                buttonText: "好的",
            });
            return false;
        }
        if (password === "") {
            Toast.show({
                text: "请输入密码",
                buttonText: "好的",
            });
            return false;
        }
        this.userLogin();
    }

    userLogin = async () => {
        const { navigate } = this.props.navigation;
        const { password, userAccount } = this.state;
        const postData = { password, userAccount };
        
        const res = await User.userLogin(postData);
        const promise = Promise.resolve(res);

        promise
        .then(({data, response}) => {
            // const _data = JSON.parse(response._bodyText);
            // 保存用户信息
            Auth.setAuth(data.data);
            return Promise.resolve("Home");
        })
        .then(routeName => {
            navigate(routeName);
        })
    }

    render() {
        const { remember, userAccount, password } = this.state;
        const iconName = remember ? "check-box" : "check-box-outline-blank";

        return (
            <Container>
                <ImageBackground source={AppBg} style={styles.AppBg}>
                    <Content>
                        <View style={styles.logoArea}>
                            <ImageBackground source={logo} style={styles.logo}>
                            </ImageBackground>
                            <Text style={styles.AppName}>
                                设备管理系统
                                {/* 武汉通用 */}
                            </Text>
                            <Item>
                                <Icon type="Entypo" name="user" style={styles.logoIcon} />
                                <Input
                                    onChangeText={this.onChangeText.bind(this, "userAccount")}
                                    placeholder="请输入用户名"
                                    style={styles.inputStyle}
                                    placeholderTextColor="white"
                                    returnKeyType="next"
                                />
                            </Item>
                            <Item>
                                <Icon ios="ios-lock" android="md-lock" style={styles.logoIcon} />
                                <Input
                                    onChangeText={this.onChangeText.bind(this, "password")}
                                    placeholder="请输入密码"
                                    style={styles.inputStyle}
                                    secureTextEntry={true}
                                    placeholderTextColor="white"
                                    returnKeyType="done"
                                />
                            </Item>
                            <View style={styles.rememberItem}>
                                <TouchableOpacity activeOpacity={0.8} onPress={() => this.rememberMe()} style={styles.checkArea}>
                                    <Icon type="MaterialIcons" name={iconName} style={styles.checkIcon} />
                                    <Text style={styles.checkText}>记住密码</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => this.login()} style={styles.loginBtn}>
                                <LinearGradient
                                    colors={['#07EFE4', '#1EDFEA', '#32D0F0']}
                                    start={Platform.OS === 'ios' ? [0.15, 0.8]: null}
                                    style={styles.loginBtnBg}>
                                    <Text style={styles.loginBtnText}>
                                        登 录
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </Content>
                </ImageBackground>
            </Container>
        )
    }
}

export default Login;