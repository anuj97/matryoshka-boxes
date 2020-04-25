import React from 'react';
import './PlayGround.css';
import Draggable from 'react-draggable';

class PlayGround extends React.Component {
  constructor (props) {
    super(props)
    this.createBox = this.createBox.bind(this)
    this.state = {
      boxes: 1
    }
  }

  getChildBox(currBoxNum, totalBoxes) {
    if (currBoxNum >= totalBoxes) {
      return null;
    }

    return <Box 
              boxNum={currBoxNum}
              style={this.dims[currBoxNum]}>
                {this.getChildBox(currBoxNum + 1, totalBoxes)}
            </Box>
  }

  createBox() {
    this.setState({
      boxes: this.state.boxes + 1
    });

    this.dims.unshift({
      height: this.dims[0].height + 75,
      width: this.dims[0].width + 75
    })
  };

  dims = [
    {
      height: 150,
      width: 150
    },
  ]

  render () {
    return (
      <div id="playground">
          <Box 
            style={this.dims[(this.currBoxNum -1) || 0 ]} 
            boxNum={this.currBoxNum}>
            {this.getChildBox(1, this.state.boxes)}
          </Box>
        <AddParentButton clickHandler={this.createBox}/>
      </div>
    );
  }
}

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

class AddParentButton extends React.Component {

  render () {
    return (
      <div id="addParent">
        <button onClick={this.props.clickHandler}>Add Parent</button>
    </div>
    )
  }
}

export default PlayGround;
