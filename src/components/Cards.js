import React from 'react';
import {Card} from 'react-bootstrap';
import ButtonComponent from './Button';
import Phone from './Phone.png';
import Pencil from './Pencil.png';
import ModalEdit from './ModalEdit';
import NewCard from './NewCard';



export default function Cards() {
  const [modalShow,
    setModalShow] = React.useState(false);

  return (Object.entries(localStorage).sort().map((item) => <NewCard 
  contactname={item[0]}
  contactphone={item[1]}
  id={item[0]}/>
    


   )
    
   )

}








/*
export default function Cards() {
  const [modalShow,
    setModalShow] = React.useState(false);

  return (Object.entries(localStorage).sort().map((i) => <Card className="card" id={i[0]}>
    <ButtonComponent
      className="button-pencil"
      variant="outline-dark"
      label={< img src = {Pencil} />}
      onClick={() => setModalShow(true)}/>
    <ModalEdit key={i[0]}
      contactname={i[0]}
      contactphone={i[1]}
      show={modalShow}
      onHide={() => setModalShow(false)}/>
    <Card.Img
      className="card-image"
      variant="top"
      src={`https://picsum.photos/id/${Math.floor(Math.random() * 100)}/200/200`}/>
    <Card.Body>
      <Card.Title>{i[0]}</Card.Title>
      <Card.Text>
        {i[1]}
      </Card.Text>
      <ButtonComponent
        href={`tel:${i[1]}`}
        variant="success"
        label={< img src = {
        Phone
      } />}/>
    </Card.Body>

  </Card>))

}

*/