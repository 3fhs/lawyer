import React from 'react';
import './team.css';
import kinds from '../../Data';
import { Link } from 'react-router-dom';

export default function Team() {
  return (
    <div className='team'>
        <div className='team-title'>
            <h1> السادة اعضاء المكتب </h1>
        </div>
        <div className='team-card'>
            {kinds.team.map(lawyer => (
                    <div className='card' key={lawyer.id}>
                        <Link to={`/team/${lawyer.id}`}>
                           <img src={lawyer.image} alt='logo-icon'/>
                        </Link>
                        <h2> أ / {lawyer.name} </h2>
                        <p> {lawyer.work} </p>
                        <div className='icon'>
                        <i className="bi bi-star-fill"></i>
                        </div>
                    </div>
            ) 
            )}
        </div>
    </div>
  )
}
