// 此处是redux分离出来的传参
import { SET_USER_PERMISSION } from '../actionTypes/permission';

// 保存用户权限方法
export const setUserPermission = _permissions => ( {
    type: SET_USER_PERMISSION,
    data: {
        _permissions
    }
} );