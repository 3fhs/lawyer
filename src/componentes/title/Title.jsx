import React from 'react';
import "./title.css";

export default function Title({tit, des, styleForm }) {
  return (
    <div className='title' style={styleForm}>
        <h1> {tit} </h1>
        <p> {des} </p>
        <span> LAWYER </span>
    </div>
  )
}
