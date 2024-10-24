import React from 'react';
import "./form.css";
import Title from '../../componentes/title/Title';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <>
    <section className="sec-form">
        <div className="register">
        <Title tit=" انشاء حساب داخل الموقع " styleForm={styleForm}/>
            <form>
            <div className="form-control">
                <input type="text" placeholder=" اسمك " required/>
            </div>
            <div className="form-control">
                <input type="email" placeholder=" الايميل " required/>
            </div>
            <div className="form-control">
                <input type="password" placeholder=" كلمة السر " required/>
            </div>
            <button type="submit" className="btn-click"> انشاء حساب </button>
            </form>
            <div className="register-link">
            <p> اذا كنت مسجلا بالفعل <Link to="/login"> من فضلك سجل دخولك من هنا </Link></p>
            </div>
        </div>
    </section>
    </>
  )
}

const styleForm = {
    right: "0px",
    transform: "translateX(0)",
  }