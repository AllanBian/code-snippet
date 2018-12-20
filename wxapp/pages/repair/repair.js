// pages/repair/repair.js
const app = getApp()
const util = require('../../utils/util.js')
const api = require('../../utils/api.js')
const promise = require('../../utils/promise.js')
const stopPullDownRefresh = promise.stopPullDownRefresh
const showLoading = promise.showLoading;
const hideLoading = promise.hideLoading;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winheight: 0,
    cssImg: app.globalData.cssImg,
    Status: 6,
    PageIndex: 1,
    PageSize: 10,
    canReachBottom: true,
    rows: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    util.setWinHeight(this)
    util.setTitle('查看维修')

    this._GetWorkSheetByStatus(this.data)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    let opts = {
      PageIndex: 1
    }
    this.setData({
      PageIndex: opts.PageIndex,
      canReachBottom: true
    })
    this._GetWorkSheetByStatus(opts)
    console.log('下拉刷新')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let PageIndex = this.data.PageIndex + 1
    let opts = {
      PageIndex: PageIndex
    }
    if(this.data.canReachBottom) {
      this.setData({
        PageIndex: opts.PageIndex
      })
      this._GetWorkSheetByStatus(opts)
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 关闭工单
   */
  closeOrder: function(e){
    const that = this
    let rows = this.data.rows
    let data = {
      worksheetId: e.target.dataset.sheetId
    }
    rows[e.target.dataset.orderIndex]['IsNeedClose'] = false
    api.CloseWorkSheet({ method: 'POST', data: data})
      .then((res) => {
        if(res.data.IsSuccess) {
          console.log('关闭工单成功')
          that.setData({
            rows: rows
          })
        }
      })
      .catch((res) => {
        console.log('修改状态失败')
      })
  },
  _GetWorkSheetByStatus: function(opts) {
    const that = this
    let data = {}
    data.Status = this.data.Status;
    data.PageIndex = opts.PageIndex;
    data.PageSize = this.data.PageSize;
    console.log(this.data.PageIndex)
    api.GetWorkSheetByStatus({ method: 'GET', data: data}).then((res) => {
      let rows
      if(res.data.Data.rows.length === 0){
        that.setData({
          canReachBottom: false
        })
        showLoading({
          title: '无更多数据...'
        })
      } else {
        showLoading({
          title: '获取数据中...'
        })
      }
      if(data.PageIndex === 1){
        rows = []
        rows = rows.concat(res.data.Data.rows)
        that.setData({
          rows: rows
        })
        stopPullDownRefresh()
      }else {
        rows = this.data.rows
        rows = rows.concat(res.data.Data.rows)
        that.setData({
          rows: rows
        })
      }
      setTimeout(function(){
        hideLoading()
      },500)
    })
    .catch((res) => {
      that.setData({
        canReachBottom: false
      })
      console.log('获取数据失败')
    })
  }
})