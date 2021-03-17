import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import ButtonComponent from './Button';
import Phone from './Phone.png';
import Pencil from './Pencil.png';
import ModalEdit from './ModalEdit';

export default function NewCard(props) {
  const [modalShow,
    setModalShow] = React.useState(false);

  return (

    <Card className="card" key={props.contactname}>
      <ButtonComponent
        className="button-pencil"
        variant="outline-dark"
        label={< img src = {Pencil} />}
        onClick={() => setModalShow(true)}/>
      <ModalEdit
        show={modalShow}
        onHide={() => setModalShow(false)}
        key={props.contactname}
        contactname={props.contactname}
        contactphone={props.contactphone}/>
      <Card.Img
        className="card-image"
        variant="top"
        src={`https://picsum.photos/id/${Math.floor(Math.random() * 100)}/200/200`}/>
      <Card.Body>
        <Card.Title>{props.contactname}</Card.Title>
        <Card.Text>
          {props.contactphone}
        </Card.Text>
        <ButtonComponent
          href={`tel:${props.contactphone}`}
          variant="success"
          label={< img src = {Phone} />}/>
      </Card.Body>

    </Card>

  )

}
