import { Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
    workBenchStyle: {
        width: 80,
        height: 80,
        // backgroundColor: 'red',
        transform: [
            { 'translateY': -30},
        ]
    },
    normalColor: {
        color: "#b5b5b5",
    },
    activeColor: {
        color: "#1bc7cc",
    },
}