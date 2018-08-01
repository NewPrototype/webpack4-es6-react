import React from 'react';
import { Avatar,Badge } from 'antd';

import './Header.styl';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="header">
      <Badge count={1}><Avatar shape="square" icon="user" /></Badge>
      </div>
    );
  }

  componentWillMount() { }
  componentDidMount() { }
  componentWillReceiveProps(nextProps) { }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) { }
  componentDidUpdate(prevProps, prevState) { }
  componentWillUnmount() { }
}

export default Header;
