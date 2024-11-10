import React, { useState } from 'react';
import NavBar from '../../componentes/navBar/NavBar';
import Footer from '../../componentes/footer/Footer';
import visa from "../../image/VISA.png";
import "./consultations.css";
import Title from "../../componentes/title/Title";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// تحميل Stripe API Key
const stripePromise = loadStripe("pk_test_51PHmc92KpLnwDYAcUuEEOkCWv0ZnpeMS0bdAblWXkeYKOCea1GXSnesbsSWVNYb7PQjKT4FtZNspfnXtXlgzBMIu00z2z5uvXx");

export default function Consultations() {
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handlePaymentClick = () => {
    setShowPaymentForm(true); // إظهار فورم الدفع عند الضغط على الدفع
  };

  return (
    <>
      <NavBar/>
        <section className="sec-section" >
          <Title tit=" وجه الينا استشارتك و سيتم الرد لاحقا "/>

          <div className='consultations-all'>
            <div className="consultations">
              <form className="consultation-form">
                <input type="text" name="name" placeholder="اكتب اسمك هنا" required/>
                <input type="email" name="email" placeholder="اكتب وسيلة التواصل" required/>
                <input type="number" name="phone" placeholder="رقم الواتس" required/>
                <select className="consultation-type" required>
                  <option value="family"> قانون الأحوال الشخصية </option>
                  <option value="business"> القانون التجاري </option>
                  <option value="employment"> قانون العمل </option>
                  <option value="real-estate"> القانون المدنى </option>
                  <option value="criminal"> القانون الجنائى </option>
                  <option value="violations"> المخالفات </option>
                  <option value="administrative"> القانون الادارى </option>
                </select>
                <textarea name="details" placeholder="اكتب تفاصيل مشكلتك القانونية" rows="5" required></textarea>
              </form>
            </div>
            
            <div className='all-buying'>
              <div className="buying">
                <h1> ثمن الاستشارة </h1>
                <div className="buying-info">
                  <div className="buying-check">
                    <i className="bi bi-check-circle"></i>
                    <span> عليك التسجيل اولا , ثم ملئ الفورم الذى امامك ثم اضغط على الدفع ثم ادفع لكى يتم الرد عليك </span>
                  </div>
                  <button onClick={handlePaymentClick}> أدفع 10 دولارات </button>
                </div>
              </div>
                {/* نموذج الدفع */}
                {showPaymentForm && (
              <div className="buying">
                  <Elements stripe={stripePromise}>
                    <div className="payment-form">
                      <PaymentForm />
                    </div>
                  </Elements>
              </div>
                )}

            </div>
          </div>
        </section>
      <Footer/>
    </>
  );
}

// مكون فورم الدفع باستخدام Stripe
function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);

    if (result.error) {
      console.error(result.error.message);
    } else {
      console.log('Received Stripe Token:', result.token);
      // هنا أرسل الـ token إلى السيرفر لمعالجة الدفع
    }
  };

  return (
    <form onSubmit={handleSubmit} className="stripe-payment-form">
      <div className="payment-cart">
        <img src={visa} alt='visa'/>
        <CardElement options={cardElementOptions} />
      </div>
      <button type="submit" disabled={!stripe}> أكمل الدفع </button>
    </form>
  );
}

const cardElementOptions = {
  style: {
    base: {
      color: "#fff",
      fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
      fontSize: "21px",
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};
