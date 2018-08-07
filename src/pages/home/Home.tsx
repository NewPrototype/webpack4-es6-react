import * as React from 'react';
import './Home.styl';

import { Hello } from './Hello';

interface Props {

}

class Home extends React.Component<Props, {}> {
  render() {
    return (
      <Hello compiler={123} />
    )
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

export default Home;
