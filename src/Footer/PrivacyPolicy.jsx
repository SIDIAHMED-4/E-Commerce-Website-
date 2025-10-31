import React from "react";
import { Typography, Container } from "@mui/material";
import DynamicBreadcrumbs from "../Common/components/Breadcrumbs";


export default function PrivacyPolicy() {
  return (
    <div className="mt-50">
      <DynamicBreadcrumbs />
      <Container className="mt-30">
        <Typography variant="h4" className="font-bold mb-6 text-gray-900">
          سياسة الخصوصية (Privacy Policy)
        </Typography>

        <Typography variant="body1" className="mb-4 text-gray-700">
          نحن نولي أهمية كبيرة لخصوصيتك ونلتزم بحماية معلوماتك الشخصية عند
          استخدام موقعنا.
        </Typography>

        <Typography
          variant="h6"
          className="font-semibold mt-6 mb-2 text-gray-900"
        >
          جمع المعلومات
        </Typography>
        <Typography variant="body1" className="mb-4 text-gray-700">
          نقوم بجمع المعلومات التي تقدمها لنا مباشرة عند التسجيل أو عند استخدام
          خدماتنا، مثل الاسم وعنوان البريد الإلكتروني ومعلومات الدفع.
        </Typography>

        <Typography
          variant="h6"
          className="font-semibold mt-6 mb-2 text-gray-900"
        >
          استخدام المعلومات
        </Typography>
        <Typography variant="body1" className="mb-4 text-gray-700">
          نستخدم المعلومات لتقديم الخدمة لك، لتحسين تجربة المستخدم، وللتواصل معك
          بشأن التحديثات والعروض.
        </Typography>

        <Typography
          variant="h6"
          className="font-semibold mt-6 mb-2 text-gray-900"
        >
          مشاركة المعلومات
        </Typography>
        <Typography variant="body1" className="mb-4 text-gray-700">
          لا نقوم ببيع أو مشاركة معلوماتك الشخصية مع أطراف خارجية إلا إذا كان
          ذلك مطلوبًا قانونيًا أو لتقديم الخدمة.
        </Typography>

        <Typography
          variant="h6"
          className="font-semibold mt-6 mb-2 text-gray-900"
        >
          حماية المعلومات
        </Typography>
        <Typography variant="body1" className="mb-4 text-gray-700">
          نتخذ الإجراءات الأمنية اللازمة لحماية بياناتك من الوصول غير المصرح به
          أو التغيير أو الحذف.
        </Typography>

        <Typography variant="body1" className="mt-6 text-gray-700">
          باستخدامك لموقعنا، فإنك توافق على هذه السياسة وتفهم كيفية تعاملنا مع
          معلوماتك الشخصية.
        </Typography>
      </Container>
    </div>
  );
}
