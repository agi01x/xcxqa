---
order: 21
title: 微信小程序怎么自定义点击按钮弹出分享窗口？
---
#### 在dom上添加  open-type='share'
```
  <button class='shareBtn' open-type='share' ><text>分享小程序</text></button>
```

#### 增加分享函数
```
  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  }
```
