import React, { useRef, useState } from 'react';
import NavBar from '../../componentes/navBar/NavBar';
import Footer from '../../componentes/footer/Footer';
import "./contact.css";
import Title from "../../componentes/title/Title";
import emailjs from '@emailjs/browser';

export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serverId = "service_l7uzphh";
    const templeteId = "template_ssvp6ku";
    const publicKey = "Hq5usaIxsHgmcterJ";

    emailjs
      .sendForm( serverId, templeteId, form.current, publicKey)
      .then(
        () => {
          console.log('SUCCESS!');

        // إعادة تعيين الحقول بعد الإرسال الناجح
        setName("");
        setEmail("");
        setText("");
        
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
        <NavBar/>
        <section>
          <Title tit=" تستطيع مراسلتنا عن طريق البريد " des=" مع تحياتى لكم أ / محمد عبد الغنى حسين "/>
          <div className="contact-me">
            <form ref={form} onSubmit={sendEmail}>
              <label htmlFor="name">الاسم:</label>
              <input type="text" id="name" name="name" placeholder='من فضلك اكتب اسمك' required
                value={name} onChange={(e) => setName(e.target.value)}/>

              <label htmlFor="email">البريد الإلكتروني:</label>
              <input type="email" id="email" name="email" placeholder='من فضلك اكتب بريدك' required
                value={email} onChange={(e) => setEmail(e.target.value)}/>

              <label htmlFor="message">رسالتك:</label>
              <textarea id="message" name="message" placeholder='من فضلك اكتب رسالتك و استفسارك لنا' required
                value={text} onChange={(e) => setText(e.target.value)}></textarea>

              <input className='btn-click' type="submit" value="إرسال"/>
            </form>
          </div>
        </section>
        <Footer/>
    </>
  )
}
