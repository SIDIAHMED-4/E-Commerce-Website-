import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DynamicBreadcrumbs from "../Common/components/Breadcrumbs";

const FAQ_ITEMS = [
  {
    question: "ما هي طرق الدفع المتاحة؟",
    answer: "يمكنك الدفع عن طريق البطاقات البنكية، PayPal، أو عند الاستلام.",
  },
  {
    question: "كم يستغرق الشحن؟",
    answer: "عادةً الشحن يستغرق من 3 إلى 7 أيام حسب موقعك.",
  },
  {
    question: "هل يمكنني استرجاع المنتج؟",
    answer: "نعم، يمكنك استرجاع المنتج خلال 14 يوم من تاريخ الشراء.",
  },
  {
    question: "كيف يمكنني إنشاء حساب؟",
    answer: "اضغط على زر التسجيل في أعلى الصفحة واتبع الخطوات.",
  },
];

export default function FooterFAQ() {
  return (
    <div className="mt-45">
      <DynamicBreadcrumbs />
      <footer className=" text-white p-11  w-full">
        <h2 className="text-xl font-bold mb-4">الأسئلة الشائعة (FAQ)</h2>
        <div className="flex flex-col gap-2">
          {FAQ_ITEMS.map((item, index) => (
            <Accordion
              key={index}
              className="bg-gray-800 text-white rounded-lg"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-yellow-400" />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography className="font-medium">{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </footer>
    </div>
  );
}
