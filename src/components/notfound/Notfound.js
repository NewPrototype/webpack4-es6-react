import React from 'react';
import './Notfound.styl';

class Notfound extends React.Component {

constructor(props) {
	super(props);
	this.state = {
	};
}

render() {
  return (
		<div className="notfound">
			component notfound
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

export default Notfound;
