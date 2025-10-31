import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import i18n from "../Common/components/LangConfig";
const IPhonSectionTwo = () => {
  return (
    <div className="flex flex-col md:max-w-72 pb-14 gap-6 md:gap-12 items-center md:items-start justify-center md:ml-16">
      <div className="max-w-72 flex jusify-center items-center gap-6">
        <FaRegClock className="text-blue-500 text-6xl" />

        <p className="text-blue-500 text-lg">{i18n.t("homeSections.row1.comp2")}</p>
      </div>
      <h1 className="text-2xl md:text-5xl leading-10 text-blue-500">
        {i18n.t("homeSections.row1.col2.1")}
      </h1>

      
      <div className="flex text-blue-500 items-center gap-3 cursor-pointer transform transition-transform duration-300 hover:translate-x-4">
        <Link to="OurProducts">{i18n.t("homeSections.row1.col2.2")}</Link>
        <FaArrowRight size={30} color="blue" />
      </div>
    </div>
  );
};
export default IPhonSectionTwo;
