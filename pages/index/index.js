//index.js
//获取应用实例
const app = getApp()
const DataList = require('../../data/charactor.js')
Page({
  data: {
    userInfo: {},
    dataList: [],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    dialogShow: false,
    typeList: [{
      name: 'Saber',
      checked: false
    }, {
      name: 'Archer',
      checked: false
    }, {
      name: 'Lancer',
      checked: false
    }, {
      name: 'Rider',
      checked: false
    }, {
      name: 'Caster',
      checked: false
    }, {
      name: 'Assassin',
      checked: false
    }, {
      name: 'Basaker',
      checked: false
    }],
    tagList: ['Saber', 'Archer', 'Rider'],
    checkedList: []
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
      this.getDataList();
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getDataList: function() {
    this.setData({
      dataList: DataList
    })
  },
  showDialog: function() {
    let result = this.data.typeList.map(item => {
      item.checked = this.data.tagList.find(i => i === item.name)
      return item
    })
    console.log(result)
    this.setData({
      dialogShow: true,
      typeList: result
    })
  },
  closeDialog: function(e) {
    let result = this.data.checkedList.slice(0)
    this.setData({
      dialogShow: false,
      tagList: result,
      checkedList: []
    })
  },
  checkboxChange: function(e) {
    this.setData({
      checkedList: e.detail.value
    })
  }
})