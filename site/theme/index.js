require('core-js/es6/string');
const path = require('path');

const homeTmpl = './template/Home/index';
const contentTmpl = './template/Content/index';
// const redirectTmpl = './template/Redirect';
// const appShellTmpl = './template/AppShell';

// 读取markdown 文件
function pickerGenerator(module) {
  const tester = new RegExp(`^docs/${module}`);
  return (markdownData) => {
    const { filename } = markdownData.meta;
    if (tester.test(filename)
      && !/\/demo$/.test(path.dirname(filename))) {
      return {
        meta: markdownData.meta,
      };
    }
  };
}

module.exports = {
  lazyLoad(nodePath, nodeValue) {
    if (typeof nodeValue === 'string') {
      return true;
    }
    return nodePath.endsWith('/demo');
  },
  pick: {
    // components(markdownData) {
    //   const { filename } = markdownData.meta;
    //   if (!/^components/.test(filename)
    //     || /[/\\]demo$/.test(path.dirname(filename))) return;

    //   return {
    //     meta: markdownData.meta,
    //   };
    // },
    // changelog(markdownData) {
    //   if (/CHANGELOG/.test(markdownData.meta.filename)) {
    //     return {
    //       meta: markdownData.meta,
    //     };
    //   }
    // },
    'docs/pattern': pickerGenerator('pattern'),
    'docs/base': pickerGenerator('base'),
    'docs/advanced': pickerGenerator('advanced'),
    'docs/awesome': pickerGenerator('awesome'),
    'docs/about': pickerGenerator('about'),
    'docs/guide': pickerGenerator('guide'),
    'docs/api': pickerGenerator('api'),
  },
  plugins: [
    'bisheng-plugin-description',
    'bisheng-plugin-toc?maxDepth=2&keepElem',
    'bisheng-plugin-antd',
    'bisheng-plugin-react?lang=__react',
  ],
  routes: {
    path: '/',
    component: './template/Layout/index',
    indexRoute: { component: homeTmpl },
    childRoutes: [
      {
        path: 'index-cn',
        component: contentTmpl,
      }, {
        path: 'docs/base/:children',
        component: contentTmpl,
      }, {
        path: 'docs/api/:children',
        component: contentTmpl,
      }, {
        path: 'docs/guide/:children',
        component: contentTmpl,
      }, {
        path: 'docs/advanced/:children',
        component: contentTmpl,
      }, {
        path: 'docs/awesome/:children',
        component: contentTmpl,
      }, {
        path: 'docs/about/:children',
        component: contentTmpl,
      }
    ],
  },
};
