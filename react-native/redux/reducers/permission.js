// 此处是redux分离出来的对应实现
import { SET_USER_PERMISSION } from '../actionTypes/permission';

const initialState = {
    _permissions: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        // 保存权限
        case SET_USER_PERMISSION: {
            const { _permissions } = action.data;
            console.log('权限保存成功')
            return {
                _permissions: [..._permissions]
            }
        }
        default: {
            return state;
        }
    }
}