import React from 'react';
import { mount } from 'enzyme';
import Search from '../Search';
import Button from '../../button';
import focusTest from '../../../tests/shared/focusTest';

describe('Input.Search', () => {
  focusTest(Search);

  it('should support custom button', () => {
    const wrapper = mount(
      <Search enterButton={<button type="button">ok</button>} />
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('should support custom Button', () => {
    const wrapper = mount(
      <Search enterButton={<Button>ok</Button>} />
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('should support ReactNode suffix without error', () => {
    const fn = () => {
      mount(
        <Search suffix={<div>ok</div>} />
      );
    };
    expect(fn).not.toThrow();
  });

  it('should disable enter button when disabled prop is true', () => {
    const wrapper = mount(
      <Search placeholder="input search text" enterButton disabled />
    );
    expect(wrapper.find('.ant-btn-primary[disabled]')).toHaveLength(1);
  });

  it('should trigger onSearch when click search icon', () => {
    const onSearch = jest.fn();
    const wrapper = mount(
      <Search defaultValue="search text" onSearch={onSearch} />
    );
    wrapper.find('.anticon-search').simulate('click');
    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toBeCalledWith('search text', expect.objectContaining({
      type: 'click',
      preventDefault: expect.any(Function),
    }));
  });

  it('should trigger onSearch when click search button', () => {
    const onSearch = jest.fn();
    const wrapper = mount(
      <Search defaultValue="search text" enterButton onSearch={onSearch} />
    );
    wrapper.find('Button').simulate('click');
    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toBeCalledWith('search text', expect.objectContaining({
      type: 'click',
      preventDefault: expect.any(Function),
    }));
  });

  it('should trigger onSearch when click search button with text', () => {
    const onSearch = jest.fn();
    const wrapper = mount(
      <Search defaultValue="search text" enterButton="button text" onSearch={onSearch} />
    );
    wrapper.find('Button').simulate('click');
    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toBeCalledWith('search text', expect.objectContaining({
      type: 'click',
      preventDefault: expect.any(Function),
    }));
  });

  it('should trigger onSearch when click search button with customize button', () => {
    const onSearch = jest.fn();
    const wrapper = mount(
      <Search defaultValue="search text" enterButton={<Button>antd button</Button>} onSearch={onSearch} />
    );
    wrapper.find('Button').simulate('click');
    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toBeCalledWith('search text', expect.objectContaining({
      type: 'click',
      preventDefault: expect.any(Function),
    }));
  });

  it('should trigger onSearch when click search button of native', () => {
    const onSearch = jest.fn();
    const wrapper = mount(
      <Search defaultValue="search text" enterButton={<button type="button">antd button</button>} onSearch={onSearch} />
    );
    wrapper.find('button').simulate('click');
    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toBeCalledWith('search text', expect.objectContaining({
      type: 'click',
      preventDefault: expect.any(Function),
    }));
  });

  it('should trigger onSearch when press enter', () => {
    const onSearch = jest.fn();
    const wrapper = mount(
      <Search defaultValue="search text" onSearch={onSearch} />
    );
    wrapper.find('input').simulate('keydown', { key: 'Enter', keyCode: 13 });
    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toBeCalledWith('search text', expect.objectContaining({
      type: 'keydown',
      preventDefault: expect.any(Function),
    }));
  });
});
