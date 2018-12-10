//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    defaultIndex:0,
  
    arrtext:[
        {"title":"首页","id":0,"url":"../my/my"},
        {"title":"简介","id":1,"url":""},
        {"title":"店家","id":2,"url":""},
        {"title":"客照","id":3,"url":""},
    ],
    content: {
      "title": "全球100大旅拍目的地"
    },
    stand:[
      {src:"../images/jd.jpg",text:"青岛站",url:"../qingdao/qingdao"},
      { src: "../images/jd.jpg", text: "三亚站" },
      { src: "../images/jd.jpg", text: "丽江站",url:"../lijiang/lijiang" },
      { src: "../images/jd.jpg", text: "大理站" },
      { src: "../images/jd.jpg", text: "日本站" },
      { src: "../images/jd.jpg", text: "巴厘岛" },
      { src: "../images/jd.jpg", text: "苏梅岛" },
    
    ]
  },
  clickMe:function(){
    console.log('点击事件');
    this.data.num = 1
    this.setData({
      num: 2
    })
  },
  onTabItemTap(e){
    let pageIndex = e.currentTarget.dataset['index'];
    console.log(e)
    this.setData({
      defaultIndex:pageIndex
    })
  },


  //事件处理函数
  bindViewTap: function() {
   
  },
  getUserInfo: function(e) {
  
  }
})
