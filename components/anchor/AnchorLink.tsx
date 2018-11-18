import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { AntAnchor } from './Anchor';

export interface AnchorLinkProps {
  prefixCls?: string;
  href: string;
  title: React.ReactNode;
  children?: any;
}

export default class AnchorLink extends React.Component<AnchorLinkProps, any> {
  static defaultProps = {
    prefixCls: 'ant-anchor',
    href: '#',
  };

  static contextTypes = {
    antAnchor: PropTypes.object,
  };

  context: {
    antAnchor: AntAnchor;
  };

  componentDidMount() {
    this.context.antAnchor.registerLink(this.props.href);
  }

  componentWillReceiveProps(nextProps: AnchorLinkProps) {
    const { href } = nextProps;
    if (this.props.href !== href) {
      this.context.antAnchor.unregisterLink(this.props.href);
      this.context.antAnchor.registerLink(href);
    }
  }

  componentWillUnmount() {
    this.context.antAnchor.unregisterLink(this.props.href);
  }

  handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const { scrollTo, onClick } = this.context.antAnchor;
    const { href, title } = this.props;
    if (onClick) {
      onClick(e, { title, href });
    }
    scrollTo(href);
  }

  render() {
    const {
      prefixCls,
      href,
      title,
      children,
    } = this.props;
    const active = this.context.antAnchor.activeLink === href;
    const wrapperClassName = classNames(`${prefixCls}-link`, {
      [`${prefixCls}-link-active`]: active,
    });
    const titleClassName = classNames(`${prefixCls}-link-title`, {
      [`${prefixCls}-link-title-active`]: active,
    });
    return (
      <div className={wrapperClassName}>
        <a
          className={titleClassName}
          href={href}
          title={typeof title === 'string' ? title : ''}
          onClick={this.handleClick}
        >
          {title}
        </a>
        {children}
      </div>
    );
  }
}
