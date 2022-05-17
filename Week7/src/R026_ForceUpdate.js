import React, {Component} from 'react';

class R026_ForceUpdate extends Component {
  construct (props) {
    super(props);
    this.state = {
      StateString : 'react',
    }
  }

  StateChange = () => {
    this.state.StateString = '리액트';
    this.forceUpdate();
  }

  render() {
    return (
      <div style={{padding : "0px"}}>
        <button onClick={(e) => this.Statechange('direct', e)}>
        state 직접 변경</button><br/>
        [state 변경하기] StateString : {this.state.StateString}
      </div>
    )
  }
}