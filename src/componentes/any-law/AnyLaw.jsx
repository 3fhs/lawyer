import React, { useEffect } from 'react';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import "./anylaw.css";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reportApi } from '../../redux/apiCalls/ReportApiCall';

export default function AnyLaw() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const {report} = useSelector(state => state.report);
    
    useEffect(() => {
      dispatch(reportApi())
    }, [dispatch])

    // تأكد من تحويل id إلى نفس النوع إذا كانت القيم في lawport أرقام
    const selection = report?.find(fil => fil.id === +id);

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    return (
        <div>
            <NavBar />
            {selection ? (
                <section style={{backgroundImage:`url(${selection?.image})`}}>
                    <div className='any-law' style={{backgroundImage:`url(${selection?.image})`}}>
                        <div className="any-law-info">
                            <h1> {selection?.name} </h1>
                            <ul>
                                <li> {selection?.port} </li>
                                <li> {selection?.info.one} </li>
                                <li> {selection?.info.two} </li>
                                <li> {selection?.info.three} </li>
                            </ul>
                        </div>
                    </div>
                </section>
            ) : (
                <div style={{height:"50vh", color:'white',fontSize:'50px',fontWeight:'bold',display:'flex',alignItems:'center',justifyContent:'center'}}>Loading ...</div>
            )}
            <Footer />
        </div>
    );
}
