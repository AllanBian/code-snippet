import { Post } from '../request';

// 报警消息接口
const getMsgList = (data) => {
    return Post(data, 'getWarningDetailList');
}

// 警报消息详情
const getMsgDetail = (data) => {
    return Post(data, 'getWarningDetailJSON');
}

export default {
    getMsgList,
    getMsgDetail,
}