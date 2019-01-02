import React, { PureComponent, Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Header, Left, Right, Button, Body, Title, Content, Icon, DeckSwiper, Card, CardItem, Thumbnail, Text, Toast } from 'native-base';

import Layout from '../../constants/Layout';
import styles from './indexStyle';

class PhotoView extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        photos: [
            // {
            //     id: 1,
            //     text: "asdfasdf",
            //     src: "asdfsadf",
            // },
            // {
            //     id: 2,
            //     text: "asdf",
            //     src: "asdasd",
            // }
        ]
    }

    componentWillMount = () => {
        const { navigation } = this.props
        let photos = navigation.state.params.photos;
        // Toast.show({
        //     text: JSON.stringify(photos),
        //     duration: 2000,
        // })
        this.setState({
            photos
        })
    }

    componentDidMount = () => {

    }

    componentWillUnMount = () => {

    }

    goBack = (page) => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    photoItem = ({src}) => {
        return (
            <Card>
                <CardItem cardBody>
                    <Image style={styles.imageHeight} source={{ uri: src }} resizeMode="cover" />
                </CardItem>
            </Card>
        )
    }

    renderEmpty = () => {
        return (
            <View style={styles.emptyComponent}>
                <Text style={styles.emptyComponentText}>暂无其他照片</Text>
            </View>
        )
    }

    render() {
        const { photos } = this.state;

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
                            查看照片
                        </Title>
                    </Body>
                    <Right></Right>
                </Header>
                <Content style={[Layout.contentPad, styles.contentPad]}>
                    <View style={styles.photoContainer}>
                        <DeckSwiper
                            ref={(ref) => this._Swiper = ref}
                            dataSource={photos}
                            renderEmpty={() => this.renderEmpty()}
                            renderItem={item => this.photoItem(item)}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button iconLeft rounded block style={[Layout.btnBgColor]} onPress={() => this._Swiper._root.swipeLeft()}>
                            <Icon ios="ios-arrow-back" android="md-arrow-back" style={styles.iconSize}/>
                            <Text style={Layout.btnText}>上一张</Text>
                        </Button>
                        <Button iconRight rounded block style={[Layout.btnBgColor]} onPress={() => this._Swiper._root.swipeRight()}>
                            <Text style={Layout.btnText}>下一张</Text>
                            <Icon ios="ios-arrow-forward" android="md-arrow-forward" style={styles.iconSize}/>
                        </Button>
                    </View>
                </Content>
            </Container>
        )
    }


}

export default PhotoView;