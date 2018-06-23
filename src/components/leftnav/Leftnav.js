import React from 'react';
import './Leftnav.styl';

class Leftnav extends React.Component {

constructor(props) {
	super(props);
	this.state = {
	};
}

render() {
  return (
		<div className="leftnav">
			component leftnav
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

export default Leftnav;
