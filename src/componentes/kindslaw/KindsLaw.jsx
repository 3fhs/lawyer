import React from 'react';
import './kindslaw.css';
import kinds from '../../Data';
import { Link } from 'react-router-dom';

function KindsLaw() {
  return (
    <div className='law'>
        <div className='law-title'>
            <h1> الاقسام القانونية </h1>
            <p> الاقسام القانونية التى يعمل عليها مكتبنا و نقدم خدماتها بكفاءة مهنية عالية  </p>
        </div>
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
        <button className='btn-click'> لرؤية جميع الاقسام </button>
    </div>
  )
}

export default KindsLaw