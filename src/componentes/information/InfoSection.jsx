import React, {useEffect} from 'react';
import './infoSection.css';
import robe from '../../image/infologo.jpg';
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css'; // استيراد ملفات CSS الخاصة بـ AOS

function InfoSection() {

    useEffect(() => {
        AOS.init({
          duration: 2000, // مدة الحركة (بالملي ثانية)
        });
      }, []); // لتفعيل AOS مرة واحدة عند تحميل المكون

  return (
    <section className='section-help'>
        <div className='help-all' data-aos="fade-left">
            <div className='help' data-aos="fade-down">
                <h2> الوضع  </h2>
                <p>  نحمد الله على نعمه و فضله , نسال الله التوفيق دائما و نراعى مصالح عملائنا .
                     نجد فيما يعرض علينا من امور و تشغلنا هموم موكلينا قبل ان تشغلهم . قبل ان يسال احد نحن نجيب فهذه مهنتنا و هذا واجبنا.
                </p>
            </div>
            <div className='help' data-aos="fade-up">
                <h2> خبرتنا  </h2>
                <p> لدينا خبرات فى المجالات القانونية و العملية . اجيال تسلم و تعلم اجيال و نفيد و نستفيد نعاصر التطور بكل صوره و نتذكر الماضى بحلوه و مره. </p>
            </div>
            <div className='help' data-aos="fade-down">
                <h2> فريقنا </h2>
                <p> تتكون المؤسسة من عدد كافى من السادة المحامين الاكفاء اصحاب خبرات رفيعة و ممارسة فعلية لكافة الاعمال مهمتهم هى اداء الاعمال بكفاءة و اخلاص  </p>
            </div>
        </div>
        <div className='whose-help' data-aos="fade-right">
            <img src={robe} alt='my-name'/>
            <div className='how-help'>
                <h1> نحن نعلم ما هى افضل الطرق لحل المشكلات ! </h1>
                <p> لكى نستطيع ان نحل اى مشكلة امامنا علينا اولا فى تفكيكها لقطع صغيرة و نتناقش ثم نحل كل قطعة من المشكلة على حدى بحيث يتم ازالة تلك العقبة نهائيا من طريقك و تستطيع اكمال حياتك  </p>
                <div className='me'>
                    <h3> أ / محمد عبد الغنى  </h3>
                    <p> المحامى </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default InfoSection