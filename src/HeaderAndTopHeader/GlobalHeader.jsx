import Header from "./Header";
import TopHeader from "./TopHeader";
import kere from "../assets/kere.svg";
import marche from "../assets/marche.svg";
import i18n from "../Common/components/LangConfig";

const GlobalHeader = () => {
  return (
    <div dir={i18n.t("dir")}>
      <div className="fixed top-0 left-0 right-0 z-50  pb-6">
        <TopHeader />
      </div>
      <div className="fixed top-12 md:top-14 left-0 w-full z-50 bg-white shadow-md">
        <Header
          className="flex justify-between pb-6 pt-2 px-4 shadow-md items-center  bg-white"
          imgs="flex gap-3"
          svg1={kere}
          svg2={marche}
        />
      </div>
    </div>
  );
};
export default GlobalHeader;
