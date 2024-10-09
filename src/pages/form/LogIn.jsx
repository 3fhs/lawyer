import React from 'react';
import "./form.css";
import Title from '../../componentes/title/Title';
import { Link } from 'react-router-dom';

export default function LogIn() {
  return (
    <>
    <section className="sec-form">
        <div className="login">
            <Title tit=" تسجيل الدخول للموقع "/>
            <form>
            <div className="form-control">
                <input type="text" placeholder="Username" required/>
            </div>
            <div className="form-control">
                <input type="password" placeholder="Password" required/>
            </div>
            <button type="submit" className="btn-click"> دخول </button>
            </form>
            <div className="register-link">
            <p> اذا لم تكن مسجلا من قبل <Link to="/register"> من فضلك انشاء حساب </Link></p>
            </div>
        </div>
    </section>
    </>
  )
}
