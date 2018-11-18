import React from 'react';
import { mount } from 'enzyme';
import Avatar from '..';

describe('Avatar Render', () => {
  it('Render long string correctly', () => {
    const wrapper = mount(<Avatar>TestString</Avatar>);
    const children = wrapper.find('.ant-avatar-string');
    expect(children.length).toBe(1);
  });

  it('should render fallback string correctly', () => {
    const div = global.document.createElement('div');
    global.document.body.appendChild(div);

    const wrapper = mount(<Avatar src="http://error.url">Fallback</Avatar>, { attachTo: div });
    wrapper.instance().setScale = jest.fn(() => wrapper.instance().setState({ scale: 0.5 }));

    wrapper.find('img').simulate('error');

    const children = wrapper.find('.ant-avatar-string');
    expect(children.length).toBe(1);
    expect(children.text()).toBe('Fallback');
    expect(wrapper.instance().setScale).toBeCalled();
    expect(div.querySelector('.ant-avatar-string').style.transform).toContain('scale(0.5)');

    wrapper.detach();
    global.document.body.removeChild(div);
  });

  it('should handle onError correctly', () => {
    const LOAD_FAILURE_SRC = 'http://error.url';
    const LOAD_SUCCESS_SRC = 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png';

    const div = global.document.createElement('div');
    global.document.body.appendChild(div);

    class Foo extends React.Component {
      state = {
        src: LOAD_FAILURE_SRC,
      }

      handleImgError = () => {
        this.setState({
          src: LOAD_SUCCESS_SRC,
        });
        return false;
      }

      render() {
        const { src } = this.state;
        return <Avatar src={src} onError={this.handleImgError} />;
      }
    }

    const wrapper = mount(<Foo />, { attachTo: div });
    // mock img load Error, since jsdom do not load resource by default
    // https://github.com/jsdom/jsdom/issues/1816
    wrapper.find('img').simulate('error');

    expect(wrapper.find(Avatar).instance().state.isImgExist).toBe(true);
    expect(div.querySelector('img').getAttribute('src')).toBe(LOAD_SUCCESS_SRC);

    wrapper.detach();
    global.document.body.removeChild(div);
  });
});
