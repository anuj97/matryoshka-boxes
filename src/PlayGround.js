import React from "react";
import "./PlayGround.css";
import Box from "./components/Box.js";
import AddParentButton from "./components/AddParentButton.js";

class PlayGround extends React.Component {
  constructor(props) {
    super(props);
    this.createBox = this.createBox.bind(this);
    this.getChildBox = this.getChildBox.bind(this);
    this.state = {
      boxes: 1,
      initialPos: [{ x: 0, y: 0 }],
    };
  }

  getChildBox(currBoxNum, totalBoxes) {
    if (currBoxNum >= totalBoxes) {
      return null;
    }

    return (
      <Box
        updatePos={this.updateBox}
        boxNum={currBoxNum}
        style={this.dims[currBoxNum]}
        pos={this.state.initialPos[currBoxNum]}
      >
        {this.getChildBox(currBoxNum + 1, totalBoxes)}
      </Box>
    );
  }

  createBox() {
    this.dims.unshift({
      height: this.dims[0].height + 75,
      width: this.dims[0].width + 75,
    });

    const elements = document.getElementsByClassName("dragThis");
    const eles = [].slice.call(elements).map((ele) => {
      // debugger;
      const p = ele.getBoundingClientRect();
      return {
        x: p.left,
        y: p.top,
      };
    });
    // debugger;
    eles.unshift({ x: eles[0].x - 1, y: eles[0].y - 27 });

    const initialPos = eles.map((elePos, index) => {
      return {
        x: index > 0 ? elePos.x - eles[index - 1].x -1 : elePos.x,
        y: index > 0 ? elePos.y - eles[index - 1].y - 27 : elePos.y,
        // x: 0, y: 0
      };
    });

    this.setState({
      boxes: this.state.boxes + 1,
      initialPos,
    });
  }

  updateBox = (boxNo, pos) => {
    const tempPos = [...this.state.initialPos];
    tempPos[boxNo] = pos;
    this.setState({
      ...this.state,
      initialPos: tempPos,
    });
  };

  dims = [
    {
      height: 150,
      width: 150,
    },
  ];

  initialPos = [];

  render() {
    return (
      <div id="playground">
        <Box
          updatePos={this.updateBox}
          style={this.dims[0]}
          boxNum={0}
          pos={this.state.initialPos[0]}
        >
          {this.getChildBox(1, this.state.boxes)}
        </Box>
        <AddParentButton clickHandler={this.createBox} />
      </div>
    );
  }
}

export default PlayGround;
