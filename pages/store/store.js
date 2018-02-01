Page({
  onLoad: function (opt) {
    console.log(opt.name)  
    console.log('过来了')  
    var that = this//不要漏了这句，很重要
    wx.request({
      url: "http://127.0.0.1:8080/store/list/",
      data: "",
      header: {
        "Content-Type":"application/json"
      },
      success: function (res) {
        console.log("成功啦"),
        console.log(res.data),
        that.setData({
          geziList: res.data,
          //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories
        })
  
      },
      fail: function (err) {
        console.log(err)
      }
    })
  } ,
 
  // meAction: function (e) {
  //   var id = e.currentTarget.id;
  //   console.log(id);
  //   wx.navigateTo({
  //     url: '/pages/store/storeDetail/store_detail',
  //   });
  // }
})