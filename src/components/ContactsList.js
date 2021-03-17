import React, {Component, useState} from 'react';
import ButtonComponent from './Button';
import UserName from './UserName'
import Cards from './Cards';
import ModalComponent from './Modal';
import {Container} from 'react-bootstrap';

export default function ContactsList() {
  const [modalShow,
    setModalShow] = React.useState(false);

  return (
    <div className="section-outer">
      <div className="section-inner">
        <div className="contacts-list-main">
          <div className="contacts-list-top">
            <UserName/>
            <div classname="contacts-list-buttons">
              <ButtonComponent
                variant="dark"
                label="New Contact"
                onClick={() => setModalShow(true)}/>{' '}

              <ButtonComponent
                variant="dark"
                label="Logout"
                onClick={function () {
                sessionStorage.removeItem('user');
                document
                  .location
                  .reload();
              }}/>
            </div>
          </div>

          <ModalComponent show={modalShow} onHide={() => setModalShow(false)}/>

          <Container className="container">
            <Cards/>

          </Container>

        </div>
      </div>
    </div>

  )

}