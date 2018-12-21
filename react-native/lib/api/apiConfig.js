export const apiConfig = {
    // 用户账号密码登录接口
    userLogin: '/api/mobile/manage/user/login.action',
    // 用户AccessToken登录接口
    loginByUniqueid: '/api/mobile/manage/user/loginByUniqueid.action',
    // 获取权限和应用模块接口
    getAccess: '/api/mobile/manage/access/getAccess.action',
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