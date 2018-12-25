import { Platform, Dimensions } from 'react-native';
import variables from "../../screens/theme/variables/yiyou";
const { width, height } = Dimensions.get('window');
const flatHeight = Platform.OS === "ios" ? 0 : -45;

export default {
    containerBg: {
        backgroundColor: "#000",
    },
    headerColor: {
        backgroundColor: "#000",
        borderBottomWidth: 0,
        borderColor: "transparent",
    },
    audioArea: {
        height: height - variables.toolbarHeight - variables.footerHeight,
    },
    contentPad: {
        flex: 1,
        padding: 20,
    },
    micRow: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 10,
    },
    micButtonReady: {
        backgroundColor: "#4dad4a",
        marginRight: 10,
    },
    micButtonRecording: {
        backgroundColor: "#ce3c3e",
        marginRight: 10,
    },
    micButtonSave: {
        backgroundColor: "#4dad4a",
        marginRight: 10,
    },
    micStyle: {
        color: "#fff",
    },
    footStyle: {
        backgroundColor: '#000',
        position: "absolute",
        bottom: 0,
        borderTopWidth: 0,
        borderColor: "transparent",
    }
}