import React, { useEffect, useState } from 'react';
import NavBar from "../../componentes/navBar/NavBar";
import Footer from "../../componentes/footer/Footer";
import "./writeing.css";
import jsPDF from 'jspdf';
import Title from '../../componentes/title/Title';

export default function Writeing() {
    const [contratos, setContratos] = useState([]);
    const [textAreaContent, setTextAreaContent] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // جلب البيانات من الـ API
        fetch("http://localhost:9000/data")
            .then(res => res.json())
            .then(data => {
                if (data && data[0] && data[0].buying) {
                    setContratos(data[0].buying);
                }
            });
    }, []);

    const handleImageClick = (contrato) => {
        if (contrato.text) {
            const combinedText = contrato.text.map(item =>
                Object.entries(item).map(([key, value]) => `${key}: ${value}`).join("\n")
            ).join("\n\n");
            setTextAreaContent(combinedText);
            setIsEditing(true);
        }
    };

    const handlePdfDownload = (e) => {
        e.preventDefault();
        setLoading(true); // بدء التحميل
    
        const pdf = new jsPDF();
        const text = textAreaContent; // نص الـ <textarea>
    
        // إضافة النص إلى PDF
        pdf.text(text, 10, 10, {
            maxWidth: 190, // عرض النص في الصفحة
            align: 'right', // محاذاة النص لليمين
            fontSize: 12, // حجم الخط
            font: 'Amiri', // الخط العربي إذا كان متاحًا
        });
    
        pdf.save('document.pdf');
        setLoading(false); // إنهاء التحميل
    };
    

    return (
        <>
            {loading && <div>Loading...</div>}
            <div>
                <NavBar />
                <div className="writing">
                    <Title tit=" نماذج الصيغ القانونية " des=" مجموعة متنوعة من النماذج و الصيغ القانونية " />
                    
                    <div className="write-show">
                        {/* عرض العقود */}
                        {contratos.map((contrato, index) => (
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
