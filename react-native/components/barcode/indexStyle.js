import { Platform, Dimensions } from 'react-native';
import variables from "../../screens/theme/variables/yiyou";
const { width, height } = Dimensions.get('window');
const flatHeight = Platform.OS === "ios" ? 0 : -45;

export default {
    LeftButtonIcon: {
        color: "#ddd",
    },
    headerBg: {
        backgroundColor: "#111",
        borderWidth: 0,
    },
    titleColor: {
        color: "white",
    },
    containerBg: {
        backgroundColor: "#000",
    },
    container: {
        position: "relative",
        height: height - variables.toolbarHeight - flatHeight,
        backgroundColor: "white",
    },
}