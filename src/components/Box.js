import React from 'react';
import Draggable from 'react-draggable';

class Box extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
  
      }
    }
  
    render() {
      return (
        <Draggable
        handle={`.handler-${this.props.boxNum}`}
        bounds="parent"
        >
          <div className="dragThis" style={this.props.style}>
            <div className={`handler-${this.props.boxNum} title`}>This is draggable.</div>
            <div className="emptySpace">
              {this.props.children} 
            </div>
          </div>
        </Draggable>
      )
    }
  }

  export default Box;