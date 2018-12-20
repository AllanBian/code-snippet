import { Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
    workTop: {
        width: width,
        // height: 250,
        paddingHorizontal: 20,
    },
    pickProject: {
        height: 60,
        textAlign: "center",
        marginTop: Platform.OS === 'ios' ? 40 : 20,
        marginLeft: width/2 - (Platform.OS === 'ios' ? 80 : 80),
    },
    actionList: {
        padding: 25,
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        justifyContent: 'space-around',
        borderRadius: 10,
    },
    actionButton: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    actionIcon: {
        width: 30,
        height: 35,
    },
    actionText: {
        color: 'white',
        marginTop: 10,
    },
    badge: {
        position: 'absolute',
        top: 0,
        right: 0,
        transform: [
            { 'translateX': 15},
            { 'translateY': -15},
        ],
        padding: 2,
        height: 16,
        borderRadius: 8,
    },
    badgeText: {
        paddingHorizontal: 1,
        lineHeight: Platform.OS === 'ios' ? 14 : 16,
        fontSize: 12,
    },
    boardBox: {
        marginTop: Platform.OS === 'ios' ? 25 : 15,
        padding: Platform.OS === 'ios' ? 25 : 15,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        borderWidth: Platform.OS === 'ios' ? 0 : 1,
        borderColor: Platform.OS === 'ios' ? 'transparent' : '#ccc',
    },
    boardItem: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    boardText: {
        fontSize: 26,
        textAlign: 'center',
        color: '#16a3bf',
        fontWeight: 'bold',
    },
    boardTypeText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#8b96a3',
        marginTop: Platform.OS === 'ios' ? 25 : 15,
    },
    appBox: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    appBoxTitle: {
        fontSize: 20,
        color: '#999',
    },
    appList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignContent: 'space-around',
        paddingTop: 20,
    },
    appItem: {
        width: (width - 80) / 3,
        height: (width - 80) / 3,
        marginBottom: Platform.OS === 'ios' ? 20 : 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        backgroundColor: 'white',
        borderWidth: Platform.OS === 'ios' ? 0 : 1,
        borderColor: Platform.OS === 'ios' ? 'transparent' : '#ccc',
    },
    appIcon: {
        height: 60,
        marginTop: 10,
    },
    appText: {
        fontSize: Platform.OS === 'ios' ? 16 : 12,
        color: '#073181',
    },
}