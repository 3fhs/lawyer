import React from 'react';
import "./form.css";
import Title from '../../componentes/title/Title';
import { Link } from 'react-router-dom';

export default function LogIn() {
  return (
    <>
    <section>
        <div className="login">
            <Title tit=" تسجيل الدخول للموقع "/>
            <form>
            <div class="form-control">
                <input type="text" placeholder="Username" required/>
            </div>
            <div class="form-control">
                <input type="password" placeholder="Password" required/>
            </div>
            <button type="submit" class="btn-click"> دخول </button>
            </form>
            <div class="register-link">
            <p> اذا لم تكن مسجلا من قبل <Link to="/register"> من فضلك انشاء حساب </Link></p>
            </div>
        </div>
    </section>
    </>
  )
}
