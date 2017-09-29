/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import SideNav from './SideNav';

describe('drawer', () => {
  let instanceToRender;
  const onItemSelected = jest.fn();
  const onClick = jest.fn();

  beforeEach(() => {
    onItemSelected.mockClear();
    onClick.mockClear();

    instanceToRender = (
      <SideNav
        onItemSelected={navId => {
          onItemSelected(navId);
        }}
      >
        <SideNav.Item
          id="home"
          className="home"
          onClick={navId => onClick(navId)}
          targetUrl="/home"
        >
          Home
        </SideNav.Item>
        <SideNav.Item id="cart" className="cart">
          Cart
        </SideNav.Item>
        <SideNav.Item
          id="external"
          className="external"
          targetUrl="http://www.google.com"
          isExternalLink
        >
          External Link
        </SideNav.Item>
        <SideNav.Item
          id="info"
          className="info"
          onClick={() => onClick()}
          isDisabled
        >
          Disabled
        </SideNav.Item>
      </SideNav>
    );
  });

  it('renders as expected', () => {
    const tree = renderer.create(instanceToRender).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('executes onItemSelected with the id of the nav item clicked', () => {
    const navInstance = mount(instanceToRender);
    const navItem = navInstance.find('.cart');

    navItem.simulate('click');
    expect(onItemSelected).toBeCalledWith('cart');
  });

  it('executes onClick when nav item clicked', () => {
    const navInstance = mount(instanceToRender);
    const navItem = navInstance.find('.home');

    navItem.simulate('click');
    expect(onClick).toBeCalledWith('home');
  });

  it('disabled item prevents onclick functions', () => {
    const navInstance = mount(instanceToRender);
    const navItem = navInstance.find('.info');

    navItem.simulate('click');
    expect(onClick).not.toBeCalled();
    expect(onItemSelected).not.toBeCalled();
  });
});
