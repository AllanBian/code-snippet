import React, { Component } from 'react';
import { View } from 'react-native';
import PDFReader from 'rn-pdf-reader-js-dschlitt';
import indexStyle from "./indexStyle";
import EmptyComponent from "../flatlistempty";
import libraryStyle from "../../screens/pages/library/libraryStyle";
import Layout from "../../constants/Layout";
import { Body, Button, Container, Header, Icon, Left, Right, Title } from "native-base";


class PdfView extends Component {

    state = {
        url: '', // 资料ID
        name: ''
    };

    componentWillMount = () => {
        console.warn(this.props)
        const { navigation } = this.props
        let url = navigation.state.params.url;
        let name = navigation.state.params.name || `查看PDF`;
        this.setState({
            url,
            name
        })
    }

    componentDidMount() {
    };

    goBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    render() {
        const { url, name } = this.state;
        return (
            <Container>
                {/* 头部 */}
                <Header style={Layout.headerColor}>
                    <Left>
                        <Button transparent onPress={this.goBack}>
                            <Icon ios="ios-arrow-back" android="md-arrow-back" style={Layout.LeftButtonIcon} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={Layout.headerTitleColor}>{name}</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                {/* /Header */}

                <View style={indexStyle.container}>
                    {
                        /\.pdf$/.test(url) ?
                            (<PDFReader
                                source={{ uri: url }}
                            />)
                            :
                            <EmptyComponent text={'暂未上传PDF'} />
                    }
                </View>
            </Container>

        )
    }
}

export default PdfView
