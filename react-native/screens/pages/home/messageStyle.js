import { Platform, Dimensions } from 'react-native';

import variables from "../../theme/variables/yiyou";
const { width, height } = Dimensions.get('window');

const flatHeight = Platform.OS === "ios" ? 50 : 20;

export default {
    searchBox: {
        borderColor: '#1bc7cc',
        borderWidth: 1,
        marginHorizontal: 20,
        marginVertical: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 50,
    },
    searchIcon: {
        fontSize: 18,
        color: "#203c7d",
    },
    searchFilter: {
        fontSize: 18,
        color: "#203c7d",
    },
    inputItem: {
        flex: 1,
        fontSize: 18,
    },

    searchArea: {
        backgroundColor: "white",
    },

    flatBox: {
        // paddingHorizontal: 20,
        paddingTop: 10,
        height: height - variables.toolbarHeight - flatHeight - 185,
    },
}