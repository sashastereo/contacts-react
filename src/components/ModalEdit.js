import {Button, Modal, Container, Row} from 'react-bootstrap';
import ButtonComponent from './Button';
import React, {Component} from 'react';
import Input from './Input';

export default class ModalEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newContactName: '',
      newContactPhone: '',
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
    this.handleDelete = this
      .handleDelete
      .bind(this);
    

  }


  handleCreation() {
    let arr = Object.entries(localStorage).sort();
  }


  handleUserInput_contactName(e) {
    this.setState({newContactName: e.target.value});
  }

  handleUserInput_contactPhone(e) {
    this.setState({newContactPhone: e.target.value});
  }

  handleSubmit() {
    localStorage.removeItem(this.props.contactname, this.props.contactphone);
    localStorage.setItem(this.state.newContactName, this.state.newContactPhone);
    document.location.reload();
    //localStorage.clear();
  }

  handleDelete() {
    localStorage.removeItem(this.props.contactname, this.props.contactphone);
    document.location.reload();
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
                Edit contact
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <form>
                 <Input id={this.props.contactname}
                        onChange={this.handleUserInput_contactName}
                        value={this.state.newContactName}
                        placeholder={this.props.contactname}/>
                  <br/>
                  <Input id={this.props.contactphone}
                        onChange={this.handleUserInput_contactPhone}
                        value={this.state.newContactPhone}
                        placeholder={this.props.contactphone}/>
                  <br/><br/>
                  <ButtonComponent
                    onClick={this.handleSubmit}
                    size="md"
                    variant="success"
                    label="Save"
                    type="submit"/>
                  <br/><br/>
                  <ButtonComponent
                    onClick={this.handleDelete}
                    size="md"
                    variant="danger"
                    label="Delete"
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
