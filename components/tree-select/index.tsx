import * as React from 'react';
import RcTreeSelect, { TreeNode, SHOW_ALL, SHOW_PARENT, SHOW_CHILD } from 'rc-tree-select';
import classNames from 'classnames';
import { TreeSelectProps } from './interface';
import { SelectLocale } from '../select';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import warning from '../_util/warning';
import Icon from '../icon';
import { AntTreeNodeProps } from '../tree';
import omit from 'omit.js';

export { TreeNode, TreeSelectProps } from './interface';

export default class TreeSelect extends React.Component<TreeSelectProps, any> {
  static TreeNode = TreeNode;
  static SHOW_ALL = SHOW_ALL;
  static SHOW_PARENT = SHOW_PARENT;
  static SHOW_CHILD = SHOW_CHILD;

  static defaultProps = {
    prefixCls: 'ant-select',
    transitionName: 'slide-up',
    choiceTransitionName: 'zoom',
    showSearch: false,
  };

  private rcTreeSelect: any;

  constructor(props: TreeSelectProps) {
    super(props);

    warning(
      props.multiple !== false || !props.treeCheckable,
      '`multiple` will alway be `true` when `treeCheckable` is true',
    );
  }

  focus() {
    this.rcTreeSelect.focus();
  }

  blur() {
    this.rcTreeSelect.blur();
  }

  saveTreeSelect = (node: typeof RcTreeSelect) => {
    this.rcTreeSelect = node;
  }

  renderSwitcherIcon = ({ isLeaf, loading }: AntTreeNodeProps) => {
    const {
      prefixCls,
    } = this.props;
    if (loading) {
      return (
        <Icon
          type="loading"
          className={`${prefixCls}-switcher-loading-icon`}
        />
      );
    }
    if (isLeaf) {
      return null;
    }
    return (
      <Icon type="caret-down" className={`${prefixCls}-switcher-icon`} />
    );
  }

  renderTreeSelect = (locale: SelectLocale) => {
    const {
      prefixCls,
      className,
      size,
      notFoundContent,
      dropdownStyle,
      dropdownClassName,
      suffixIcon,
      ...restProps
    } = this.props;
    const rest = omit(restProps, ['inputIcon', 'removeIcon', 'clearIcon', 'switcherIcon']);

    const cls = classNames({
      [`${prefixCls}-lg`]: size === 'large',
      [`${prefixCls}-sm`]: size === 'small',
    }, className);

    let checkable = rest.treeCheckable;
    if (checkable) {
      checkable = <span className={`${prefixCls}-tree-checkbox-inner`} />;
    }

    const inputIcon = suffixIcon && (
      React.isValidElement<{ className?: string }>(suffixIcon)
        ? React.cloneElement(suffixIcon) : suffixIcon) || (
        <Icon type="down" className={`${prefixCls}-arrow-icon`} />
      );

    const removeIcon = (
      <Icon type="close" className={`${prefixCls}-remove-icon`} />
    );

    const clearIcon = (
      <Icon type="close-circle" className={`${prefixCls}-clear-icon`} theme="filled" />
    );

    return (
      <RcTreeSelect
        switcherIcon={this.renderSwitcherIcon}
        inputIcon={inputIcon}
        removeIcon={removeIcon}
        clearIcon={clearIcon}
        {...rest}
        dropdownClassName={classNames(dropdownClassName, `${prefixCls}-tree-dropdown`)}
        prefixCls={prefixCls}
        className={cls}
        dropdownStyle={{ maxHeight: '100vh', overflow: 'auto', ...dropdownStyle }}
        treeCheckable={checkable}
        notFoundContent={notFoundContent || locale.notFoundContent}
        ref={this.saveTreeSelect}
      />
    );
  }

  render() {
    return (
      <LocaleReceiver
        componentName="Select"
        defaultLocale={{}}
      >
        {this.renderTreeSelect}
      </LocaleReceiver>
    );
  }
}
