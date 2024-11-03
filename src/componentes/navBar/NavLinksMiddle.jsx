import React from 'react';
import "./navBar.css";

function NavLinksMiddle({information}) {

  return (
    <ul className='nav-de'>
        <li> <i className="bi bi-geo-alt"></i> {information.address} </li>
        <li> <i className="bi bi-envelope"></i> {information.email} </li>
        <li> <i className="bi bi-telephone"></i>  {information.phone} </li>
    </ul>
  )
}

export default NavLinksMiddle