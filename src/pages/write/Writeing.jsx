import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, Font } from '@react-pdf/renderer';
import NavBar from "../../componentes/navBar/NavBar";
import Footer from "../../componentes/footer/Footer";
import Title from '../../componentes/title/Title';
import kinds from '../../Data'; 
import arabicFont from '../../font/Amiri.ttf'; // إضافة الخط العربي
import "./writeing.css";

// تسجيل الخط العربي
Font.register({
  family: 'Amiri',
  src: arabicFont,
});

// أنماط PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
    direction: 'rtl', // تعيين اتجاه النص لليمين
  },
  text: {
    fontFamily: 'Amiri', // استخدام الخط العربي
    fontSize: 12,
    textAlign: 'right',
  },
});

// دالة تحويل الأرقام
const convertToArabicNumbers = (text) => {
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return text.replace(/\d/g, (digit) => arabicNumbers[digit]);
};

// مكون PDF
const PDFDocument = ({ textContent }) => (
  <Document>
    <Page style={styles.page}>
      <View>
        <Text style={styles.text}>{textContent}</Text>
      </View>
    </Page>
  </Document>
);

const Writeing = () => {
    const [textAreaContent, setTextAreaContent] = useState("");
    const [isEditing, setIsEditing] = useState(false); 
    const [selectedContrato, setSelectedContrato] = useState(null); 

    const handleImageClick = (contrato) => {
        if (contrato.text) {
            const combinedText = contrato.text.map(item =>
                Object.entries(item).map(([key, value]) => `${key}: ${value}`).join("\n")
            ).join("\n\n");
            setTextAreaContent(combinedText);
            setSelectedContrato(contrato); 
            setIsEditing(true);
        }
    };

    return (
        <>
            <NavBar />
            <section className="writing">
                <Title tit=" نماذج الصيغ القانونية " des=" مجموعة متنوعة من النماذج و الصيغ القانونية " />

                <div className="write-show">
                    {kinds.data && kinds.data[0].buying && kinds.data[0].buying.map((contrato, index) => (
                        <button key={index} className="btn" onClick={() => handleImageClick(contrato)}>
                            {contrato.image && <img src={contrato.image} alt={contrato.title} />}
                            <h1>{contrato.title}</h1>
                        </button>
                    ))}
                </div>

                {isEditing && (
                    <div className="write-text">
                        <textarea
                            value={textAreaContent}
                            onChange={(e) => setTextAreaContent(e.target.value)}
                            rows="20"
                            cols="100"
                            style={{ direction: "rtl", textAlign: "right" }}
                        />
                        <br />
                        <PDFDownloadLink 
                            className="btn-click"
                            document={<PDFDocument textContent={convertToArabicNumbers(textAreaContent)} />} // تحويل الأرقام إلى عربية
                            fileName={`${selectedContrato ? selectedContrato.title : 'document'}.pdf`}
                        >
                            {({ loading }) =>
                                loading ? 'جاري التحميل...' : 'تحميل PDF'
                            }
                        </PDFDownloadLink>
                    </div>
                )}
            </section>
            <Footer />
        </>
    );
};

export default Writeing;
