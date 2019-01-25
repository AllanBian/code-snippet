import { Platform, Dimensions } from 'react-native';
import variables from "../../screens/theme/variables/yiyou";
const { width, height } = Dimensions.get('window');
const flatHeight = Platform.OS === "ios" ? 0 : -45;

export default {
    modalBg: {
        width: width,
        height: height,
        flex: 1,
    },
    modalArea: {
        flex: 1,
        position: "relative",
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
    },
    modalWhiteArea: {
        flex: 1,
        position: "relative",
        backgroundColor: "white",
    }
}