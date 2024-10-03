import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import kinds from '../../Data';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import "./team.css";

export default function LinkTeam() {

    const {id} = useParams();

    const selection = kinds.team.find(fil => fil.id === +id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

  return (
    <div>
        <NavBar/>
        <section className='one-of-theteam'>
            <div className="link-team">
                <img src={selection.image} alt={selection.name}/>
                <div className="link-team-info">
                    <h1> السيد الاستاذ / {selection.name} </h1>
                    <ul>
                        <h2> الخبرات </h2>
                        <li>{selection.خبراته.اول}</li>
                        <li>{selection.خبراته.ثانى}</li> 
                    </ul>
                    <ul>
                        <h2> الشهادات </h2>
                        <li>{selection.شهاداته.اول}</li>
                        <li>{selection.شهاداته.ثانى}</li>
                    </ul>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}
