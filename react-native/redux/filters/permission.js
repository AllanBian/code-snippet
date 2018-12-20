// 获取权限数据
export const getPermission = store => store.$permissions._permissions;

// 检查权限
export const checkPermission = (store, permission) => {
    const _permissions = getPermission(store);
    const items = _permissions.filter(item => item.authName === permission)
    return !!items.length;
};

// 检查是否有审批权限 ROLE_WORK_ORDER_AUDIT
export const checkWorkOrderAuditPermission = (store) => {
    return checkPermission(store, 'ROLE_WORK_ORDER_AUDIT')
}

// 检查是否有接单权限 ROLE_WORK_ORDER_RECEIVE
export const checkWorkOrderReceivePermission = (store) => {
    return checkPermission(store, 'ROLE_WORK_ORDER_RECEIVE')
}

// 检查是否有指派权限 ROLE_WORK_ORDER_ASSIGN
export const checkWorkOrderAssignPermission = (store) => {
    return checkPermission(store, 'ROLE_WORK_ORDER_ASSIGN')
}