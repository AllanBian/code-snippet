import { Platfrom, Dimensions } from "react-native";
import variables from "../../screens/theme/variables/yiyou";
const { width, height } = Dimensions.get('window');

export default {
    contentPad: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    emptyComponent: {
        height: 300,
        flex: 1,
        justifyContent: "center",
    },
    emptyComponentText: {
        fontSize: 20,
        textAlign: "center",
    },
    imageHeight: {
        height: 300,
        flex: 1,
    },
    photoContainer: {
        height: 300,
    },
    buttonContainer: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    iconSize: {
        fontSize: 14,
    },
}