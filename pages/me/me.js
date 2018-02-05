Page({
  data: {
    listData: [
      { "code": "01", "text": "订单" },
      { "code": "02", "text": "格子" },
      { "code": "03", "text": "收藏" },
      { "code": "04", "text": "设置" },
      { "code": "05", "text": "关于" }
    ]
  },
  onLoad: function () {
    console.log('onLoad')
  },

  meAction:function(e){
    var id = e.currentTarget.id;
    console.log(id);
    switch (id) {
      case '01':
        wx.navigateTo({
          url: '/pages/me/order/order',
        }); 
        break;
      case '02':
        wx.navigateTo({
          url: '/pages/me/cellManage/ceeManage',
        }) ;
        break;
      case '03':
        wx.navigateTo({
          url: '/pages/me/order/order',
        });  
        break;
      case '04':
        wx.navigateTo({
          url: '/pages/me/order/order',
        });
        break;
      case '05':
        wx.navigateTo({
          url: '/pages/me/about/aboutMe',
        });
        break;
    }
  }

})
