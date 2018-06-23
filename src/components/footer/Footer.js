import React from 'react';
import './Footer.styl';

class Footer extends React.Component {

constructor(props) {
	super(props);
	this.state = {
	};
}

render() {
  return (
		<div className="footer">
			component footer
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

export default Footer;
