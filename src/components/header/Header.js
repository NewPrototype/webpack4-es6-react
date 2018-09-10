import React from 'react';
import { Steps } from 'antd';
const Step = Steps.Step;


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
        <Steps>
          <Step status="finish" title="Login"  />
          <Step status="finish" title="Verification"  />
          <Step status="process" title="Pay"  />
          <Step status="wait" title="Done"  />
        </Steps>
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
