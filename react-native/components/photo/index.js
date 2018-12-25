import React, { PureComponent } from 'react';
import { 
    View,
    Modal,
    Platform,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Constants, Camera, FileSystem, Permissions } from 'expo';
import { Entypo, Feather } from '@expo/vector-icons';
import {
    Container, Header, Text, Body, Title, Content, Left, Button, Icon, Right, Toast, Footer
} from "native-base";

import Layout from '../../constants/Layout';
import styles from './indexStyle';


class PhotoComponent extends PureComponent {
    constructor(props){
        super(props)
    }

    state = {
        type: Camera.Constants.Type.back,
        permissionsGranted: false,
        modalVisible: false,
        animationType: 'slide',
        transparent: false,
        takePhoto: false,
        picUrl: "",
        tag: "",
    }

    componentWillMount = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ permissionsGranted: status === 'granted' });
    }

    componentDidMount = async () => {
        FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'photos').catch(e => {
            console.log(e, 'Directory exists');
        });
    }
    
    componentWillUnmount = async () => {

    }

    toggleModal = (_tag) => {
        const { modalVisible } = this.state;
        let tag = _tag ? _tag : "";
        if ( modalVisible === false) {
            this.setState({
                modalVisible: !modalVisible,
                takePhoto: false,
                type: Camera.Constants.Type.back,
                picUrl: '',
                tag,
            })
        } else {
            this.setState({
                modalVisible: !modalVisible,
                tag,
            })
        }

    }

    toggleCameraType = () => {
        let type;
        if (this.state.type === Camera.Constants.Type.back){
            type = Camera.Constants.Type.front
        } else {
            type = Camera.Constants.Type.back
        }
        this.setState({
            type
        })
    }

    takePicture = () => {
        let quality = Platform.OS === 'ios' ? 0.1 : 1;
        if (this.camera) {
            this.camera.takePictureAsync({ quality: quality, onPictureSaved: this.onPictureSaved });
        }
    };

    onPictureSaved = async photo => {
        const fileName = `${FileSystem.documentDirectory}photos/${Date.now()}`;
        // console.log(fileName);
        await FileSystem.moveAsync({
            from: photo.uri,
            to: `${fileName}.jpg`,
        });
        // console.log(`${fileName}.jpg`)
        this.setState({
            takePhoto: true,
            picUrl: `${fileName}.jpg`,
        });
    }

    savePhoto = () => {
        const { picUrl, tag} = this.state;
        this.props.savePhoto(tag, picUrl);
        this.toggleModal();
    }

    resetPicture = () => {
        this.setState({
            takePhoto: false,
            picUrl: '',
        });
    }

    render() {
        const { permissionsGranted, modalVisible, animationType, transparent, takePhoto, type, picUrl } = this.state;

        return (
            <Modal
                visible={modalVisible}
                animationType={animationType}
                transparent={transparent}
                onRequestClose={() => {}}
            >
                <Container style={styles.containerBg}>
                    <Header style={styles.headerColor}>
                        <Left>

                        </Left>
                        <Body>
                            <Title style={Layout.headerTitleColor}>
                                
                            </Title>
                        </Body>
                        <Right>
                        </Right>
                    </Header>
                    {
                        !permissionsGranted ? 
                        (
                            <View style={styles.cameraArea}>
                                <Text style={styles.noPermission}>
                                    没有拍照权限
                                </Text>
                                <View
                                    style={styles.camera}
                                >
                                    <View style={styles.buttonBottomArea}>
                                        <View style={styles.buttonRowArea}>
                                            <Entypo name="chevron-thin-down" style={styles.radioDownButton} onPress={() => this.toggleModal()} />
                                        </View>
                                        <View style={styles.buttonRowArea}>
                                        </View>
                                        <View style={styles.buttonRowArea}>
    
                                        </View>
                                    </View>

                                </View>
                            </View>
                        )
                        :
                        (
                            <View style={styles.cameraArea}>
                                <View style={[styles.area, takePhoto && styles.hideCamera]}>
                                    <Camera
                                        type={type}
                                        ref={ref => {
                                            this.camera = ref;
                                        }}
                                        style={styles.camera}
                                    >
                                        <View style={styles.buttonTopArea}>
                                            <Entypo name="camera" style={styles.cameraButton} onPress={() => this.toggleCameraType()} />
                                        </View>
                                        <View style={styles.buttonBottomArea}>
                                            <View style={styles.buttonRowArea}>
                                                <Entypo name="chevron-thin-down" style={styles.radioDownButton} onPress={() => this.toggleModal()} />
                                            </View>
                                            <View style={styles.buttonRowArea}>
                                                <Icon ios="ios-radio-button-on" android="md-radio-button-on" style={styles.radioButton} onPress={() => this.takePicture()}/>
                                            </View>
                                            <View style={styles.buttonRowArea}>
        
                                            </View>
                                        </View>
                                    </Camera>
                                </View>
                                <View style={[styles.area, !takePhoto && styles.hideImage]}>
                                    { takePhoto ? <Image style={{ flex: 1 }} source={{uri: picUrl}} /> : null}
                                    <View style={[styles.buttonBottomArea, styles.fixedBottom]}>
                                        <View style={styles.buttonRowArea}>
                                            <TouchableOpacity
                                                style={styles.repeatButtonArea}
                                                onPress={() => this.resetPicture()}
                                                activeOpacity={0.8}
                                            >
                                                <Feather name="repeat" style={styles.repeatButton} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.buttonRowArea}>
                                            
                                        </View>
                                        <View style={styles.buttonRowArea}>
                                            <TouchableOpacity
                                                style={styles.checkmarkButtonArea}
                                                onPress={() => this.savePhoto()}
                                                activeOpacity={0.8}
                                            >
                                                <Icon ios="ios-checkmark" android="md-checkmark" style={styles.checkmarkButton} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    }
                    
                    <Footer style={styles.footStyle}>
                    </Footer>
                </Container>
            </Modal>
        )
    }
    
}

export default PhotoComponent;