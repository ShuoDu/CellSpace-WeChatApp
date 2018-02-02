Page({
  data: {
    listData: [
      { "code": "01", "text": "text1", "type": "type1" },
      { "code": "02", "text": "text2", "type": "type2" },
      { "code": "03", "text": "text3", "type": "type3" },
      { "code": "04", "text": "text4", "type": "type4" },
      { "code": "05", "text": "text5", "type": "type5" },
      { "code": "06", "text": "text6", "type": "type6" },
      { "code": "07", "text": "text7", "type": "type7" }
    ],
    menuData:[
      { "code": "01", "img": "/img/wxb明星店铺-2.png", "text": "店铺" },
      { "code": "02", "img": "/img/wxb搜索推广-2.png", "text": "发现" },
      { "code": "03", "img": "/img/wxb品牌宝-2.png", "text": "活动" },
    ]
  },
  onLoad: function () {
    console.log('onLoad')
  },

  menuAction: function (e) {
    var id = e.currentTarget.id;
    console.log(id);
    switch (id) {
      case '01':
        wx.switchTab({
          
        })
        wx.navigateTo({
          url: '/pages/store/store',
        });
        break;
      case '02':
        wx.navigateTo({
          url: '/pages/goods/goods',
        });
        break;
      case '03':
        wx.navigateTo({
          url: '/pages/me/order/order',
        });
        break;
     
    }
  }


})