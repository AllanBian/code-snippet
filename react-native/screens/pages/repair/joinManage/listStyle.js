import { Platform, Dimensions } from 'react-native';

import variables from "../../../theme/variables/yiyou";
const { width, height } = Dimensions.get('window');

const flatHeight = Platform.OS === "ios" ? 50 : 20;

export default {
    listTitle: {
        color: "#203c7d",
        height: 50,
        lineHeight: 50,
        fontWeight: "bold",
        fontSize: 18,
    },
    flatBox: {
        // paddingHorizontal: 20,
        height: height - variables.toolbarHeight - flatHeight - 115,
    },
}