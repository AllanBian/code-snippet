import React, { PureComponent } from 'react';

import { Container, Button, H3, Text, Header, Body, Title, Content, Footer, FooterTab } from "native-base";

import Layout from '../../../constants/Layout';

class ContactsComponent extends PureComponent {

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

    render() {
        const { name } = this.state;

        return (
            <Container style={Layout.containerBg}>
                <Header style={Layout.headerColor}>
                    <Body>
                        <Title style={Layout.headerTitleColor}>
                            通讯录
                        </Title>
                    </Body>
                </Header>
                <Content padder>
                    <Text>
                        通讯录
                    </Text>
                </Content>
            </Container>
        )
    }
}

export default ContactsComponent;