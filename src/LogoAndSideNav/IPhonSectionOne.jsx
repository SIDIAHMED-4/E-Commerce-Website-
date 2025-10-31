import IPhon2  from "../assets/IPhon2.svg";
import { Link } from "react-router-dom";
import { FaMobileAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import i18n from "../Common/components/LangConfig";

<FaMobileAlt className="text-gray-700 text-4xl" />

const IPhonSectionOne = () => {
  return (
    <div dir="ltr" className="flex flex-col md:max-w-72 pb-14 gap-6 md:gap-12 items-center md:items-start justify-center md:ml-16">
      <div className="max-w-72 flex jusify-center items-center gap-6">
        <img src={IPhon2} alt="" />
        <p  className="text-lg"> {i18n.t("homeSections.row1.col2.0")}</p>
      </div>
      <h1 className="text-2xl md:text-5xl leading-10">
        {i18n.t("homeSections.row1.col2.1")} 
      </h1>
      <div className="flex items-center gap-3 cursor-pointer transform transition-transform duration-300 hover:translate-x-4">
        <Link to="OurProducts">{i18n.t("homeSections.row1.col2.2")}</Link>
        <FaArrowRight size={20} color="white" />

      </div>
    </div>
  );
};
export default IPhonSectionOne;
