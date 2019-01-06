webpackHotUpdate(4,{

/***/ 1849:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "h2",
      "欢迎大家在issue提出问题"
    ],
    [
      "p",
      "地址： ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/wsdo/miniprogram-qa.git"
        },
        "https://github.com/wsdo/miniprogram-qa.git"
      ]
    ],
    [
      "blockquote",
      [
        "p",
        "收录后，帮助更多的开发者"
      ]
    ],
    [
      "h2",
      "小程序十万个为什么"
    ],
    [
      "h2",
      "基础篇"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "./guide/微信小程序文档地址在哪？.md"
            },
            "微信小程序文档地址在哪？"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "./guide/微信小程序开发工具怎么下载？.md"
            },
            "微信小程序开发工具怎么下载？"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "微信小程序如何设置底部栏？"
        ]
      ],
      [
        "li",
        [
          "p",
          "微信小程序的背景图要怎么显示？"
        ]
      ],
      [
        "li",
        [
          "p",
          "微信小程序如何设置默认首页?"
        ]
      ],
      [
        "li",
        [
          "p",
          "微信小程序如何新建page？"
        ]
      ],
      [
        "li",
        [
          "p",
          "微信小程序自定义组件怎么使用？"
        ]
      ],
      [
        "li",
        [
          "p",
          "微信小程序图片居中怎么设置？"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "./guide/微信小程序写点击事件,并且在dom携带参数？.md"
            },
            "微信小程序写点击事件,并且在dom携带参数？"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "微信小程序怎么设置dom显示隐藏？"
        ]
      ],
      [
        "li",
        [
          "p",
          "微信小程序怎么让页面滚动和禁用滚动？"
        ]
      ]
    ],
    [
      "h2",
      "微信小程序在js里面怎么获取dom？"
    ],
    [
      "pre",
      {
        "lang": null,
        "highlighted": "wx<span class=\"token punctuation\">.</span><span class=\"token function\">createSelectorQuery</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">selectAll</span><span class=\"token punctuation\">(</span><span class=\"token string\">'.shareImg'</span><span class=\"token punctuation\">)</span>"
      },
      [
        "code",
        "wx.createSelectorQuery().selectAll('.shareImg')"
      ]
    ],
    [
      "h2",
      "微信小程序图片如何最佳处理？"
    ],
    [
      "h3",
      "压缩处理"
    ],
    [
      "blockquote",
      [
        "p",
        "务必使用",
        [
          "a",
          {
            "title": null,
            "href": "https://tinypng.com/"
          },
          "tiny png"
        ],
        " 压缩图片再使用\ntips: vscode 可以使用 tinyPng 插件 key :6RF6gPzvtNL4P4ZB2h13YZsvT6NHCXzb\n1. 一定是2倍图"
      ],
      [
        "h3",
        "如何图片比较大，务必做cdn"
      ]
    ],
    [
      "h3",
      "在页面页面里面的.json 文件增加配置 disableScroll"
    ],
    [
      "pre",
      {
        "lang": null,
        "highlighted": "默认 <span class=\"token boolean\">false</span>，<span class=\"token boolean\">true</span><span class=\"token punctuation\">:</span> 禁用滚动\n```\n    <span class=\"token string\">\"disableScroll\"</span><span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span>\n```"
      },
      [
        "code",
        "默认 false，true: 禁用滚动\n```\n    \"disableScroll\": false\n```"
      ]
    ],
    [
      "h2",
      "组件篇"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "VSCode中添加小程序wxml标签"
        ]
      ],
      [
        "li",
        [
          "p",
          "引用自定义组件时，如何将属性传递给wxml"
        ]
      ],
      [
        "li",
        [
          "p",
          "样式为何不起作用：rpx为响应式的，px为固定值"
        ],
        [
          "pre",
          {
            "lang": null,
            "highlighted": "     ## css 尺寸\n          rpx 小程序会响应加载（<span class=\"token number\">2</span>倍）\n          px不会响应加载\n    ## 图片\n          一定是<span class=\"token number\">2</span>倍图"
          },
          [
            "code",
            "     ## css 尺寸\n          rpx 小程序会响应加载（2倍）\n          px不会响应加载\n    ## 图片\n          一定是2倍图"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "设置全局背景"
        ]
      ],
      [
        "li",
        [
          "p",
          "如何在wxml中使用for循环"
        ]
      ],
      [
        "li",
        [
          "p",
          "如何调用接口"
        ]
      ],
      [
        "li",
        [
          "p",
          "如何格式化wxss文件，"
        ]
      ],
      [
        "li",
        [
          "p",
          "this.data.array.push不起作用"
        ]
      ],
      [
        "li",
        [
          "p",
          "自定义组件使用外部样式类"
        ]
      ],
      [
        "li",
        [
          "p",
          "自定义组件名不要与html标签同名"
        ]
      ],
      [
        "li",
        [
          "p",
          "分享如何做"
        ]
      ],
      [
        "li",
        [
          "p",
          "slot是并列关系,在自定义组件内使用slot时浮动，与其并列的元素清楚浮动没有效果"
        ]
      ],
      [
        "li",
        [
          "p",
          "什么时候可以使用箭头函数"
        ]
      ],
      [
        "li",
        [
          "p",
          "如何获取url中的参数"
        ]
      ],
      [
        "li",
        [
          "p",
          "开发者工具缓存导致组件找不到"
        ]
      ],
      [
        "li",
        [
          "p",
          "小程序样式里添加webkit前缀是必要的嘛"
        ]
      ],
      [
        "li",
        [
          "p",
          "如何跳转到客服"
        ]
      ],
      [
        "li",
        [
          "p",
          "在自定义组件中wx.createCanvasContext(string canvasId, Object this)第二个参数必须添加，在页面中不需要"
        ],
        [
          "h2",
          "接口篇"
        ],
        [
          "h2",
          "实战篇"
        ]
      ]
    ]
  ],
  "meta": {
    "order": 0,
    "title": "小程序常见问题",
    "filename": "docs/faq/introduce.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#欢迎大家在issue提出问题",
          "title": "欢迎大家在issue提出问题"
        },
        "欢迎大家在issue提出问题"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#小程序十万个为什么",
          "title": "小程序十万个为什么"
        },
        "小程序十万个为什么"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#基础篇",
          "title": "基础篇"
        },
        "基础篇"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#微信小程序在js里面怎么获取dom？",
          "title": "微信小程序在js里面怎么获取dom？"
        },
        "微信小程序在js里面怎么获取dom？"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#微信小程序图片如何最佳处理？",
          "title": "微信小程序图片如何最佳处理？"
        },
        "微信小程序图片如何最佳处理？"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#组件篇",
          "title": "组件篇"
        },
        "组件篇"
      ]
    ]
  ]
};

/***/ })

})
//# sourceMappingURL=4.3e0a148cc19d1f478174.hot-update.js.map