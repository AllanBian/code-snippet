import React, { Component } from 'react';
import { Container, Spinner } from "native-base";
import { connect } from 'react-redux';

// 引入当前页面样式
import styles from './style';

class Auth extends Component {
    constructor(props) {
        super(props);
    }

    state = {

    }

    componentWillMount = () => {

    }

    componentDidMount = () => {
        const { navigation } = this.props;
        const { navigate } = this.props.navigation;

        setTimeout(() => {
            // navigate('RepairLogAdd');
            // navigate('RepairDetail');
            navigate('Login');
        },1000)
    }

    componentWillUnmount = () => {

    }

    render() {

        return (
            <Container style={styles.container}>
                <Spinner color="gray" />
            </Container>
        )
    }
}

export default Auth;