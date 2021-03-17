import React from 'react';
import NewCard from './NewCard';

export default function Cards(props) {
 

  return (props.array.sort().map((item) => 
  <NewCard contactname={item[0]} contactphone={item[1]} id={item[0]}/>))

}

//Object.entries(localStorage)