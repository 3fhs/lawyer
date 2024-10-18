import React from 'react';
import "./title.css";

export default function Title({tit, des, styleForm }) {
  return (
    <div className='title' style={styleForm}>
        <h1> {tit} </h1>
        <div className='div-button'> {des} 
          <span className='la'> LA </span>
          <span className='wy'> WY </span>
          <span className='er'> ER </span>
        </div>
    </div>
  )
}
