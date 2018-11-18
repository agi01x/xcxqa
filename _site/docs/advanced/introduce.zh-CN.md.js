webpackJsonp([6],{

/***/ 1842:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    {

    },
    [
      "h2",
      "特性"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "提炼自企业级中后台产品的交互语言和视觉风格。"
        ]
      ],
      [
        "li",
        [
          "p",
          "开箱即用的高质量 React 组件。"
        ]
      ],
      [
        "li",
        [
          "p",
          "使用 TypeScript 构建，提供完整的类型定义文件。"
        ]
      ],
      [
        "li",
        [
          "p",
          "全链路开发和设计工具体系。"
        ]
      ]
    ],
    [
      "h2",
      "支持环境"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "现代浏览器和 IE9 及以上（需要 ",
          [
            "a",
            {
              "title": null,
              "href": "https://ant.design/docs/react/getting-started-cn#兼容性"
            },
            "polyfills"
          ],
          "）。"
        ]
      ],
      [
        "li",
        [
          "p",
          "支持服务端渲染。"
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
              "href": "http://electron.atom.io/"
            },
            "Electron"
          ]
        ]
      ]
    ],
    [
      "h2",
      "版本"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "稳定版：",
          [
            "a",
            {
              "title": null,
              "href": "https://www.npmjs.org/package/antd"
            },
            [
              "img",
              {
                "title": null,
                "src": "https://img.shields.io/npm/v/antd.svg?style=flat-square",
                "alt": "npm package"
              }
            ]
          ]
        ]
      ]
    ],
    [
      "p",
      "你可以订阅：",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/releases.atom"
        },
        "https://github.com/ant-design/ant-design/releases.atom"
      ],
      " 来获得稳定版发布的通知。"
    ],
    [
      "h2",
      "安装"
    ],
    [
      "h3",
      "使用 npm 或 yarn 安装"
    ],
    [
      "p",
      [
        "strong",
        "我们推荐使用 npm 或 yarn 的方式进行开发"
      ],
      "，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span> antd --save"
      },
      [
        "code",
        "$ npm install antd --save"
      ]
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ yarn add antd"
      },
      [
        "code",
        "$ yarn add antd"
      ]
    ],
    [
      "p",
      "如果你的网络环境不佳，推荐使用 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/cnpm/cnpm"
        },
        "cnpm"
      ],
      "。"
    ],
    [
      "h3",
      "浏览器引入"
    ],
    [
      "p",
      "在浏览器中使用 ",
      [
        "code",
        "script"
      ],
      " 和 ",
      [
        "code",
        "link"
      ],
      " 标签直接引入文件，并使用全局变量 ",
      [
        "code",
        "antd"
      ],
      "。"
    ],
    [
      "p",
      "我们在 npm 发布包内的 ",
      [
        "code",
        "antd/dist"
      ],
      " 目录下提供了 ",
      [
        "code",
        "antd.js"
      ],
      " ",
      [
        "code",
        "antd.css"
      ],
      " 以及 ",
      [
        "code",
        "antd.min.js"
      ],
      " ",
      [
        "code",
        "antd.min.css"
      ],
      "。你也可以通过 ",
      [
        "a",
        {
          "title": null,
          "href": "https://cdnjs.com/libraries/antd"
        },
        [
          "img",
          {
            "title": null,
            "src": "https://img.shields.io/cdnjs/v/antd.svg?style=flat-square",
            "alt": "CDNJS"
          }
        ]
      ],
      "，",
      [
        "a",
        {
          "title": null,
          "href": "https://www.jsdelivr.com/package/npm/antd"
        },
        [
          "img",
          {
            "title": null,
            "src": "https://data.jsdelivr.com/v1/package/npm/antd/badge",
            "alt": null
          }
        ]
      ],
      " 或 ",
      [
        "a",
        {
          "title": null,
          "href": "https://unpkg.com/antd/dist/"
        },
        "UNPKG"
      ],
      " 进行下载。"
    ],
    [
      "blockquote",
      [
        "p",
        [
          "strong",
          "强烈不推荐使用已构建文件"
        ],
        "，这样无法按需加载，而且难以获得底层依赖模块的 bug 快速修复支持。"
      ],
      [
        "p",
        "注意：3.0 之后引入 antd.js 前你需要自行引入 ",
        [
          "a",
          {
            "title": null,
            "href": "http://momentjs.com/"
          },
          "moment"
        ],
        "。"
      ]
    ],
    [
      "h2",
      "示例"
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> DatePicker <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import { DatePicker } from 'antd';\nReactDOM.render(<DatePicker />, mountNode);"
      ]
    ],
    [
      "p",
      "引入样式："
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token string\">'antd/dist/antd.css'</span><span class=\"token punctuation\">;</span>  <span class=\"token comment\" spellcheck=\"true\">// or 'antd/dist/antd.less'</span>"
      },
      [
        "code",
        "import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'"
      ]
    ],
    [
      "h3",
      "按需加载"
    ],
    [
      "p",
      "下面两种方式都可以只加载用到的组件。"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "使用 ",
          [
            "a",
            {
              "title": null,
              "href": "https://github.com/ant-design/babel-plugin-import"
            },
            "babel-plugin-import"
          ],
          "（推荐）。"
        ],
        [
          "pre",
          {
            "lang": "js",
            "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// .babelrc or babel-loader option</span>\n<span class=\"token punctuation\">{</span>\n  <span class=\"token string\">\"plugins\"</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">[</span><span class=\"token string\">\"import\"</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token string\">\"libraryName\"</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"antd\"</span><span class=\"token punctuation\">,</span>\n      <span class=\"token string\">\"libraryDirectory\"</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"es\"</span><span class=\"token punctuation\">,</span>\n      <span class=\"token string\">\"style\"</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"css\"</span> <span class=\"token comment\" spellcheck=\"true\">// `style: true` 会加载 less 文件</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">]</span>\n<span class=\"token punctuation\">}</span>"
          },
          [
            "code",
            "// .babelrc or babel-loader option\n{\n  \"plugins\": [\n    [\"import\", {\n      \"libraryName\": \"antd\",\n      \"libraryDirectory\": \"es\",\n      \"style\": \"css\" // `style: true` 会加载 less 文件\n    }]\n  ]\n}"
          ]
        ],
        [
          "blockquote",
          [
            "p",
            "注意：webpack 1 无需设置 ",
            [
              "code",
              "libraryDirectory"
            ],
            "。"
          ]
        ],
        [
          "p",
          " 然后只需从 antd 引入模块即可，无需单独引入样式。等同于下面手动引入的方式。"
        ],
        [
          "pre",
          {
            "lang": "jsx",
            "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// babel-plugin-import 会帮助你加载 JS 和 CSS</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> DatePicker <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>"
          },
          [
            "code",
            "// babel-plugin-import 会帮助你加载 JS 和 CSS\nimport { DatePicker } from 'antd';"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "手动引入"
        ],
        [
          "pre",
          {
            "lang": "jsx",
            "highlighted": "<span class=\"token keyword\">import</span> DatePicker <span class=\"token keyword\">from</span> <span class=\"token string\">'antd/lib/date-picker'</span><span class=\"token punctuation\">;</span>  <span class=\"token comment\" spellcheck=\"true\">// 加载 JS</span>\n<span class=\"token keyword\">import</span> <span class=\"token string\">'antd/lib/date-picker/style/css'</span><span class=\"token punctuation\">;</span>        <span class=\"token comment\" spellcheck=\"true\">// 加载 CSS</span>\n<span class=\"token comment\" spellcheck=\"true\">// import 'antd/lib/date-picker/style';         // 加载 LESS</span>"
          },
          [
            "code",
            "import DatePicker from 'antd/lib/date-picker';  // 加载 JS\nimport 'antd/lib/date-picker/style/css';        // 加载 CSS\n// import 'antd/lib/date-picker/style';         // 加载 LESS"
          ]
        ]
      ]
    ],
    [
      "h2",
      "链接"
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
              "href": "http://ant.design/"
            },
            "首页"
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
              "href": "/docs/react/introduce"
            },
            "组件库"
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
              "href": "http://pro.ant.design/"
            },
            "Ant Design Pro"
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
              "href": "/changelog"
            },
            "更新日志"
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
              "href": "http://scaffold.ant.design"
            },
            "脚手架市场"
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
              "href": "http://react-component.github.io/"
            },
            "React 底层基础组件"
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
              "href": "http://mobile.ant.design"
            },
            "移动端组件"
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
              "href": "https://motion.ant.design"
            },
            "动效"
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
              "href": "https://github.com/ant-design/ant-design/wiki/Ant-Design-%E8%AE%BE%E8%AE%A1%E5%9F%BA%E7%A1%80%E7%AE%80%E7%89%88"
            },
            "设计规范速查手册"
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
              "href": "https://github.com/ant-design/ant-design/wiki/Development"
            },
            "开发者说明"
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
              "href": "https://github.com/ant-design/ant-design/wiki/%E8%BD%AE%E5%80%BC%E8%A7%84%E5%88%99%E5%92%8C%E7%89%88%E6%9C%AC%E5%8F%91%E5%B8%83%E6%B5%81%E7%A8%8B"
            },
            "版本发布规则"
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
              "href": "/docs/react/faq"
            },
            "常见问题"
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
              "href": "https://u.ant.design/codesandbox-repro"
            },
            "CodeSandbox 模板"
          ],
          " for bug reports"
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
              "href": "https://github.com/websemantics/awesome-ant-design"
            },
            "Awesome Ant Design"
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
              "href": "/docs/react/customize-theme"
            },
            "定制主题"
          ]
        ]
      ]
    ],
    [
      "h2",
      "谁在使用"
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
              "href": "http://www.antfin.com/"
            },
            "蚂蚁金服"
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
              "href": "http://www.alibaba.com/"
            },
            "阿里巴巴"
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
              "href": "http://www.tencent.com"
            },
            "腾讯"
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
              "href": "http://www.baidu.com"
            },
            "百度"
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
              "href": "http://www.koubei.com/"
            },
            "口碑"
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
              "href": "http://www.meituan.com"
            },
            "美团"
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
              "href": "http://www.xiaojukeji.com/"
            },
            "滴滴"
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
              "href": "https://www.ele.me/"
            },
            "饿了么"
          ]
        ]
      ]
    ],
    [
      "blockquote",
      [
        "p",
        "如果你的公司和产品使用了 Ant Design，欢迎到 ",
        [
          "a",
          {
            "title": null,
            "href": "https://github.com/ant-design/ant-design/issues/477"
          },
          "这里"
        ],
        " 留言。"
      ]
    ],
    [
      "h2",
      "如何贡献"
    ],
    [
      "p",
      "在任何形式的参与前，请先阅读 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/blob/master/.github/CONTRIBUTING.md"
        },
        "贡献者文档"
      ],
      "。如果你希望参与贡献，欢迎 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/pulls"
        },
        "Pull Request"
      ],
      "，或给我们 ",
      [
        "a",
        {
          "title": null,
          "href": "http://new-issue.ant.design/"
        },
        "报告 Bug"
      ],
      "。"
    ],
    [
      "blockquote",
      [
        "p",
        "强烈推荐阅读 ",
        [
          "a",
          {
            "title": null,
            "href": "https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way"
          },
          "《提问的智慧》"
        ],
        "、",
        [
          "a",
          {
            "title": null,
            "href": "https://github.com/seajs/seajs/issues/545"
          },
          "《如何向开源社区提问题》"
        ],
        " 和 ",
        [
          "a",
          {
            "title": null,
            "href": "http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html"
          },
          "《如何有效地报告 Bug》"
        ],
        "、",
        [
          "a",
          {
            "title": null,
            "href": "https://zhuanlan.zhihu.com/p/25795393"
          },
          "《如何向开源项目提交无法解答的问题》"
        ],
        "，更好的问题更容易获得帮助。"
      ]
    ],
    [
      "h2",
      "社区互助"
    ],
    [
      "p",
      "如果您在使用的过程中碰到问题，可以通过下面几个途径寻求帮助，同时我们也鼓励资深用户通过下面的途径给新人提供帮助。"
    ],
    [
      "p",
      "通过 Stack Overflow 或者 Segment Fault 提问时，建议加上 ",
      [
        "code",
        "antd"
      ],
      " 标签。"
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "http://stackoverflow.com/questions/tagged/antd"
            },
            [
              "img",
              {
                "alt": "Stack Overflow",
                "src": "https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-logo.svg?v=2bb144720a66",
                "width": "140"
              }
            ]
          ],
          "（English）"
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
              "href": "https://segmentfault.com/t/antd"
            },
            [
              "img",
              {
                "alt": "Segment Fault",
                "src": "https://gw.alipayobjects.com/zos/rmsportal/hfYFfCvHTQTUKntlJbMF.svg",
                "width": "100"
              }
            ]
          ],
          "（中文）"
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
              "href": "https://gitter.im/ant-design/ant-design-english?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge"
            },
            [
              "img",
              {
                "title": null,
                "src": "https://badges.gitter.im/ant-design/ant-design-english.svg",
                "alt": "Gitter"
              }
            ]
          ],
          " (English)"
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
              "href": "https://gitter.im/ant-design/ant-design?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"
            },
            [
              "img",
              {
                "title": null,
                "src": "https://badges.gitter.im/Join%20Chat.svg",
                "alt": "Join the chat at https://gitter.im/ant-design/ant-design"
              }
            ]
          ],
          "（中文）"
        ]
      ]
    ]
  ],
  "meta": {
    "order": 0,
    "title": "Ant Design of React",
    "filename": "docs/advanced/introduce.zh-CN.md"
  },
  "description": [
    "section",
    [
      "p",
      "这是小程序进阶教程"
    ],
    [
      "div",
      {
        "class": "pic-plus"
      },
      [
        "img",
        {
          "width": "150",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        }
      ],
      [
        "span",
        "+"
      ],
      [
        "img",
        {
          "width": "160",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/tXlLQhLvkEelMstLyHiN.svg"
        }
      ]
    ],
    [
      "style",
      "\n.pic-plus > * {\n  display: inline-block !important;\n  vertical-align: middle;\n}\n.pic-plus span {\n  font-size: 30px;\n  color: #aaa;\n  margin: 0 20px;\n}\n"
    ]
  ],
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#特性",
          "title": "特性"
        },
        "特性"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#支持环境",
          "title": "支持环境"
        },
        "支持环境"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#版本",
          "title": "版本"
        },
        "版本"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#安装",
          "title": "安装"
        },
        "安装"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#示例",
          "title": "示例"
        },
        "示例"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#链接",
          "title": "链接"
        },
        "链接"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#谁在使用",
          "title": "谁在使用"
        },
        "谁在使用"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#如何贡献",
          "title": "如何贡献"
        },
        "如何贡献"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#社区互助",
          "title": "社区互助"
        },
        "社区互助"
      ]
    ]
  ]
};

/***/ })

});
//# sourceMappingURL=introduce.zh-CN.md.js.map