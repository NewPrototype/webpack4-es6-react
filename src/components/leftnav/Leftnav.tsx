import as*React from 'react';
// import { hashHistory } from 'react-router';
// import PropTypes from 'prop-types';


import { Link } from 'react-router-dom';


import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import './Leftnav.styl';

const router = [
  { title: '首页', key: '/home' },
  { title: '错误', key: '/notfound', },
  {
    title: '多路由', key: '/content',
  },
]
class LeftNav extends React.Component {
  constructor(props: any, context: any) {
    super(props, context);
  }


  handleClick = () => {
    // // console.log(e,'---');
    // let path='';
    // e.keyPath.reverse();
    // for(var i=0;i<e.keyPath.length;i++){
    //   path+=e.keyPath[i];
    // }
    // hashHistory.push(path)
  }

  render() {
    return (<div>123</div>);
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
