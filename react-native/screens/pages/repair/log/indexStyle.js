import { Platform, Dimensions } from 'react-native';

import variables from "../../../theme/variables/yiyou";
const { width, height } = Dimensions.get('window');

const flatHeight = Platform.OS === "ios" ? 50 : 20;

export default {
    flatBox: {
        paddingHorizontal: 20,
        height: height - variables.toolbarHeight - flatHeight,
    },
    listTitle: {
        color: "#8698c1",
        height: 40,
        lineHeight: 40,
    },
}