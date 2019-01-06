import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'bisheng/router';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { Select, Menu, Row, Col, Icon, Popover, Input, Badge, Button } from 'antd';
import * as utils from '../utils';
import { version as antdVersion } from '../../../../package.json';

const { Option } = Select;

let docsearch;
if (typeof window !== 'undefined') {
  docsearch = require('docsearch.js'); // eslint-disable-line
}

function initDocSearch(locale) {
  if (!docsearch) {
    return;
  }
  const lang = locale === 'zh-CN' ? 'cn' : 'en';
  docsearch({
    apiKey: '60ac2c1a7d26ab713757e4a081e133d0',
    indexName: 'ant_design',
    inputSelector: '#search-box input',
    algoliaOptions: { facetFilters: [`tags:${lang}`] },
    transformData(hits) {
      hits.forEach((hit) => {
        hit.url = hit.url.replace('ant.design', location.host);
        hit.url = hit.url.replace('https:', location.protocol);
      });
      return hits;
    },
    debug: false, // Set debug to true if you want to inspect the dropdown
  });
}

export default class Header extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
    intl: PropTypes.object.isRequired,
    isMobile: PropTypes.bool.isRequired,
  }

  state = {
    menuVisible: false,
  };

  componentDidMount() {
    const { intl, router } = this.context;
    router.listen(this.handleHideMenu);
    const { searchInput } = this;
    document.addEventListener('keyup', (event) => {
      if (event.keyCode === 83 && event.target === document.body) {
        searchInput.focus();
      }
    });
    initDocSearch(intl.locale);
  }

  handleShowMenu = () => {
    this.setState({
      menuVisible: true,
    });
  }

  handleHideMenu = () => {
    this.setState({
      menuVisible: false,
    });
  }

  onMenuVisibleChange = (visible) => {
    this.setState({
      menuVisible: visible,
    });
  }

  handleVersionChange = (url) => {
    const currentUrl = window.location.href;
    const currentPathname = window.location.pathname;
    window.location.href = currentUrl.replace(window.location.origin, url)
      .replace(currentPathname, utils.getLocalizedPathname(currentPathname));
  }

  handleLangChange = () => {
    const { location: { pathname } } = this.props;
    const currentProtocol = `${window.location.protocol}//`;
    const currentHref = window.location.href.substr(currentProtocol.length);

    if (utils.isLocalStorageNameSupported()) {
      localStorage.setItem('locale', utils.isZhCN(pathname) ? 'en-US' : 'zh-CN');
    }

    window.location.href = currentProtocol + currentHref.replace(
      window.location.pathname,
      utils.getLocalizedPathname(pathname, !utils.isZhCN(pathname)),
    );
  }

  render() {
    const { menuVisible } = this.state;
    const { isMobile } = this.context;
    const menuMode = isMobile ? 'inline' : 'horizontal';
    const {
      location, themeConfig,
    } = this.props;
    const docVersions = { ...themeConfig.docVersions, [antdVersion]: antdVersion };
    const versionOptions = Object.keys(docVersions)
      .map(version => <Option value={docVersions[version]} key={version}>{version}</Option>);
    const module = location.pathname.replace(/(^\/|\/$)/g, '').split('/').slice(0, -1).join('/');
    let activeMenuItem = module || 'home';
    if (activeMenuItem === 'components' || location.pathname === 'changelog') {
      activeMenuItem = 'docs/base';
    }
    const { intl: { locale } } = this.context;
    const isZhCN = locale === 'zh-CN';

    const headerClassName = classNames({
      clearfix: true,
    });

    const menu = [
      <Menu className="menu-site" mode={menuMode} selectedKeys={[activeMenuItem]} id="nav" key="nav">
        {/* <Menu.Item key="home">
          <Link to={utils.getLocalizedPathname('/docs/base/introduce', isZhCN)}>
            <FormattedMessage id="app.header.menu.home" />
          </Link>
        </Menu.Item> */}
        <Menu.Item key="docs/faq">
          <Link to={utils.getLocalizedPathname('/docs/faq/introduce', isZhCN)}>
            <FormattedMessage id="app.header.menu.faq" />
          </Link>
        </Menu.Item>
        {/* <Menu.Item key="docs/base">
          <Link to={utils.getLocalizedPathname('/docs/base/introduce', isZhCN)}>
            <FormattedMessage id="app.header.menu.base" />
          </Link>
        </Menu.Item>
        <Menu.Item key="docs/advanced">
          <Link to={utils.getLocalizedPathname('/docs/advanced/introduce', isZhCN)}>
            <FormattedMessage id="app.header.menu.advanced" />
          </Link>
        </Menu.Item>
        <Menu.Item key="docs/guide">
          <Link to={utils.getLocalizedPathname('/docs/guide/introduce', isZhCN)}>
            <FormattedMessage id="app.header.menu.guide" />
          </Link>
        </Menu.Item>
        <Menu.Item key="docs/api">
          <Link to={utils.getLocalizedPathname('/docs/api/introduce', isZhCN)}>
            <FormattedMessage id="app.header.menu.api" />
          </Link>
        </Menu.Item>
        <Menu.Item key="docs/awesome">
          <Link to={utils.getLocalizedPathname('/docs/awesome/introduce', isZhCN)}>
            <FormattedMessage id="app.header.menu.awesome" />
          </Link>
        </Menu.Item> */}
        <Menu.Item key="docs/about">
          <Link to={utils.getLocalizedPathname('/docs/about/introduce', isZhCN)}>
            <FormattedMessage id="app.header.menu.about" />
          </Link>
        </Menu.Item>
      </Menu>,
    ];

    const searchPlaceholder = locale === 'zh-CN' ? '在 小程序fun 中搜索' : 'Search in xiaochengxu.fun';
    return (
      <header id="header" className={headerClassName}>
        {isMobile && (
          <Popover
            overlayClassName="popover-menu"
            placement="bottomRight"
            content={menu}
            trigger="click"
            visible={menuVisible}
            arrowPointAtCenter
            onVisibleChange={this.onMenuVisibleChange}
          >
            <Icon
              className="nav-phone-icon"
              type="menu"
              onClick={this.handleShowMenu}
            />
          </Popover>
        )}
        <Row>
          <Col xxl={4} xl={5} lg={5} md={5} sm={24} xs={24}>
            <Link to={utils.getLocalizedPathname('/docs/base/introduce', isZhCN)} id="logo">
              <img alt="logo" src="http://md.shudong.wang/fun.png" />
            </Link>
          </Col>
          <Col xxl={20} xl={19} lg={19} md={19} sm={0} xs={0}>
            <div id="search-box">
              <Icon type="search" />
              <Input ref={ref => this.searchInput = ref} placeholder={searchPlaceholder} />
            </div>
            {!isMobile && menu}
          </Col>
        </Row>
      </header>
    );
  }
}
