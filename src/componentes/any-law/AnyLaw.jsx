import React, { useEffect } from 'react';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import Title from '../title/Title';
import kinds from '../../Data';
import "./anylaw.css";
import { useParams } from 'react-router-dom';

export default function AnyLaw() {

    const { id } = useParams();

    // تأكد من تحويل id إلى نفس النوع إذا كانت القيم في lawport أرقام
    const selection = kinds.lawport.find(fil => fil.id === Number(id));

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    return (
        <div>
            <NavBar />
            <section>
                <Title tit="عن هذا القانون" des="نبذة عن هذا القسم من القانون" />
                <div className='any-law'>
                    <div className="any-law-info">
                        <h1> {selection.الاسم} </h1>
                        <p>- {selection.قسم} </p>
                        <div className='center-info'>
                            <img src={selection.image} alt={selection.الاسم} />
                            <span>- {selection.نبذة.اولى} </span>
                        </div>
                        <span>- {selection.نبذة.الثانية} </span>
                        <span>- {selection.نبذة.الثالثة} </span>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
