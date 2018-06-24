import React from 'react';
import { hashHistory } from 'react-router';
import PropTypes from 'prop-types';

import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import './Leftnav.styl';

const router = [
  { title: '首页', key: '/home', childRouter: [] },
  {
    title: '多路由', key: 'homes', childRouter: [
      { title: '测试', key: '/test' },
    ]
  },
]

class LeftNav extends React.Component {
  constructor(props,context) {
    super(props,context);
    this.context.router;
  }


  handleClick = (e) => {
    // console.log(e,'---');
    let path='';
    e.keyPath.reverse();
    for(var i=0;i<e.keyPath.length;i++){
      path+=e.keyPath[i];
    }
    hashHistory.push(path)
  }

  render() {
    return (
      <div className="leftnav">
        <Menu
          onClick={this.handleClick}
          style={{ width: 180 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          {
            router.map((value, index) => {
              if (value.childRouter.length > 0) {
                return <SubMenu key={value.key} title={<span><Icon type="setting" /><span>{value.title}</span></span>}>
                  {
                    value.childRouter.map((item, i) => {
                      return <Menu.Item key={item.key}>{item.title}</Menu.Item>
                    })
                  }
                </SubMenu>
              } else {
                return <Menu.Item key={value.key}>{value.title}</Menu.Item>
              }
            })
          }
        </Menu>
      </div>
    );
  }

  componentWillMount() { }
  componentDidMount() { }
  componentWillReceiveProps(nextProps) { }
  shouldComponentUpdate(nextProps, nextState) { return true; }
  componentWillUpdate(nextProps, nextState) { }
  componentDidUpdate(prevProps, prevState) { }
  componentWillUnmount() { }
}
export default LeftNav;
