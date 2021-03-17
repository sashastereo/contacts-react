import React, {Component} from 'react';

import Button from 'react-bootstrap/Button';

export default class ButtonComponent extends Component {

  render() {
    return (

      <Button
        href={this.props.href}
        onClick={this.props.onClick}
        variant={this.props.variant}
        size="lg">{this.props.label}
      </Button>

    )
  }
}
