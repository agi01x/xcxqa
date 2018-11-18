import React from 'react';
import { render, mount } from 'enzyme';
import Icon from '..';
import ReactIcon from '@ant-design/icons-react';
import Tooltip from '../../tooltip';
import { getThemeFromTypeName, withThemeSuffix } from '../utils';

describe('Icon', () => {
  it('should render to a <i class="xxx"><svg>...</svg></i>', () => {
    const wrapper = render(
      <Icon type="message" className="my-icon-classname" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should support basic usage', () => {
    const wrapper = render(
      <div>
        <Icon type="home" />
        <Icon type="setting" theme="filled" />
        <Icon type="smile" theme="outlined" />
        <Icon type="sync" spin />
        <Icon type="loading" />
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should support older usage', () => {
    const wrapper = render(
      <div>
        <Icon type="home-o" />
        <Icon type="setting-fill" />
        <Icon type="smile-o" />
        <Icon type="check-circle-twotone" />
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should support two-tone icon', () => {
    const wrapper = render(
      <Icon type="check-circle" theme="twoTone" twoToneColor="#f5222d" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should support config global two-tone primary color', () => {
    const colors = ReactIcon.getTwoToneColors();
    Icon.setTwoToneColor('#1890ff');
    expect(Icon.getTwoToneColor()).toBe('#1890ff');
    const wrapper = render(
      <Icon type="check-circle" theme="twoTone" />
    );
    expect(wrapper).toMatchSnapshot();
    ReactIcon.setTwoToneColors(colors);
  });

  it('should support pass svg paths as children', () => {
    const wrapper = render(
      <Icon viewBox="0 0 24 24">
        <title>Cool Home</title>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </Icon>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should give warning and render <i>{null}</i>', () => {
    const wrapper = render(
      <Icon viewBox="0 0 24 24" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should support wrapped by Tooltip', () => {
    const onVisibleChange = jest.fn();
    const wrapper = mount(
      <Tooltip
        title="xxxxx"
        mouseEnterDelay={0}
        mouseLeaveDelay={0}
        onVisibleChange={onVisibleChange}
      >
        <Icon type="home" />
      </Tooltip>
    );
    expect(wrapper.find('i')).toHaveLength(1);
    const icon = wrapper.find('i').at(0);
    icon.simulate('mouseenter');
    expect(onVisibleChange).toBeCalledWith(true);
    expect(wrapper.instance().tooltip.props.visible).toBe(true);

    icon.simulate('mouseleave');
    expect(onVisibleChange).toBeCalledWith(false);
    expect(wrapper.instance().tooltip.props.visible).toBe(false);
  });

  it('should support custom usage of children', () => {
    expect(() => {
      render(<Icon type="custom">&E648</Icon>);
    }).not.toThrow();
  });

  describe('warning on conflicting theme', () => {
    let errorSpy;
    beforeEach(() => {
      errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterEach(() => {
      errorSpy.mockRestore();
    });

    it('does not warn', () => {
      mount(<Icon type="clock-circle-o" theme="outlined" />);
      expect(errorSpy).not.toBeCalled();
    });

    it('warns', () => {
      mount(<Icon type="clock-circle-o" theme="filled" />);
      expect(errorSpy).toBeCalledWith(
        "Warning: The icon name 'clock-circle-o' already specify a theme 'outlined', the 'theme' prop 'filled' will be ignored."
      );
    });
  });

  describe('`component` prop', () => {
    it('can access to svg defs if has children', () => {
      const wrapper = render(
        <Icon
          className="my-home-icon"
          component={svgProps => (
            <svg {...svgProps}>
              <defs>
                <linearGradient id="gradient">
                  <stop offset="20%" stopColor="#39F" />
                  <stop offset="90%" stopColor="#F3F" />
                </linearGradient>
              </defs>
              {
                React.Children.map(
                  svgProps.children,
                  child => React.cloneElement(
                    child,
                    child.type === 'path' ? { fill: 'scriptUrl(#gradient)' } : {}
                  )
                )
              }
            </svg>
          )}
        >
          <title>Cool Home</title>
          <path d="'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'" />
        </Icon>
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should support svg react component', () => {
    const SvgComponent = props => (
      <svg viewBox="0 0 24 24" {...props}>
        <title>Cool Home</title>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    );

    const wrapper = render(
      <Icon
        className="my-home-icon"
        component={SvgComponent}
      >
        <title>Cool Home</title>
        <path d="'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'" />
      </Icon>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Icon.createFromIconfontCN()', () => {
  const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });

  it('should support iconfont.cn', () => {
    const wrapper = render(
      <div className="icons-list">
        <IconFont type="icon-tuichu" />
        <IconFont type="icon-facebook" />
        <IconFont type="icon-twitter" />
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('utils', () => {
  it('getThemeFromTypeName() should work', () => {
    const testCases = ['check-circle', 'check-circle-o', 'check-circle-fill', 'check-circle-twotone'];
    const result = testCases.map(type => getThemeFromTypeName(type));
    expect(result).toEqual(
      [null, 'outlined', 'filled', 'twoTone']
    );
  });

  it('withThemeSuffix() should work', () => {
    const testCases = [
      { type: 'home', theme: 'filled' },
      { type: 'home', theme: 'outlined' },
      { type: 'home', theme: 'twoTone' },
      { type: 'home', theme: 'This-is-the-secret' },
      { type: 'home-o', theme: 'filled' },
      { type: 'home-fill', theme: 'outlined' },
      { type: 'home-o', theme: 'twoTone' },
      { type: 'home-o', theme: 'This-is-the-secret' },
    ];
    const result = testCases.map(({ type, theme }) => withThemeSuffix(type, theme));
    expect(result).toEqual(
      ['home-fill', 'home-o', 'home-twotone', 'home',
        'home-o-fill', 'home-fill-o', 'home-o-twotone', 'home-o']
    );
  });
});
