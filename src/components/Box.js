import React from 'react';
import Draggable from 'react-draggable';

class Box extends React.Component {

    constructor(props) {
      super(props);
      this.updatePos = this.updatePos.bind(this);
    }

    updatePos(boxNo, pos) {
      this.props.updatePos(boxNo, pos);
    }

    render() {
      return (
        <Draggable
        handle={`.handler-${this.props.boxNum}`}
        bounds="parent"
        onStop={(a, b) => {
          this.updatePos(this.props.boxNum, {x: b.x, y: b.y});
        }}
        position={this.props.pos}
        >
          <div className="dragThis" style={this.props.style}>
            <div className={`handler-${this.props.boxNum} title`}>This is draggable.</div>
            <div className="emptySpace" style={{height:this.props.style.height-25}}>
              {this.props.children} 
            </div>
          </div>
        </Draggable>
      )
    }
  }

  export default Box;