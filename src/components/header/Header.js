import React from 'react';
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
        header
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
