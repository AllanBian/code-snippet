import { Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
    userBox: {
        paddingTop: Platform.OS === 'ios' ? 40 : 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mineTop: {
        height: Platform.OS === 'ios' ? 200 : 150,
    },
    nickName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    telphone: {
        fontSize: 14,
        color: '#fff',
    },
    listBox: {
        padding: 25,
        paddingTop: 10,
    },
    listIconColor: {
        color: '#16a3bf',
    },
    listText: {
        color: '#203c7d',
    },
    quitBox: {
        padding: 25,
        alignItems: 'center',
    },
    copyRightText: {
        paddingTop: 10,
        fontSize: Platform.OS === 'ios' ? 12 : 12,
        color: '#203c7d',
    },
}