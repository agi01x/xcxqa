import * as React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import Tooltip, { AbstractTooltipProps }  from '../tooltip';
import Icon from '../icon';
import Button from '../button';
import { ButtonType, NativeButtonProps } from '../button/button';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import defaultLocale from '../locale-provider/default';

export interface PopconfirmProps extends AbstractTooltipProps {
  title: React.ReactNode;
  onConfirm?: (e?: React.MouseEvent<any>) => void;
  onCancel?: (e?: React.MouseEvent<any>) => void;
  okText?: React.ReactNode;
  okType?: ButtonType;
  cancelText?: React.ReactNode;
  okButtonProps?: NativeButtonProps;
  cancelButtonProps?: NativeButtonProps;
  icon?: React.ReactNode;
  onVisibleChange?: (visible?: boolean, e?: React.MouseEvent<any>) => void;
}

export interface PopconfirmState {
  visible?: boolean;
}

export interface PopconfirmLocale {
  okText: string;
  cancelText: string;
}

class Popconfirm extends React.Component<PopconfirmProps, PopconfirmState> {
  static defaultProps = {
    prefixCls: 'ant-popover',
    transitionName: 'zoom-big',
    placement: 'top',
    trigger: 'click',
    okType: 'primary',
    icon: <Icon type="exclamation-circle" theme="filled" />,
  };

  static getDerivedStateFromProps(nextProps: PopconfirmProps) {
    if ('visible' in nextProps) {
      return { visible: nextProps.visible };
    } else if ('defaultVisible' in nextProps) {
      return { visible: nextProps.defaultVisible };
    }
    return null;
  }

  private tooltip: any;

  constructor(props: PopconfirmProps) {
    super(props);

    this.state = {
      visible: props.visible,
    };
  }

  getPopupDomNode() {
    return this.tooltip.getPopupDomNode();
  }

  onConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.setVisible(false, e);

    const { onConfirm } = this.props;
    if (onConfirm) {
      onConfirm.call(this, e);
    }
  }

  onCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.setVisible(false, e);

    const { onCancel } = this.props;
    if (onCancel) {
      onCancel.call(this, e);
    }
  }

  onVisibleChange = (visible: boolean) => {
    this.setVisible(visible);
  }

  setVisible(visible: boolean, e?: React.MouseEvent<HTMLButtonElement>) {
    const props = this.props;
    if (!('visible' in props)) {
      this.setState({ visible });
    }

    const { onVisibleChange } = props;
    if (onVisibleChange) {
      onVisibleChange(visible, e);
    }
  }

  saveTooltip = (node: any) => {
    this.tooltip = node;
  }

  renderOverlay = (popconfirmLocale: PopconfirmLocale) => {
    const { prefixCls, okButtonProps, cancelButtonProps, title, cancelText, okText, okType, icon } = this.props;
    return (
      <div>
        <div className={`${prefixCls}-inner-content`}>
          <div className={`${prefixCls}-message`}>
            {icon}
            <div className={`${prefixCls}-message-title`}>{title}</div>
          </div>
          <div className={`${prefixCls}-buttons`}>
            <Button onClick={this.onCancel} size="small" {...cancelButtonProps}>
              {cancelText || popconfirmLocale.cancelText}
            </Button>
            <Button onClick={this.onConfirm} type={okType} size="small" {...okButtonProps}>
              {okText || popconfirmLocale.okText}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { prefixCls, placement, ...restProps } = this.props;

    const overlay = (
      <LocaleReceiver
        componentName="Popconfirm"
        defaultLocale={defaultLocale.Popconfirm}
      >
        {this.renderOverlay}
      </LocaleReceiver>
    );

    return (
      <Tooltip
        {...restProps}
        prefixCls={prefixCls}
        placement={placement}
        onVisibleChange={this.onVisibleChange}
        visible={this.state.visible}
        overlay={overlay}
        ref={this.saveTooltip}
      />
    );
  }
}

polyfill(Popconfirm);

export default Popconfirm;
