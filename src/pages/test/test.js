import React from 'react';
import './test.styl';

class Test extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="test">
        component test
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

export default Test;
