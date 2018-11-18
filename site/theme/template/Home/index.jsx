import React from 'react';
import { injectIntl } from 'react-intl';
import DocumentTitle from 'react-document-title';
import PropTypes from 'prop-types';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
// To store style which is only for Home and has conflicts with others.
function getStyle() {
  return `
    .main-wrapper {
      padding: 0;
    }
    #header {
      box-shadow: none;
      max-width: 1200px;
      width: 100%;
      margin: 20px auto 0;
      padding: 0 24px;
    }
    #header,
    #header .ant-select-selection,
    #header .ant-menu {
      background: transparent;
    }
    #header #logo {
      padding: 0;
    }
    #header .ant-row > div:last-child .ant-menu,
    #header .nav-phone-icon {
      display: none;
    }
    #header .ant-row > div:last-child .header-lang-button {
      margin-right: 0;
    }
    footer .footer-wrap {
      width: 100%;
      padding: 0;
    }
    footer .footer-wrap .ant-row {
      width: 100%;
      max-width: 1200px;
      padding: 86px 24px 93px 24px;
      margin: auto;
    }
    @media only screen and (max-width: 767.99px) {
      #footer .footer-wrap{
        padding: 40px 24px
      }
      footer .footer-wrap .ant-row {
        padding: 0;
      }
    }
  `;
}

/* eslint-disable react/prefer-stateless-function */
class Home extends React.Component {
  static contextTypes = {
    intl: PropTypes.object.isRequired,
    isMobile: PropTypes.bool.isRequired,
  }

  render() {
    const { isMobile, intl } = this.context;
    const childProps = { ...this.props, isMobile, locale: intl.locale };
    return (
      <DocumentTitle title={`Ant Design - ${intl.formatMessage({ id: 'app.home.slogan' })}`}>
        <div className="main-wrapper">
          <style dangerouslySetInnerHTML={{ __html: getStyle() }} />
          <Banner {...childProps} />
          <Page1 {...childProps} />
          <Page2 {...childProps} />
          <Page3 {...childProps} />
        </div>
      </DocumentTitle>
    );
  }
}

export default injectIntl(Home);
