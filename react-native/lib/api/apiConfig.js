export const apiConfig = {
    // 用户登录接口
    userLogin: '/admin/manage/login/userLogin.action',
    // 报警消息接口
    getWarningDetailList: '/web/wuhan/warningDetail/getWarningDetailListJSON.action',
    // 警报消息详情
    getWarningDetailJSON: '/web/wuhan/warningDetail/getWarningDetailJSON.action',
}

export const getSysCodeText = (status) => {
    const prefix = "sys_";
    const sysCodeText = {
        "sys_0": "成功",
        "sys_403": "暂无操作权限"
    };
    return sysCodeText[prefix + status];
};