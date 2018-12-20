import React, { Component } from 'react';
import { AppLoading, Asset, Font } from 'expo';
import { Provider } from 'react-redux';
import store from './redux/store';
import {
    AntDesign,
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome,
    Foundation,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    Octicons,
    SimpleLineIcons,
    Zocial,
} from '@expo/vector-icons';

import Setup from './screens/boot/setup';

// 预加载图片方法
function cacheImages(images) {
    return images.map(image => {
        if (typeof image === 'string') {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });
}

function cacheFonts(fonts) {
    return fonts.map(font => Font.loadAsync(font));
}

export default class App extends Component {

    state = {
        isLoadingComplete: false,
    }

    componentWillMount = () => {

    }

    componentDidMount = () => {

    }

    componentWillUnmount = () => {

    }

    loadResourcesAsync = async () => {
        const imageAssets = cacheImages([
            require('./assets/icon.png'),
            require('./assets/splash.png'),
            require('./assets/login/bg.png'),
            require('./assets/login/logo.png'),
            require('./assets/home/baoxiu.png'),
            require('./assets/home/icon1.png'),
            require('./assets/home/icon2.png'),
            require('./assets/home/icon3.png'),
            require('./assets/home/icon4.png'),
            require('./assets/home/icon5.png'),
            require('./assets/home/icon6.png'),
            require('./assets/home/icon7.png'),
            require('./assets/home/jiedan.png'),
            require('./assets/home/sao.png'),
            require('./assets/home/touxiang.png'),
            require('./assets/home/work.png'),
            require('./assets/home/mineTop.png'),
            require('./assets/home/workTop.png'),
            require('./assets/device/guanli.png'),
            require('./assets/device/guanli_active.png'),
            require('./assets/device/zhuandan.png'),
            require('./assets/device/zhuandan_active.png'),
            require('./assets/device/shensu.png'),
            require('./assets/device/shensu_active.png'),
            require('./assets/common/sao.png'),
            require('./assets/common/sound.png'),
            require('./assets/common/call.png'),
            require('./assets/common/checked.png'),
            require('./assets/common/checking.png'),
        ]);
        const fontAssets = cacheFonts([
            {
                'Roboto': require('native-base/Fonts/Roboto.ttf'),
                'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            },
            AntDesign.font,
            Entypo.font,
            EvilIcons.font,
            Feather.font,
            FontAwesome.font,
            Foundation.font,
            Ionicons.font,
            MaterialCommunityIcons.font,
            MaterialIcons.font,
            Octicons.font,
            SimpleLineIcons.font,
            Zocial.font,
        ]);
        await Promise.all([...imageAssets, ...fontAssets]);
    };

    handleLoadingError = error => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        // console.warn(error);
    };

    handleFinishLoading = () => {
        this.setState({ isLoadingComplete: true });
    };

    render() {
        const { isLoadingComplete } = this.state;

        if (!isLoadingComplete) {
            return (
                <AppLoading
                    startAsync={this.loadResourcesAsync}
                    onError={this.handleLoadingError}
                    onFinish={this.handleFinishLoading}
                />
            )
        } else {
            return (
                <Provider store={store}>
                    <Setup />
                </Provider>
            );
        }

    }
}