import React, { PureComponent } from 'react';
import {
    View,
    Modal,
    Platform,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Constants, Audio, FileSystem, Permissions } from 'expo';
import { Entypo, Feather } from '@expo/vector-icons';
import {
    Container, Header, Text, Body, Title, Content, Left, Button, Icon, Right, Toast, Footer
} from "native-base";

import Layout from '../../constants/Layout';
import styles from './indexStyle';

class AudioComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.sound = null;
        this.recording = null;
        this.recordingSettings = Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY;
    }

    state = {
        modalVisible: false,
        animationType: 'slide',
        transparent: false,
        tag: "",
        micText: "点击开始录音",
        info: {},

        haveRecordingPermissions: false,
        isLoading: false,
        isPlaybackAllowed: false,
        muted: false,
        soundPosition: null,
        soundDuration: null,
        recordingDuration: null,
        shouldPlay: false,
        isPlaying: false,
        isRecording: false,
        fontLoaded: false,
        shouldCorrectPitch: true,
        volume: 1.0,
        rate: 1.0,
    }

    componentWillMount = () => {

    }

    componentDidMount = () => {
        this._askForPermissions();
    }

    componentWillUnmount = () => {

    }

    _askForPermissions = async () => {
        const response = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
        this.setState({
            haveRecordingPermissions: response.status === 'granted',
        });
    };

    toggleModal = (_tag) => {
        const { modalVisible } = this.state;
        let tag = _tag ? _tag : "";
        if (modalVisible === false) {
            this.setState({
                modalVisible: !modalVisible,
                tag,
            })
        } else {
            this.sound = null;
            this.setState({
                modalVisible: !modalVisible,
                micText: "点击开始录音",
                tag,
            })
        }

    }

    _onRecordPressed = () => {
        if (this.state.isRecording) {
            // 重新录音
            this._stopRecordingAndEnablePlayback();
        } else {
            // 开始录音
            this._stopPlaybackAndBeginRecording();
        }
    }

    _stopRecordingAndEnablePlayback = async () => {
        this.setState({
            isLoading: true,
        });
        try {
            await this.recording.stopAndUnloadAsync();
        } catch (error) {
            // Do nothing -- we are already unloaded.
        }
        const info = await FileSystem.getInfoAsync(this.recording.getURI());
        console.log(`FILE INFO: ${JSON.stringify(info)}`);
        await Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            playsInSilentModeIOS: true,
            playsInSilentLockedModeIOS: true,
            shouldDuckAndroid: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
            playThroughEarpieceAndroid: true,
        });
        const { sound, status } = await this.recording.createNewLoadedSoundAsync(
            {
                isLooping: false,
                isMuted: this.state.muted,
                volume: this.state.volume,
                rate: this.state.rate,
                shouldCorrectPitch: this.state.shouldCorrectPitch,
            },
            this._updateScreenForSoundStatus
        );
        this.sound = sound;
        this.setState({
            info,
            isLoading: false,
        });
    }

    _updateScreenForSoundStatus = status => {
        if (status.isLoaded) {
            this.setState({
                soundDuration: status.durationMillis,
                soundPosition: status.positionMillis,
                shouldPlay: status.shouldPlay,
                isPlaying: status.isPlaying,
                rate: status.rate,
                muted: status.isMuted,
                volume: status.volume,
                shouldCorrectPitch: status.shouldCorrectPitch,
                isPlaybackAllowed: true,
            });
        } else {
            this.setState({
                soundDuration: null,
                soundPosition: null,
                isPlaybackAllowed: false,
            });
            if (status.error) {
                console.log(`FATAL PLAYER ERROR: ${status.error}`);
            }
        }
    };

    // 开始录音方法
    _stopPlaybackAndBeginRecording = async () => {
        this.setState({
            isLoading: true,
        });
        if (this.sound !== null) {
            await this.sound.unloadAsync();
            this.sound.setOnPlaybackStatusUpdate(null);
            this.sound = null;
        }
        // 定义音频体验
        await Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            playsInSilentModeIOS: true,
            shouldDuckAndroid: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
            playThroughEarpieceAndroid: true,
        });
        if (this.recording !== null) {
            this.recording.setOnRecordingStatusUpdate(null);
            this.recording = null;
        }

        const recording = new Audio.Recording();

        // 准备记录音频信息
        await recording.prepareToRecordAsync(this.recordingSettings);
        // 音频录制状态回调
        recording.setOnRecordingStatusUpdate(this._updateScreenForRecordingStatus);

        this.recording = recording;
        // 开始记录音频
        await this.recording.startAsync(); // Will call this._updateScreenForRecordingStatus to update the screen.
        this.setState({
            isLoading: false,
        });
    }

    // 音频录制状态回调方法
    _updateScreenForRecordingStatus = status => {
        if (status.canRecord) {
            this.setState({
                isRecording: status.isRecording,
                micText: "录音中",
                recordingDuration: status.durationMillis,
            });
        } else if (status.isDoneRecording) {
            this.setState({
                isRecording: false,
                micText: "重新录制",
                recordingDuration: status.durationMillis,
            });
            if (!this.state.isLoading) {
                this._stopRecordingAndEnablePlayback();
            }
        }
    };

    // 播放音频
    _onPlayPausePressed = () => {
        if (this.sound != null) {
            this.sound.replayAsync();
            // if (this.state.isPlaying) {
            //     this.sound.pauseAsync();
            // } else {
            //     this.sound.playAsync();
            // }
        }
    };

    // 保存录音
    saveAudio = () => {
        const { info, tag } = this.state;
        this.props.saveAudio(tag, info.uri);
        this.toggleModal();
        // this.playAudio("http://cdnringbd.shoujiduoduo.com/ringres/userv1/a48/123/64189123.aac")
    }

    // 播放某个录音
    playAudio = async (uri) => {
        const soundObject = new Audio.Sound();
        try {
            await soundObject.loadAsync({uri},{
                positionMillis: 0
            });
            await soundObject.playAsync();
            // Your sound is playing!
        } catch (error) {
            // An error occurred!
        }
    }


    render() {
        const { modalVisible, animationType, transparent, micText, isRecording } = this.state;

        return (
            <Modal
                visible={modalVisible}
                animationType={animationType}
                transparent={transparent}
                onRequestClose={() => { }}
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
                                点击开始录音
                            </Title>
                        </Body>
                        <Right>
                        </Right>
                    </Header>
                    <View style={styles.audioArea}>
                        <View style={styles.contentPad}>
                            <View style={styles.micRow}>
                                <Button

                                    iconLeft
                                    style={[!isRecording && styles.micButtonReady, isRecording && styles.micButtonRecording]}
                                    onPress={() => { this._onRecordPressed() }}
                                >
                                    <Icon ios="ios-mic" android="md-mic" style={styles.micStyle} />
                                    <Text>{micText}</Text>
                                </Button>
                            </View>
                            {
                                this.sound !== null && (
                                    <View style={styles.micRow}>
                                        <Button
                                            iconLeft
                                            onPress={() => { this._onPlayPausePressed() }}
                                        >
                                            <Icon ios="ios-play" android="md-play" style={styles.micStyle} />
                                            <Text>试听录音</Text>
                                        </Button>
                                    </View>
                                )
                            }
                            {
                                this.sound !== null && (
                                    <View style={styles.micRow}>
                                        <Button
                                            iconLeft
                                            style={styles.micButtonSave}
                                            onPress={() => { this.saveAudio() }}
                                        >
                                            <Icon ios="ios-save" android="md-save" style={styles.micStyle} />
                                            <Text>保存录音</Text>
                                        </Button>
                                    </View>
                                )
                            }
                        </View>
                    </View>

                    <Footer style={Layout.footStyle}>
                    </Footer>
                </Container>
            </Modal>
        )
    }

}

export default AudioComponent;