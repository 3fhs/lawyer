import React from 'react';
import "./form.css";
import Title from '../../componentes/title/Title';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <>
    <section>
        <div className="register">
        <Title tit=" تسجيل الدخول للموقع "/>
            <form>
            <div class="form-control">
                <input type="text" placeholder=" اسمك " required/>
            </div>
            <div class="form-control">
                <input type="email" placeholder=" الايميل " required/>
            </div>
            <div class="form-control">
                <input type="password" placeholder=" كلمة السر " required/>
            </div>
            <button type="submit" class="btn-click"> انشاء حساب </button>
            </form>
            <div class="register-link">
            <p> اذا كنت مسجلا بالفعل <Link to="/login"> من فضلك سجل دخولك من هنا </Link></p>
            </div>
        </div>
    </section>
    </>
  )
}
