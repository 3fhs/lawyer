import React from 'react';
import './kindslaw.css';
import kinds from '../../Data';
import { Link } from 'react-router-dom';
import Title from '../title/Title';

function KindsLaw() {
  return (
    <div className='law'>
      <Title tit=" الاقسام القانونية " des=" الاقسام القانونية التى يعمل عليها مكتبنا و نقدم خدماتها بكفاءة مهنية عالية "/>
        <div className='law-card'>
            {kinds.lawport.map(law => (
                    <div className='card' key={law.id}>
                        <img src={law.image} alt='logo-icon'/>
                        <h2> {law.الاسم} </h2>
                        <p> {law.قسم} </p>
                        <Link to={`/port/${law.id}`}><i className="bi bi-arrow-right"></i></Link>
                    </div>
            ) 
            )}
        </div>
    </div>
  )
}

export default KindsLaw