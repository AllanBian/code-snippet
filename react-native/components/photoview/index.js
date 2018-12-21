import React, { PureComponent, Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Header, Left, Right, Button, Body, Title, Content, Icon, DeckSwiper, Card, CardItem, Thumbnail, Text } from 'native-base';

import Layout from '../../constants/Layout';
import styles from './indexStyle';

class PhotoView extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        photos: [
            {
                text: "明日花",
                image: "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=a17eace870cf3bc7fc0dc5beb069d1c4/10dfa9ec8a136327a4a792d6918fa0ec09fac789.jpg",
            },
            {
                text: "三上悠亚",
                image: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4007679709,3078549705&fm=26&gp=0.jpg",
            }
        ]
    }

    componentWillMount = () => {

    }

    componentDidMount = () => {

    }

    componentWillUnMount = () => {

    }

    goBack = (page) => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    photoItem = ({image}) => {
        return (
            <Card>
                <CardItem cardBody>
                    <Image style={styles.imageHeight} source={{ uri: image }} />
                </CardItem>
            </Card>
        )
    }

    renderEmpty = () => {
        return (
            <View style={styles.emptyComponent}>
                <Text style={styles.emptyComponentText}>暂无照片</Text>
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