import React from 'react';
import Draggable from 'react-draggable';

class AddParentButton extends React.Component {

    render () {
      return (
        <div id="addParent">
          <button onClick={this.props.clickHandler}>Add Parent</button>
      </div>
      )
    }
}

export default AddParentButton;