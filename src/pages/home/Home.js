import React from 'react';
import './Home.styl';

class Home extends React.Component {

constructor(props) {
	super(props);
	this.state = {
	};
}

render() {
  return (
		<div className="home">
			component home
		</div>
	);
}
	
componentWillMount() {}
componentDidMount() {}
componentWillReceiveProps(nextProps) {}
shouldComponentUpdate(nextProps, nextState) { return true; }
componentWillUpdate(nextProps, nextState) {}
componentDidUpdate(prevProps, prevState) {}
componentWillUnmount() {}
}

export default Home;
