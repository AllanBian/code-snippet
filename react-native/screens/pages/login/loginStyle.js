import { Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
    AppBg: {
        flex: 1,
        justifyContent: 'center',
    },
    logoArea: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        marginHorizontal: '10%',
        marginTop: height/2,
        transform: [
            { 'translateY': -140},
        ]
    },
    logo: {
        width: 80,
        height: 80,
    },
    AppName: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        lineHeight: 50,
    },
    logoIcon: {
        color: 'white',
        width: 30,
        textAlign: 'center',
    },
    inputStyle: {
        color: 'white',
        fontSize: 16,
    },
    rememberItem: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    checkArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingVertical: 10,
    },
    checkIcon: {
        color: '#0bc3bb',
    },
    checkText: {
        color: 'white',
        fontSize: 16,
    },
    loginBtn: {
        flex: 1,
        width: '100%',
        marginTop: 20,
    },
    loginBtnBg: {
        padding: 15,
        alignItems: 'center',
        borderRadius: 4,
    },
    loginBtnText: {
        backgroundColor: 'transparent',
        fontSize: 20,
        color: '#fff',
    },
}