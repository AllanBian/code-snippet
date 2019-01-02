import React, { PureComponent } from 'react';
import { 
    View,
    Modal,
    Platform,
    TouchableOpacity,
} from 'react-native';
import {
    Container, Header, Text, Body, Title, Content, Left, Button, Icon, Right, Toast,
} from "native-base";

import Layout from '../../constants/Layout';
import styles from './indexStyle';


class MaskComponent extends PureComponent {
    constructor(props){
        super(props)
    }

    state = {
        modalVisible: false,
        animationType: 'fade',
        transparent: true,
    }

    componentWillMount = () => {
      
    }

    componentDidMount = () => {

    }
    
    componentWillUnmount = () => {

    }

    toggleModal = () => {
        const { modalVisible } = this.state;
        this.setState({
            modalVisible: !modalVisible
        })
    }

    clickMask = () => {
        const { maskHide } = this.props;
        if (maskHide === true) {
            this.toggleModal()
        }
    }

    render() {
        const { modalVisible, animationType, transparent } = this.state;
        
        return (
            <Modal
                style={styles.modalBg}
                visible={modalVisible}
                animationType={animationType}
                transparent={transparent}
                onRequestClose={() => {}}
            >
                <TouchableOpacity
                    style={styles.modalArea}
                    onPress={() => { this.clickMask()}}
                    activeOpacity={1}
                >
                    {this.props.children}
                </TouchableOpacity>
            </Modal>
        )
    }
    
}

export default MaskComponent;