const utils = require('./util.js');
const config = require('./config.js');
const promise = require('./promise.js');
const request = promise.request;
const uploadFile = promise.uploadFile;

let api = [
  { name: 'Login',                url: '/api/Authorize/WeChatLogin' },
  { name: 'GetDamageContent',     url: '/api/WeChat/GetDamageContent' },
  { name: 'GetTolietArea',        url: '/api/WeChat/GetTolietArea' },
  { name: 'AttendanceStatus',     url: '/api/WeChat/AttendanceStatus' },
  { name: 'SignIn',               url: '/api/WeChat/SignIn' },
  { name: 'CreateWorkSheet',      url: '/api/WeChat/CreateWorkSheet' },
  { name: 'GetWorkSheetByStatus', url: '/api/WeChat/GetWorkSheetByStatus' },
  { name: 'CloseWorkSheet',       url: '/api/WeChat/CloseWorkSheet' },
  { name: 'GetRepairRecord',      url: '/api/WeChat/GetRepairRecord' },
  { name: 'UpdateRepairRecord',   url: '/api/WeChat/UpdateRepairRecord' },
  { name: 'AuditedWorkSheet',     url: '/api/WeChat/AuditedWorkSheet' },
  { name: 'CreateGuid',           url: '/api/WeChat/CreateGuid' }
]

api.map((item, key) => {
  item.url = config.host + item.url;
})

const addUrl = (opts = {}, name) => {
  let item = api.filter(item => {
    return item.name == name
  })
  let url = item[0].url;
  return Object.assign({}, opts, {url: url })
}
// ================================================================================

// 登录
const Login = (opts) => {
  let options = addUrl(opts, 'Login')
  return request(options)
}

// 获取损坏内容类型
const GetDamageContent = (opts) => {
  let options = addUrl(opts, 'GetDamageContent')
  return request(options)
}

// 获取厕所区域
const GetTolietArea = (opts) => {
  let options = addUrl(opts, 'GetTolietArea')
  return request(options)
}

// 获取考勤打卡状态
const AttendanceStatus = (opts) => {
  let options = addUrl(opts, 'AttendanceStatus')
  return request(options)
}

// 打卡
const SignIn = (opts) => {
  let options = addUrl(opts, 'SignIn')
  return request(options)
}

// 新增报修单
const CreateWorkSheet = (opts) => {
  let options = addUrl(opts, 'CreateWorkSheet')
  return uploadFile(options)
}

// 根据状态获取工单
const GetWorkSheetByStatus = (opts) => {
  let options = addUrl(opts, 'GetWorkSheetByStatus')
  return request(options)
}

// 关闭工单
const CloseWorkSheet = (opts) => {
  let options = addUrl(opts, 'CloseWorkSheet')
  return request(options)
}

// 根据工单id获取维修记录
const GetRepairRecord = (opts) => {
  let options = addUrl(opts, 'GetRepairRecord')
  return request(options)
}

// 编辑维修记录
const UpdateRepairRecord = (opts) => {
  let options = addUrl(opts, 'UpdateRepairRecord')
  return request(options)
}

// 待审核工单
const AuditedWorkSheet = (opts) => {
  let options = addUrl(opts, 'AuditedWorkSheet')
  return request(options)
}

// 获取GUID
const CreateGuid = (opts) => {
  let options = addUrl(opts, 'CreateGuid')
  return request(options)
}

module.exports = {
  Login: Login,
  GetDamageContent: GetDamageContent,
  GetTolietArea: GetTolietArea,
  AttendanceStatus: AttendanceStatus,
  SignIn: SignIn,
  CreateWorkSheet: CreateWorkSheet,
  GetWorkSheetByStatus: GetWorkSheetByStatus,
  CloseWorkSheet: CloseWorkSheet,
  GetRepairRecord: GetRepairRecord,
  UpdateRepairRecord: UpdateRepairRecord,
  AuditedWorkSheet: AuditedWorkSheet,
  CreateGuid: CreateGuid
}