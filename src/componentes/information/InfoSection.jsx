import React from 'react';
import './infoSection.css';
import robe from '../../image/infologo.jpg';

function InfoSection() {
  return (
    <div className='section-help'>
        <div className='help-all'>
            <div className='help'>
                <h2> الوضع الحالى </h2>
                <p>  نحمد الله على نعمه و فضله , نسال الله التوفيق دائما و نراعى مصالح الناس . نجد فيما يعرض علينا من امور و تشغلنا هموم موكلينا قبل ان تشغلهم ز قبل ان يسال احد نحن نجيب فهذه مهنتنا و هذا واجبنا ز  </p>
            </div>
            <div className='help'>
                <h2> خبرتنا  </h2>
                <p> لدينا خبرات فى المجالات القانونية و العملية . اجيال تسلم و تعلم اجيال و نفيد و نستفيد نعاصر التطور بكل صوره و نتذكر الماضى بحلوه و مره . </p>
            </div>
            <div className='help'>
                <h2> فريقنا </h2>
                <p> تتكون المؤسسة من عدد كافى من السادة المحامين الاكفاء اصحاب خبرات رفيعة و ممارسة فعلية لكافة الاعمال مهمتهم هى اداء الاعمال بكفاءة و اخلاص  </p>
            </div>
        </div>
        <div className='whose-help'>
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
    </div>
  )
}

export default InfoSection