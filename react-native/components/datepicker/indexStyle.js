import { Platform, Dimensions } from 'react-native';
import variables from "../../screens/theme/variables/yiyou";
const { width, height } = Dimensions.get('window');
const flatHeight = Platform.OS === "ios" ? 0 : -45;

export default {
    textStyle: {
        lineHeight: 40,
        color: '#b5b5b5',
    },
    contentPad: {
        flex: 1,
        padding: 20,
    },
    dateSelected: {
        borderWidth: 1,
        borderColor: "#0BC3BB",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    }
}