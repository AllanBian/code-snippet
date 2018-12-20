import { Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
    formContainer: {
        paddingTop: 20,
    },
    buttonArea: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    buttonLeft: {
        flex: 2,
    },
    buttonRight: {
        flex: 1,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: "#1bc7cc",
        backgroundColor: "#ffffff",
    },
    buttonRightText: {
        color: "#1bc7cc",
    },
}