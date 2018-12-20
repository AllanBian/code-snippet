import { Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
    Item: {
        marginTop: 15,
        marginBottom: 15,
        paddingLeft: 10,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        borderLeftWidth: 4,
        borderLeftColor: "#0BC3BB",
    },
    ItemHide: {
        marginBottom: 0,
    },
    downUpIconBtn: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingRight: 15,
    },
    downUpIcon: {
        fontSize: 14,
    },
    rightIcon: {
        fontSize: 26,
    },
    formMember: {
        backgroundColor: "#fff",
        marginBottom: 20,
        borderRadius: 5,
    },
    formItem: {
        height: 50,
    },
    formItemPadRight: {
        paddingRight: 15,
    },
    formItemLast: {
        borderBottomWidth: 0
    },
    label: {
        color: "#203c7d",
        fontSize: 17,
    },
    text: {
        color: "#203c7d",
        paddingRight: 15,
    },
    addPerson: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginLeft: 10,
    },
    addPersonIcon: {
        fontSize: 20,
        color: "#0BC3BB",
    },
    addPersonText: {
        fontSize: 17,
        color: "#0BC3BB",
    },
    orangeText: {
        backgroundColor: "orange",
        color: "#ffffff",
        fontSize: 17,
        paddingHorizontal: 4,
        paddingVertical: 2,
        borderRadius: 5,
        marginLeft: 5,
        overflow: "hidden",
    },
    grayText: {
        backgroundColor: "#d2d2d2",
        color: "#ffffff",
        fontSize: 17,
        paddingHorizontal: 4,
        paddingVertical: 2,
        borderRadius: 5,
        marginLeft: 5,
        overflow: "hidden",
    },
    call: {
        width: 18,
        height: 18,
        marginRight: 5,
    },
    tipMsg: {
        color: "#b5b5b5",
    },
    input: {
        textAlign: "right",
    },
    textareaItem: {
        minHeight: 30,
    },
    textareaItemView: {
        alignSelf: "flex-start",
        flexDirection: "row",
    },
    textareaItemText: {
        paddingVertical: 10,
    },
    textarea: {
        borderWidth: 0,
        borderColor: "white",
        paddingLeft: 0,
        paddingRight: 0,
        width: "100%",
    },
    photoItemWidth: {
        width: (width - 120) / 4,
        height: (width - 120) / 4,
        resizeMode: "cover",
        marginRight: 10,
    },
    checkArea: {
        padding: 15,
        paddingBottom: 0,
    },
    checkItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 15,
    },
    checkLabelArea: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    checkTextArea: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    checkAvatar: {
        width: 40,
        height: 40,
        marginRight: 10,
        borderRadius: 20,
        overflow: "hidden",
    },
    checkIcon: {
        width: 20,
        height: 20,
        marginLeft: 10,
    },
    checkName: {
        color: "#203c7d",
        fontSize: 15,
    },
    checkNow: {
        color: "orange",
        fontSize: 15,
    },
    checkDone: {
        color: "#1bc7cc",
        fontSize: 15,
    }
}