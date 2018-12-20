import { Platform, Dimensions } from 'react-native';

import variables from "../../theme/variables/yiyou";
const { width, height } = Dimensions.get('window');

const flatHeight = Platform.OS === "ios" ? 50 : 20;

export default {
    flatBox: {
        // paddingHorizontal: 20,
        paddingTop: 10,
        height: height - variables.toolbarHeight - flatHeight - 185,
    },
}