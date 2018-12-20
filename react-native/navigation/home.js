import { createStackNavigator } from "react-navigation";

// 大厅页面
import Home from '../screens/pages/home';
import Test from '../screens/pages/test';
// 维修管理列表页面
import RepairIndex from '../screens/pages/repair';
// 扫描二维码页面
import BarCode from '../components/barcode/index';
// 维修转单人员选择
import RepairChangePerson from '../screens/pages/repair/changePerson/index';
// 维修历史记录
import RepairHistory from '../screens/pages/repair/history/index';
// 维修工作流程页面
import RepairFlow from '../screens/pages/repair/flow/index';
// 维修搜索人员页面
import RepairJoinManageList from '../screens/pages/repair/joinManage/list';
// 维修添加参与人页面
import RepairJoinManageAdd from '../screens/pages/repair/joinManage/add';
// 维修工作日志列表页面
import RepairLog from '../screens/pages/repair/log/index';
// 维修添加工作日志页面
import RepairLogAdd from '../screens/pages/repair/log/add';
// 维修终审通过评分页面
import RepairGrade from '../screens/pages/repair/grade/index';
// 维修设备报修页面
import RepairCreate from '../screens/pages/repair/create/index';
// 维修设备详情页面
import RepairDetail from '../screens/pages/repair/detail/index';
// 维修待接单详情页面
import RepairTake from '../screens/pages/repair/take/index';
// 消息通知 消息分类列表
import MessageList from '../screens/pages/message/index';
// 消息通知 详情
import MessageDetail from '../screens/pages/message/detail'; 

const HomeNavigator = createStackNavigator(
    {
        HomePage: { screen: Home },
        BarCodeScanner: { screen: BarCode },
        TestPage: { screen: Test },
        RepairPage: { screen: RepairIndex },
        RepairChangePerson: { screen: RepairChangePerson },
        RepairHistory: { screen: RepairHistory },
        RepairFlow: { screen: RepairFlow },
        RepairJoinManageList: { screen: RepairJoinManageList },
        RepairJoinManageAdd: { screen: RepairJoinManageAdd },
        RepairLog: { screen: RepairLog },
        RepairLogAdd: { screen: RepairLogAdd },
        RepairGrade: { screen: RepairGrade },
        RepairCreate: { screen: RepairCreate },
        RepairDetail: { screen: RepairDetail },
        RepairTake: { screen: RepairTake },
        MessageList: { screen: MessageList },
        MessageDetail: { screen: MessageDetail },
    },
    {
        initialRouteName: 'HomePage',
        headerMode: 'none'
    }
)

export default HomeNavigator;