import { Post } from '../request';

// 用户账号密码登录接口
const userLogin = (data) => {
    return Post(data, 'userLogin');
}

// 用户AccessToken登录接口
const loginByUniqueid = (data) => {
    return Post(data, 'loginByUniqueid');
}

// 获取权限和应用模块接口
const getAccess = (data) => {
    return Post(data, 'getAccess');
}

export default {
    userLogin,
    loginByUniqueid,
    getAccess,
}
