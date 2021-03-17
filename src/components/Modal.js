import {Button, Modal, Container, Row} from 'react-bootstrap';
import ButtonComponent from './Button';
import React, {Component} from 'react';

export default class ModalComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contactName: '',
      contactPhone: ''
    };
    this.handleUserInput_contactName = this
      .handleUserInput_contactName
      .bind(this);
    this.handleUserInput_contactPhone = this
      .handleUserInput_contactPhone
      .bind(this);
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  
  }

  handleUserInput_contactName(e) {
    this.setState({contactName: e.target.value});
  }

  handleUserInput_contactPhone(e) {
    this.setState({contactPhone: e.target.value});
  }

  handleSubmit() {
    localStorage.setItem(this.state.contactName, this.state.contactPhone);
    this.setState({contactName: '',
                  contactPhone: ''});
    document.location.reload();
    // localStorage.setItem(a + '_contactPhone', this.state.contactPhone);
    // localStorage.clear();
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Modal
            {...this.props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                New contact
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <form>
                  <input
                    value={this.state.contactName}
                    onChange={this.handleUserInput_contactName}
                    type="text"
                    placeholder="Contact Name"/>
                  <br/>
                  <input
                    value={this.state.contactPhone}
                    onChange={this.handleUserInput_contactPhone}
                    type="text"
                    placeholder="Contact Phone"/>
                  <br/><br/>
                  <ButtonComponent
                    onClick={this.handleSubmit}
                    size="md"
                    variant="success"
                    label="Save"
                    type="submit"/>

                </form>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        </Row>
      </Container>
    )
  }
}