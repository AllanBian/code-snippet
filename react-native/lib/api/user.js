import { Post } from '../request';

// 用户登录接口
export const userLogin = (data) => {
    return Post(data, 'userLogin');
}