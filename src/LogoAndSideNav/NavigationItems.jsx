import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import i18n from "../Common/components/LangConfig";

const NavigationItems = () => {
  const classNme =
    "relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-pink-500 after:via-purple-500 after:to-indigo-500 after:transition-all after:duration-500 hover:after:w-full";

  const navItems = [
    i18n.t("homeSections.row1.col1.0"),
    i18n.t("homeSections.row1.col1.1"),
    i18n.t("homeSections.row1.col1.2"),
    i18n.t("homeSections.row1.col1.3"),
    i18n.t("homeSections.row1.col1.4"),
    i18n.t("homeSections.row1.col1.5"),
    i18n.t("homeSections.row1.col1.6"),
    i18n.t("homeSections.row1.col1.7"),
    i18n.t("homeSections.row1.col1.8"),
  ];

  const whileHover = {
    scale: 1.1,
    backgroundColor: "#f8fafc",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
  };

  const whileTap = {
    scale: 0.95,
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
  };

  const transition = { type: "spring", stiffness: 300, damping: 20 };

  return (
    <nav className="min-[1200px]:block hidden">
      <ul>
        {navItems.map((item, index) => (
          <li key={index} className={`mt-2 ${classNme}`}>
            <Link to="/OurProducts">
              <motion.div
                whileHover={{ ...whileHover }}
                whileTap={{ ...whileTap }}
                transition={{ ...transition }}
                className="p-3 rounded-xl bg-white"
              >
                {item}
              </motion.div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationItems;
