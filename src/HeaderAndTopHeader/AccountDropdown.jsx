import { useState, useRef, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Auth/firebase";
import { useNavigate } from "react-router-dom";
import user from "../assets/user.svg";
import iconMallbag from "../assets/iconMallbag.svg";
import iconCancel from "../assets/iconCancel.svg";
import IconReviews from "../assets/IconReviews.svg";
import Iconlogout from "../assets/Iconlogout.svg";
import i18n from "../Common/components/LangConfig";

const AccountDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // 🔹 إغلاق القائمة عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔹 دالة تسجيل الخروج من Firebase
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
      navigate("/login"); // 🔁 إعادة التوجيه إلى صفحة تسجيل الدخول بعد الخروج
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <div dir={i18n.t("dir")} ref={dropdownRef} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded"
      >
        <img
          src={user}
          alt="Account"
          className="rounded-full w-6 md:w-8 md:h-8 mt-1 hover:bg-cyan-400 hover:invert transition-all duration-300"
        />
      </button>

      {open && (
        <ul
          className={`absolute mt-3 w-52 bg-gray-900 text-white backdrop-blur-md rounded-2xl shadow-lg p-3 z-50 
      ${i18n.language === "ar" ? "left-0" : "right-0"}
    `}
        >
          <li className="flex items-center gap-2 p-2 hover:text-red-400 transition-colors cursor-pointer">
            <img src={user} alt="user" className="w-5 h-5" />
            <span>{i18n.t("headerIcons.1")}</span>
          </li>

          <li className="flex items-center gap-2 p-2 hover:text-red-400 transition-colors cursor-pointer">
            <img src={iconMallbag} alt="order" className="w-5 h-5" />
            <span> {i18n.t("headerIcons.2")}</span>
          </li>

          <li className="flex items-center gap-2 p-2 hover:text-red-400 transition-colors cursor-pointer">
            <img src={iconCancel} alt="cancel" className="w-5 h-5" />
            <span> {i18n.t("headerIcons.3")}</span>
          </li>

          <li className="flex items-center gap-2 p-2 hover:text-red-400 transition-colors cursor-pointer">
            <img src={IconReviews} alt="reviews" className="w-5 h-5" />
            <span> {i18n.t("headerIcons.4")}</span>
          </li>

          {/* 🚪 زر تسجيل الخروج */}
          <li
            onClick={handleLogout}
            className="flex items-center gap-2 p-2 hover:text-red-400 transition-colors cursor-pointer border-t border-gray-700 mt-2 pt-2"
          >
            <img src={Iconlogout} alt="logout" className="w-5 h-5" />
            <span>{i18n.t("headerIcons.5")}</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default AccountDropdown;
