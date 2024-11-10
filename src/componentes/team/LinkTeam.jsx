import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import "./team.css";
import { useDispatch, useSelector } from 'react-redux';
import { teamApi } from '../../redux/apiCalls/TeamApiCall';
import imageSec from '../../image/office-lawyer.webp';

export default function LinkTeam() {

    const {id} = useParams();
    const dispatch = useDispatch();
    const {team} = useSelector(state => state.team);
  
    useEffect(() => {
      dispatch(teamApi())
    }, [dispatch])

    const selection = team?.find(fil => fil.id === +id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

  return (
    <div>
        <NavBar/>
        {selection ?( 
        <section style={{backgroundImage:`url(${imageSec})`, display:'flex',alignItems:'center', justifyContent:'center'}}>
            <div className="link-team">
                <img src={selection?.image} alt={selection?.name}/>
                <div className="link-team-info">
                    <h1> السيد/ة الاستاذ/ة : {selection?.name} </h1>
                    <p> {selection?.deg} </p>
                    <p> {selection?.des} </p>
                    <ul>
                        <h2> الشهادات </h2>
                        <li>{selection?.edu.one}</li>
                        <li>{selection?.edu.two}</li> 
                    </ul>
                    <ul>
                        <h2> الخبرات </h2>
                        <li>{selection?.expr.one}</li>
                        <li>{selection?.expr.two}</li>
                    </ul>
                </div>
            </div>
        </section>
        )  :  (
            <div style={{height:"50vh", color:'white',fontSize:'50px',fontWeight:'bold',display:'flex',alignItems:'center',justifyContent:'center'}}>Loading ...</div>
        )
        }
        <Footer/>
    </div>
  )
}
