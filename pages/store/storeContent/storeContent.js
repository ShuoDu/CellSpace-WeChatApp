// pages/store/storeContent/storeContent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuData: [
      { "code": "01", "img": "/img/wxb明星店铺-2.png", "text": "外卖" },
      { "code": "02", "img": "/img/wxb搜索推广-2.png", "text": "商品" },
      { "code": "03", "img": "/img/wxb品牌宝-2.png", "text": "用格子" },
      { "code": "03", "img": "/img/wxb品牌宝-2.png", "text": "活动" },
    ],
    storeData:[
      { "code": "01", "title": "营业时间", "content": "07:00-23:59  17:09-23:09" },
      { "code": "02", "title": "商家电话", "content": "200-117-2289" },
      { "code": "03", "title": "商家地址", "content": "北京市海淀区海淀东路11号" },
      { "code": "04", "title": "商家环境", "content": "" },
    ],
    kuaidiData: [
      { "code": "01", "title": "达达配送", "content": "准时必达，配送费¥0元起" }
    ],
    activityData: [
      { "code": "01", "title": "满减", "content": "满200减5元" },
      { "code": "01", "title": "首单", "content": "新用户下单立减1.00元(不与其他活动同享)" }
    ],
    payData: [
      { "code": "01", "title": "微信支付", "content": "满200减5元" },
      { "code": "01", "title": "支付宝支付", "content": "新用户下单立减1.00元(不与其他活动同享)" }
    ]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  menuAction: function (e) {
    var id = e.currentTarget.id;
    console.log(id);
    console.log('点过来了');
    switch (id) {
      case '01':
        wx.navigateTo({
          url: '/pages/store/storeGoods/store_goods',
        });
        break;
      case '02':
        wx.navigateTo({
          url: '/pages/goods/goods',
        });
        break;
      case '03':
        wx.navigateTo({
          url: '/pages/store/storeDetail/store_detail',
        });
        break;

    }
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
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})