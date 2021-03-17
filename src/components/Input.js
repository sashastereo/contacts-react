import React, {Component} from 'react'

export default class Input extends Component {
  render() {
    return (
      <div>
        <input
          id={this.props.id}
          onChange={this.props.onChange}
          type="text"
          value={this.props.value}
          placeholder={this.props.placeholder}/>
      </div>
    )
  }
}
