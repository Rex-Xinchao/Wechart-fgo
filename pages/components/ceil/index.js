// pages/components/ceil/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cid: {
      type: String,
      value: ''
    },
    imageUrl: {
      type: String,
      value: ''
    },
    name: {
      type: String,
      value: ''
    },
    star: {
      type: Number,
      value: ''
    },
    classify: {
      type: String,
      value: ''
    }
  },

  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    pageTo: function() {
      if (!this.data.cid) {
        return
      }
      let url = '/pages/detail/index?id=' + this.data.cid
      wx.redirectTo({
        url: url
      })
    }
  }
})