import { Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
    // 头部左侧icon样式
    LeftButtonIcon: {
        fontSize: 26,
        color: "#ffffff",
    },
    // 头部左侧text样式
    LeftButtonText: {
        fontSize: 26,
        color: "#333",
    },
    // 全局隐藏View
    hideView: {
        display: "none",
    },
    // header背景
    headerColor: {
        backgroundColor: "#0BC3BB",
        borderBottomWidth: 0,
    },
    // headerTitle颜色
    headerTitleColor: {
        color: "white",
    },
    // 内容部分间距
    contentPad: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    // 内容部分背景颜色
    containerBg: {
        backgroundColor: "#eff3f6",
    },
    // 按钮背景色
    btnBgColor: {
        backgroundColor: '#1bc7cc',
    },
    // 按钮上边距
    btnTopMargin: {
        marginTop: 20,
    },
    // 按钮字体颜色
    btnText: {
        fontSize: Platform.OS === 'ios' ? 20 : 16,
        fontWeight: 'bold',
    },
    // radio图标颜色与大小
    radioColor: {
        color: "#1bc7cc",
        fontSize: 24,
    },
    // 添加照片容器
    photoContainer: {
        flex: 1,
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        flexWrap: 'wrap',
    },
    photoItem: {
        marginBottom: 10,
        borderRadius: 5,
        overflow: "hidden",
    },
    addPhoto: {
        backgroundColor: 'rgba(0, 0, 0, 0.02)',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: 'rgba(0, 0, 0, 0.15)',
    },
    addPhotoIcon: {
        fontSize: 30,
        color: "#999",
    },
    addPhotoText: {
        color: "#999",
    },
    // 打星评分功能
    starBox: {
        paddingRight: 20,
        flexDirection: "row",
    },
    starIcon: {
        color: "#999",
        fontSize: 24,
        marginLeft: 2,
    },
    starIconActive: {
        color: "orange",
        fontSize: 24,
        marginLeft: 2,
    },
    // 扫描二维码控件样式
    scannedArea: {
        position: 'absolute',
        width: width*0.6,
        height: width*0.6,
        left: '50%',
        top: '50%',
        transform: [
            { translateX: -width*0.3 },
            { translateY: -width*0.3 },
        ]
    },
    scanArea: {
        width: width*0.6,
        height: width*0.6,
    },
    scanText: {
        height: 50,
        lineHeight: 50,
        textAlign: "center",
        fontSize: 18,
        color: "#ffffff",
    },
}