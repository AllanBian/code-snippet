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
    cameraArea: {
        height: height - variables.toolbarHeight - variables.footerHeight,
    },
    noPermission: {
        textAlign: "center",
        fontSize: 20,
        color: "#fff",
    },
    area: {
        flex: 1,
        position: 'relative',
    },
    hideCamera: {
        display: "none",
    },
    hideImage: {
        display: "none",
    },
    camera: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#000',
        position: 'relative',
    },
    buttonTopArea: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    cameraButton: {
        fontSize: 30,
        color: "#fff",
        marginRight: 15,
    },
    buttonBottomArea: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        bottom: 80,
    },
    fixedBottom: {
        bottom: 90,
    },
    buttonRowArea: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    radioDownButton: {
        fontSize: 30,
        color: "#fff", 
    },
    radioButton: {
        fontSize: 70,
        color: "#fff",
    },
    repeatButtonArea: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#666',
        justifyContent: "center",
        alignItems: "center",
        // alignSelf: "flex-end",
    },
    repeatButton: {
        fontSize: 20,
        color: "#000",
    },
    checkmarkButtonArea: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center",
        // alignSelf: "flex-start",
    },
    checkmarkButton: {
        fontSize: 40,
        color: "#5bcf61",
    },
    footStyle: {
        backgroundColor: '#000',
        position: "absolute",
        bottom: 0,
        borderTopWidth: 0,
        borderColor: "transparent",
    }
}