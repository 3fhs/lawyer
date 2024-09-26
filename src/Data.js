import madany from "./image/civil.jpg";
import mgl from "./image/mglsdawla.webp";
import fam from "./image/family.jpg";
import cri from "./image/crimie.webp";
import com from "./image/company.jpg";
import ds from "./image/Dstorya.jpg";
import ahmed from "./image/lawyerahmed.jpg";
import women from "./image/ladyes.jpeg";
import sayed from "./image/lawyer-sayed.jpg";

const kinds = {
    lawport: [
        {
            "id": 1,
            "image": madany,
            "الاسم": "القانون المدنى",
            "قسم": "يشمل تنظيم العلاقات بين الأفراد، مثل العقود والالتزامات والمسؤوليات المدنية. يتعامل مع الأضرار المادية والمعنوية، والتعويضات.",
        },
        {
            "id": 2,
            "image": cri,
            "الاسم": "القانون الجنائى",
            "قسم": "يشمل الجرائم والعقوبات المرتبطة بها. يتعامل مع قضايا مثل القتل ، السرقة، الاحتيال ، الاعتداءات وغيرها من الجرائم.",
        },
        {
            "id": 3,
            "image": com,
            "الاسم": "القانون التجارى",
            "قسم": "يختص بتنظيم الأعمال التجارية والشركات . يشمل قضايا مثل تأسيس الشركات ، الإفلاس ، العقود التجارية ، و حماية حقوق الملكية الفكرية.",
        },
        {
            "id": 4,
            "image": mgl,
            "الاسم": "القانون الادارى",
            "قسم": "ينظم العلاقة بين الدولة والأفراد، والقرارات الإدارية الصادرة عن السلطات التنفيذية . يشمل الطعون أمام المحاكم الإدارية.",
        },
        {
            "id": 5,
            "image": ds,
            "الاسم": "القانون الدستورى",
            "قسم": "يحدد حقوق و واجبات المواطنين والدولة و يشمل تفسير و تطبيق الدستور . يهتم بالحقوق والحريات العامة ، والفصل بين السلطات.",
        },
        {
            "id": 6,
            "image": fam,
            "الاسم": "قانون الاحوال الشخصية",
            "قسم": "يتعلق بتنظيم قضايا الأسرة مثل الزواج ، الطلاق ، النفقة ، الحضانة ، و المواريث . يتناول حقوق الزوجة و الأولاد و العلاقات الأسرية بشكل عام.",    
        }
    ],
    team: [
        {
            "id": 1,
            "name": " احمد عبد اللطيف ",
            "image": ahmed,
            "work": " محامى "
        },
        {
            "id": 2,
            "name": " سيد حسن عباس ",
            "image": sayed,
            "work": " محامى "
        },
        {
            "id": 3,
            "name": " امال ذكى محمد ",
            "image": women,
            "work": " محامية "
        },
        {
            "id": 4,
            "name": " ساره سعيد خليل ",
            "image": women,
            "work": " محامية "
        },
    ],
    testi: [
        {
            "id": 1,
            "image": ahmed,
            "talk": " مكتب ممتاز فى صياغة العقود و المتابعة و انهاء الاجراءات بدون وش بجد انا سعيد انى اتعاملت معاهم ",
            "name": " ايمن مسعد ",
            "work": " رجل اعمال ",
        },
        {
            "id": 2,
            "image": women,
            "talk": " حابة اشكر الجميع على مساعدتهم ليا جبولى حقوقى الحمد لله بعد مكنت خلاص و نزلو نفذو و محترمين ",
            "name": " سعاد رشاد ",
            "work": " ربة منزل ",
        },
    ]
    }
export default kinds;