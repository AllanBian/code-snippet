import React, { PureComponent } from 'react';
import { 
    View,
    Modal,
    Platform,
    TouchableOpacity,
    DatePickerIOS,
    DatePickerAndroid,
    TimePickerAndroid,
} from 'react-native';
import {
    Container, Header, Text, Body, Title, Content, Left, Button, Icon, Right, Toast,
} from "native-base";

import Layout from '../../constants/Layout';
import styles from './indexStyle';


class DatePickerComponent extends PureComponent {
    constructor(props){
        super(props)
    }

    state = {
        modalVisible: false,
        animationType: 'slide',
        transparent: false,
        defaultTitle: '请选择时间',
        date: Platform.OS === 'ios' ? new Date() : '',
        time: '',
        currentTime: '',
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

    onValueChange = () => {
        const { date, time } = this.state;
        const { mode } = this.props;
        let currentTime = "";

        if (Platform.OS === 'ios') {
            const d = new Date(date);
            let year = d.getFullYear();
            let month = (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1;
            let day = (d.getDate() < 10) ? '0' + d.getDate() : d.getDate();
            let hour = (d.getHours() < 10) ? '0' + d.getHours() : d.getHours();
            let minute = (d.getMinutes() < 10) ? '0' + d.getMinutes() : d.getMinutes();
            if (mode === 'date') {
                currentTime = year + '-' + month + '-' + day;
            }

            if (mode === 'time') {
                currentTime = hour + ':' + minute;
            }

            if (mode === 'datetime') {
                currentTime = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
            }
        } else {
            if (mode === 'date') {
                currentTime = date;
            }

            if (mode === 'time') {
                currentTime = time;
            }

            if (mode === 'datetime') {
                currentTime = date + ' ' + time;
            }
        }

        this.setState({
            currentTime
        })
        this.props.onValueChange(currentTime)
        this.toggleModal();
    }

    setDate = (tag, newDate) => {
        const { mode } = this.props;

        this.setState({
            [tag]: newDate
        })
    }

    showDatePicker = async (tag) => {
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({
              date: new Date()
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                let _month = (month + 1) < 10 ? '0' + (month + 1) : month + 1;
                let _day = day < 10 ? '0' + day : day;
                const date = year + '-' + _month + '-' + _day;
                this.setState({
                    [tag]: date
                })
            }
          } catch ({code, message}) {
            // console.warn('Cannot open date picker', message);
          }
    }

    showTimePicker = async (tag) => {
        try {
            const {action, hour, minute} = await TimePickerAndroid.open({
                hour: 0,
                minute: 0,
                is24Hour: true, // Will display '2 PM'
            });
            if (action !== TimePickerAndroid.dismissedAction) {
                let _hour = hour < 10 ? '0' + hour : hour;
                let _minute = minute < 10 ? '0' + minute : minute;
                const time = _hour + ':' + _minute;
                this.setState({
                    [tag]: time
                })
              // Selected hour (0-23), minute (0-59)
            }
        } catch ({code, message}) {
            // console.warn('Cannot open time picker', message);
        }
    }

    render() {
        const { textStyle, defaultText, mode, title } = this.props;
        const { modalVisible, animationType, transparent, defaultTitle, date, time, currentTime } = this.state;

        let defText = currentTime === "" ? defaultText : currentTime;

        return (
            <View>
                <View>
                    <Text
                        onPress={() => this.toggleModal()}
                        style={[styles.textStyle, textStyle && textStyle]}
                    >
                        {defText}
                    </Text>
                </View>
                    <Modal
                        visible={modalVisible}
                        animationType={animationType}
                        transparent={transparent}
                        onRequestClose={() => {}}
                    >
                        <Container style={Layout.containerBg}>
                            <Header style={Layout.headerColor}>
                                <Left>
                                    <Button transparent onPress={() => this.toggleModal()}>
                                        <Icon ios="ios-arrow-back" android="md-arrow-back" style={Layout.LeftButtonIcon} />
                                    </Button>
                                </Left>
                                <Body>
                                    <Title style={Layout.headerTitleColor}>
                                        { title ? title : defaultTitle }
                                    </Title>
                                </Body>
                                <Right>
                                    <Button transparent onPress={() => this.onValueChange()}>
                                        <Text style={Layout.RightButtonText}>确定</Text>
                                    </Button>
                                </Right>
                            </Header>
                            <Content>
                                {
                                    Platform.OS === 'ios' ?
                                    (
                                        <View style={styles.contentPad}>
                                            <DatePickerIOS
                                                date={date}
                                                locale="zh-Hans"
                                                mode={mode}
                                                onDateChange={this.setDate.bind(this, 'date')}
                                            />
                                        </View>
                                    )
                                    :
                                    (
                                        <View style={styles.contentPad}>
                                            {
                                                mode === "date" ?
                                                (
                                                    <View>
                                                        <TouchableOpacity
                                                            onPress={this.showDatePicker.bind(this, 'date')}
                                                            activeOpacity={0.8}
                                                            style={styles.dateSelected}
                                                        >
                                                            <Text>请选择日期: {date}</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                )
                                                :
                                                null
                                            }
                                            {
                                                mode === "time" ?
                                                (
                                                    <View>
                                                        <TouchableOpacity
                                                            onPress={this.showTimePicker.bind(this, 'time')}
                                                            activeOpacity={0.8}
                                                            style={styles.dateSelected}
                                                        >
                                                            <Text>请选择时间: {time}</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                )
                                                :
                                                null
                                            }
                                            {
                                                mode === "datetime" ?
                                                (
                                                    <View>
                                                        <TouchableOpacity
                                                            onPress={this.showDatePicker.bind(this, 'date')}
                                                            activeOpacity={0.8}
                                                            style={styles.dateSelected}
                                                        >
                                                            <Text>请选择日期: {date}</Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity
                                                            onPress={this.showTimePicker.bind(this, 'time')}
                                                            activeOpacity={0.8}
                                                            style={styles.dateSelected}
                                                        >
                                                            <Text>请选择时间: {time}</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                )
                                                :
                                                null
                                            }

                                        </View>
                                    )
                                }
                                
                            </Content>
                        </Container>
                    </Modal>
            </View>
        )
    }
    
}

export default DatePickerComponent;