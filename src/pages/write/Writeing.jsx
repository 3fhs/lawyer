import React, { useState } from 'react';
import NavBar from "../../componentes/navBar/NavBar";
import Footer from "../../componentes/footer/Footer";
import "./writeing.css";
import jsPDF from 'jspdf';
import Title from '../../componentes/title/Title';
import kinds from '../../Data'; // تأكد من أن المسار صحيح

export default function Writeing() {
    const [textAreaContent, setTextAreaContent] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [selectedContrato, setSelectedContrato] = useState(null); // تخزين العقد المحدد

    const handleImageClick = (contrato) => {
        if (contrato.text) {
            const combinedText = contrato.text.map(item =>
                Object.entries(item).map(([key, value]) => `${key}: ${value}`).join("\n")
            ).join("\n\n");
            setTextAreaContent(combinedText);
            setSelectedContrato(contrato); // تخزين العقد المحدد
            setIsEditing(true);
        }
    };

    const handlePdfDownload = (e) => {
        e.preventDefault();

        if (!selectedContrato) return; // تأكد من أن هناك عقد محدد

        const pdf = new jsPDF();
        const text = textAreaContent; // نص الـ <textarea>

        // إضافة النص إلى PDF
        pdf.text(text, 10, 10, {
            maxWidth: 190, // عرض النص في الصفحة
            align: 'right', // محاذاة النص لليمين
            fontSize: 12, // حجم الخط
            font: 'Amiri', // الخط العربي إذا كان متاحًا
        });

        pdf.save(`${selectedContrato.title}.pdf`); // حفظ الملف باسم العقد
    };

    return (
        <>
            <div>
                <NavBar />
                <div className="writing">
                    <Title tit=" نماذج الصيغ القانونية " des=" مجموعة متنوعة من النماذج و الصيغ القانونية " />
                    
                    <div className="write-show">
                        {/* تحقق من وجود البيانات قبل استخدام map */}
                        {kinds.data && kinds.data[0].buying && kinds.data[0].buying.map((contrato, index) => (
                            <button key={index} className="btn" onClick={() => handleImageClick(contrato)}>
                                {contrato.image && <img src={contrato.image} alt={contrato.title} />}
                                <h1>{contrato.title}</h1>
                            </button>
                        ))}
                    </div>
                    
                    {isEditing && (
                        <div className="write-text">
                            {/* محتوى يتم تحويله إلى PDF */}
                            <div id="pdf-content" style={{ direction: "rtl", textAlign: "right", fontFamily: "'Amiri', serif" }}>
                                <textarea
                                    value={textAreaContent}
                                    onChange={(e) => setTextAreaContent(e.target.value)}
                                    rows="20" 
                                    cols="100"
                                    style={{ direction: "rtl", textAlign: "right", fontFamily: "'Amiri', serif" }} // إضافة دعم RTL للعربية
                                />
                            </div>
                            <br />
                            <button onClick={handlePdfDownload}>تحويل إلى PDF</button>
                        </div>
                    )}
                </div>
                <Footer />
            </div>
        </>
    );
}
