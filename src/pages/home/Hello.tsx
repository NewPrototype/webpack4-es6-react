import * as React from 'react';


interface Props {  
  compiler: boolean;
}



// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<Props, {}> {
  render() {
    return (
      <h1>
        Hello from {this.props.compiler} 
      </h1>
    );
  }
}
