import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Modal, message, Row, Col, Badge, Icon } from 'antd';
// import { Link } from 'bisheng/router';
import { isLocalStorageNameSupported, loadScript, getLocalizedPathname } from '../utils';
// import ColorPicker from '../Color/ColorPicker';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.lessLoaded = false;

    this.state = {
      color: '#1890ff',
    };
  }

  componentDidMount() {
    // for some iOS
    // http://stackoverflow.com/a/14555361
    if (!isLocalStorageNameSupported()) {
      return;
    }
    // 大版本发布后全局弹窗提示
    //   1. 点击『知道了』之后不再提示
    //   2. 超过截止日期后不再提示
    if (
      localStorage.getItem('antd@3.0.0-notification-sent') !== 'true'
      && Date.now() < new Date('2017/12/20').getTime()
    ) {
      this.infoNewVersion();
    }
  }

  handleColorChange = (color) => {
    const changeColor = () => {
      const { intl: { messages } } = this.props;
      window.less.modifyVars({
        '@primary-color': color,
      }).then(() => {
        Icon.setTwoToneColor({ primaryColor: color });
        message.success(messages['app.footer.primary-color-changed']);
        this.setState({ color });
      });
    };

    const lessUrl = 'https://gw.alipayobjects.com/os/lib/less.js/3.8.1/less.min.js';

    if (this.lessLoaded) {
      changeColor();
    } else {
      window.less = {
        async: true,
        javascriptEnabled: true,
      };
      loadScript(lessUrl).then(() => {
        this.lessLoaded = true;
        changeColor();
      });
    }
  }

  infoNewVersion() {
    const { intl: { messages } } = this.props;
    Modal.info({
      title: messages['app.publish.title'],
      content: (
        <div>
          <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="Ant Design" />
          <p>
            {messages['app.publish.greeting']}
            <a target="_blank" rel="noopener noreferrer" href="/changelog">antd@3.0.0</a>
            {messages['app.publish.intro']}
            {messages['app.publish.old-version-guide']}
            <a target="_blank" rel="noopener noreferrer" href="http://2x.ant.design">2x.ant.design</a>
            {messages['app.publish.old-version-tips']}
          </p>
        </div>
      ),
      okText: 'OK',
      onOk: () => localStorage.setItem('antd@3.0.0-notification-sent', 'true'),
      className: 'new-version-info-modal',
      width: 470,
    });
  }

  render() {
    const { intl = {} } = this.props;
    const { color } = this.state;
    const isZhCN = intl.locale === 'zh-CN';
    return (
      <footer id="footer">
        <div className="footer-wrap">
          <Row>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2><FormattedMessage id="app.footer.resources" /></h2>
              </div>
            </Col>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2><FormattedMessage id="app.footer.community" /></h2>

              </div>
            </Col>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2><FormattedMessage id="app.footer.help" /></h2>
              </div>
            </Col>
            {/* <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>
                  <img className="title-icon" src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg" alt="AFX Cloud" />
                  <FormattedMessage id="app.footer.more-product" />
                </h2>
                <div style={{ marginTop: 20 }}>
                  <ColorPicker
                    type="sketch"
                    small
                    color={color}
                    position="top"
                    presetColors={[
                      '#F5222D',
                      '#FA541C',
                      '#FA8C16',
                      '#FAAD14',
                      '#FADB14',
                      '#A0D911',
                      '#52C41A',
                      '#13C2C2',
                      '#1890FF',
                      '#2F54EB',
                      '#722ED1',
                      '#EB2F96',
                    ]}
                    onChangeComplete={this.handleColorChange}
                  />
                </div>
              </div>
            </Col> */}
          </Row>
        </div>
        <div className="bottom-bar">
          Made with <span className="heart">❤</span> by
          <a target="_blank" rel="noopener noreferrer" href="https://shudong.wang">
            <FormattedMessage id="app.footer.company" />
          </a>
        </div>
      </footer>
    );
  }
}

export default injectIntl(Footer);
