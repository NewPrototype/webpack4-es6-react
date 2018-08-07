import React from 'react';
import './Home.styl';

import {Hello} from './Hello'


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="home">
        <Hello compiler={123}/>
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

export default Home;
