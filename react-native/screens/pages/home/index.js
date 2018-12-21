import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import { Container, Button, Text, Footer, FooterTab, Icon } from "native-base";

// 引入当前页面样式
import Layout from '../../../constants/Layout';
import styles from './indexStyle';

const work_active_bg = require('../../../assets/home/work_active.png');
const work_bg = require('../../../assets/home/work.png');

import MessageComponent from './MessageComponent';
import ContactsComponent from './ContactsComponent';
import WorkbenchComponent from './WorkbenchComponent';
import MineComponent from './MineComponent';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        currentComponent: 'Workbench',
    }

    componentWillMount = () => {

    }

    componentDidMount = () => {

    }

    componentWillUnmount = () => {

    }

    onPress = (text) => {
        alert(text);
    }

    changeComponent = (currentComponent) => {
        this.setState({
            currentComponent
        })
    }

    render() {
        const { currentComponent } = this.state;
        const displayComponent = {
            "Message": <MessageComponent {...this.props} />,
            "Contacts": <ContactsComponent {...this.props} />,
            "Workbench": <WorkbenchComponent {...this.props} />,
            "Order": <WorkbenchComponent {...this.props} />,
            "Mine": <MineComponent {...this.props} />,
        };

        return (
            <Container>
                {displayComponent[currentComponent]}
                
                <Footer>
                    <FooterTab>
                        <Button onPress={() => this.changeComponent('Message')}>
                            <Icon
                                type="FontAwesome"
                                name={currentComponent === 'Message' ? 'bell' : 'bell-o'}
                                style={[styles.normalColor, currentComponent === 'Message' && styles.activeColor]}
                            />
                            <Text style={[styles.normalColor, currentComponent === 'Message' && styles.activeColor]} >消息</Text>
                        </Button>
                        <Button onPress={() => this.changeComponent('Contacts')}>
                            <Icon
                                type="FontAwesome"
                                name={currentComponent === 'Contacts' ? 'address-book' : 'address-book-o'}
                                style={[styles.normalColor, currentComponent === 'Contacts' && styles.activeColor]}
                            />
                            <Text style={[styles.normalColor, currentComponent === 'Contacts' && styles.activeColor]} >通讯录</Text>
                        </Button>
                        <TouchableOpacity activeOpacity={1} onPress={() => this.changeComponent('Workbench')}>
                            <ImageBackground style={styles.workBenchStyle} source={currentComponent === 'Workbench' ? work_active_bg: work_bg}></ImageBackground>
                        </TouchableOpacity>
                        <Button onPress={() => this.changeComponent('Order')}>
                            <Icon
                                type="FontAwesome"
                                name={currentComponent === 'Order' ? 'file-text' : 'file-text-o'}
                                style={[styles.normalColor, currentComponent === 'Order' && styles.activeColor]}
                            />
                            <Text style={[styles.normalColor, currentComponent === 'Order' && styles.activeColor]} >日历</Text>
                        </Button>
                        <Button onPress={() => this.changeComponent('Mine')}>
                            <Icon
                                type="FontAwesome"
                                name={currentComponent === 'Mine' ? 'user' : 'user-o'}
                                style={[styles.normalColor, currentComponent === 'Mine' && styles.activeColor]}
                            />
                            <Text style={[styles.normalColor, currentComponent === 'Mine' && styles.activeColor]}>我的</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}

export default Home;