// pages/components/collapse/collepse.js
const MAIN_HEIGHT = 48
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showDetail: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toggle: function() {
      let showDetail = !this.data.showDetail
      this.setData({
        showDetail: showDetail
      })
      this.slide()
    },
    slide: function() {
      const _this = this
      const query = wx.createSelectorQuery().in(this)
      query.select('#detail').boundingClientRect(res => {
        let detailHeight = res.height + MAIN_HEIGHT + 'px'
        let mainHeight = MAIN_HEIGHT + 'px'
        let height_start = _this.data.showDetail ? mainHeight : detailHeight
        let height_end = _this.data.showDetail ? detailHeight : mainHeight
        _this.animate('.collapse-main', [{
          height: height_start
        }, {
          height: height_end
        }], 1000)
      }).exec()
    }
  }
})