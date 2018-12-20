import { Post } from '../request';

// 报警消息接口
export const getMsgList = (data) => {
    return Post(data, 'getWarningDetailList');
}

// 警报消息详情
export const getMsgDetail = (data) => {
    return Post(data, 'getWarningDetailJSON');
}