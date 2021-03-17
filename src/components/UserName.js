import React, {Component} from 'react';

export default class UserName extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: sessionStorage.getItem('user')
    };
  }

  render() {
    return (
      <div>
        <h2>Hello, {this.state.userName}</h2>
      </div>
    )
  }
}