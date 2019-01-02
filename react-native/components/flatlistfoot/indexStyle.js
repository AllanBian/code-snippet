import { Platform, Dimensions } from 'react-native';
import variables from "../../screens/theme/variables/yiyou";
const { width, height } = Dimensions.get('window');
const flatHeight = Platform.OS === "ios" ? 0 : -45;

export default {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    text: {
        color: 'rgba(0, 0, 0, .65)',
        fontSize: 14,
        lineHeight: 20,
    }
}