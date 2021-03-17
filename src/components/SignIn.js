import React, {Component} from 'react';
import ButtonComponent from './Button';


export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      isUserAuthenticated: false
    };
    this.handleUserInput = this
      .handleUserInput
      .bind(this);
    this.handleSubmit = this
      .handleSubmit
      .bind(this);

  }
  handleUserInput(e) {
    this.setState({userInput: e.target.value});
  }

  handleSubmit() {
    sessionStorage.setItem('user', this.state.userInput);
    this.setState({isUserAuthenticated: true});
    window
      .location
      .assign('/');
  }

  render() {
    return (
      <div className="section-outer">
        <div className="section-inner">
          <div className="signin">

            <h1 style={{
              textAlign: "center"
            }}>Sign In</h1>
            <br/>

            <div className="signin-input">
              <form>
                <input
                  value={this.state.userInput}
                  onChange={this.handleUserInput}
                  type="text"
                  placeholder="What's your name?"/>
                <div className="signin-button-container">
                  <ButtonComponent
                    className="btn-submit"
                    onClick={this.handleSubmit}
                    variant="success"
                    label="Submit"
                    type="submit"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    )
  }
}