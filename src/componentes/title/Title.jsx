import React from 'react';
import "./title.css";

export default function Title({tit, des }) {
  return (
    <div className='title'>
        <h1> {tit} </h1>
        <p> {des} </p>
    </div>
  )
}
