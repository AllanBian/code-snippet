import React, { PureComponent } from 'react';

import { Container, Text, Content, Thumbnail, ListItem, Left, Body, Right, Button, Icon, Card } from "native-base";
import { ImageBackground, View, Platform, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-navigation";

// 引入当前页面样式
import Layout from '../../../constants/Layout';
import styles from './mineStyle';

const mineTop = require('../../../assets/home/mineTop.png');
const touxiang = require('../../../assets/home/touxiang.png');

class MineComponent extends PureComponent {

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

        return (
            <Container>
                <Content>
                    <SafeAreaView forceInset={{ bottom: 'never', top: 'never' }}>
                        <ImageBackground source={mineTop} style={styles.mineTop} resizeMode='cover'>
                            <View style={styles.userBox}>
                                <Thumbnail source={touxiang} />
                                <Text style={styles.nickName}>皮仔呆萌</Text>
                                <Text style={styles.telphone}>139****1231</Text>
                            </View>
                        </ImageBackground>

                        <View style={styles.listBox}>
                            <Card>
                                <ListItem icon onPress={() => {}}>
                                    <Left>
                                        <Button transparent style={{ width: 20}}>
                                            <Icon type="Feather" name="lock" style={styles.listIconColor} />
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Text style={styles.listText}>修改密码</Text>
                                    </Body>
                                    <Right>
                                        <Icon active name="arrow-forward" />
                                    </Right>
                                </ListItem>
                                <ListItem icon noBorder onPress={() => {}}>
                                    <Left>
                                        <Button transparent style={{ width: 20}}>
                                            <Icon type="FontAwesome" name="mobile-phone" style={styles.listIconColor} />
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Text style={styles.listText}>关于APP</Text>
                                    </Body>
                                    <Right>
                                        <Icon active name="arrow-forward" />
                                    </Right>
                                </ListItem>
                            </Card>
                        </View>

                        <View style={styles.quitBox}>
                            <Button rounded block style={Layout.btnBgColor}>
                                <Text style={Layout.btnText}>退出登录</Text>
                            </Button>
                            <Text style={styles.copyRightText}>版本号: v1.0.1</Text>
                        </View>
                    </SafeAreaView>
                </Content>
            </Container>
        )
    }
}

export default MineComponent;