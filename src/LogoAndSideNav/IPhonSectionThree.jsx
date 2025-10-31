import { Link } from "react-router-dom";import { FaSprayCan } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import i18n from "../Common/components/LangConfig";

export  function PerfumeIcon() {
  return (
    <div className="flex items-center justify-center">
      <FaSprayCan className="text-rose-600" size={50} />
    </div>
  );
}

const IPhonSectionThree = () => {
  return (
    <div className="flex flex-col md:max-w-72 pb-14 gap-6 md:gap-12 items-center md:items-start justify-center md:ml-16">
      <div className="max-w-72 flex jusify-center items-center gap-6">
         <PerfumeIcon />
        <p className="text-rose-300 text-lg">{i18n.t("homeSections.row1.comp3")}</p>
      </div>
      <h1 className="text-2xl md:text-5xl leading-10 text-rose-300">
        {i18n.t("homeSections.row1.col2.1")}
      </h1>
      <div className="flex text-rose-300 items-center gap-3 cursor-pointer transform transition-transform duration-300 hover:translate-x-4">
        <Link to="OurProducts">{i18n.t("homeSections.row1.col2.2")}</Link>
       <FaArrowRight size={20} color="red" />
      </div>
    </div>
  );
};
export default IPhonSectionThree;