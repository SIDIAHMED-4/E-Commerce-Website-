import React from "react";
import { Typography, Container } from "@mui/material";
import DynamicBreadcrumbs from "../Common/components/Breadcrumbs";


export default function TermsOfUse() {
  return (
    <div className="mt-45">
      <DynamicBreadcrumbs />
      <Container className="mt-20">
        <Typography variant="h4" className="font-bold mb-6 text-gray-900">
          شروط الاستخدام (Terms of Use)
        </Typography>

        <Typography variant="body1" className="mb-4 text-gray-700">
          باستخدام هذا الموقع، فإنك توافق على الالتزام بهذه الشروط والقوانين
          المطبقة. الرجاء قراءة هذه الشروط بعناية.
        </Typography>

        <Typography
          variant="h6"
          className="font-semibold mt-6 mb-2 text-gray-900"
        >
          حقوق المستخدم
        </Typography>
        <Typography variant="body1" className="mb-4 text-gray-700">
          يُسمح لك باستخدام الموقع للأغراض الشخصية وغير التجارية فقط. يُمنع نسخ
          أو توزيع المحتوى بدون إذن.
        </Typography>

        <Typography
          variant="h6"
          className="font-semibold mt-6 mb-2 text-gray-900"
        >
          مسؤولية الموقع
        </Typography>
        <Typography variant="body1" className="mb-4 text-gray-700">
          الموقع يبذل جهده لتوفير محتوى دقيق، لكننا لا نتحمل أي مسؤولية عن
          الأخطاء أو المحتوى المحدث.
        </Typography>

        <Typography
          variant="h6"
          className="font-semibold mt-6 mb-2 text-gray-900"
        >
          إنهاء الوصول
        </Typography>
        <Typography variant="body1" className="mb-4 text-gray-700">
          نحتفظ بالحق في إنهاء وصول أي مستخدم ينتهك هذه الشروط أو يسيء استخدام
          الموقع.
        </Typography>

        <Typography variant="body1" className="mt-6 text-gray-700">
          باستخدامك الموقع، فإنك تقر بأنك قد قرأت وفهمت ووافقت على هذه الشروط.
        </Typography>
      </Container>
    </div>
  );
}
