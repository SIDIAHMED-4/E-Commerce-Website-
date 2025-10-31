import Vector from "../assets/Vector.svg";
import QrCode from "../assets/QrCode.svg";
import GooglePlay from "../assets/GooglePlay.svg";
import AppStore from "../assets/AppStore.svg";
import IconFacebook from "../assets/Icon-Facebook.svg";
import IconTwitter from "../assets/Icon-Twitter.svg";
import IconInstagram from "../assets/icon-instagram.svg";
import IconLinkedin from "../assets/Icon-Linkedin.svg";
import { Link } from "react-router-dom";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import i18n from "../Common/components/LangConfig";

const Footer = () => {
  return (
    <div className="bg-black text-white py-8 mt-24 bottom-0 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:grid-cols-5 sm:grid-cols-2 p-8 bg-black text-white mt-9 ">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl">Exclusive</h1>
          <h2 className="text-3xl">{i18n.t("footer.subscribe")}</h2>
          <p>{i18n.t("footer.offer")}</p>
          <form className="flex-1">
            <TextField
              className="w-full rounded-xl"
              variant="outlined"
              placeholder="Search..."
              InputProps={{
                inputProps: {
                  className: " placeholder-white px-3 py-2 rounded-xl",
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <img src={Vector} alt="search" className="w-5 h-5 " />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  "& fieldset": {
                    borderColor: "#fff", // حدود بيضاء
                  },
                  "&:hover fieldset": {
                    borderColor: "#f59e0b", // حدود عند hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#f59e", // حدود عند التركيز
                  },
                },
              }}
            />
          </form>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl">{i18n.t("footer.support")}</h1>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>SidiAhmedNejaba@gmail.com</p>
          <p>+222 31401477</p>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl"> {i18n.t("footer.myAccount")}</h1>
          <p>
            <Link to="signUp"> {i18n.t("footer.account")}</Link>
          </p>
          <p>
            <Link to="logIn"> {i18n.t("footer.sign")}</Link>
          </p>
          <p>
            {" "}
            <Link to="cart">  {i18n.t("footer.cart")}</Link>
          </p>
          <p>
            {" "}
            <Link to="wishlist"> {i18n.t("footer.wishlist")}</Link>
          </p>
          <p>
            {" "}
            <Link to="OurProducts">{i18n.t("footer.shop")}</Link>
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl"> {i18n.t("footer.quickLinks")}</h1>
          <p>
            <Link to='PrivacyPolicy'> {i18n.t("footer.privacy")}</Link>
          </p>
          <p>
            <Link to='TermsOfUse'>{i18n.t("footer.usage")}</Link>
          </p>
          <p>
            <Link to='FooterFAQ'>{i18n.t("footer.FAQ")}</Link>
          </p>
          <p>
            <Link to='contact'>{i18n.t("footer.Contact")}</Link>
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl"> {i18n.t("footer.downloadApp")}</h1>
          <p> {i18n.t("footer.save")}</p>
          <div className="flex gap-4">
            <img src={QrCode} alt="" />
            <div className="flex flex-col gap-4">
              <img src={GooglePlay} alt="GooglePlay.svg" />
              <img src={AppStore} alt="AppStore.svg" />
            </div>
          </div>
          <div className="flex flex-row gap-9">
            <img src={IconFacebook} alt="" />
            <img src={IconTwitter} alt="" />
            <img src={IconInstagram} alt="" />
            <img src={IconLinkedin} alt="" />
          </div>
        </div>
      </div>
      <hr className="w-full border-gray-800 my-4" />
      <p className="text-center text-gray-600 ">
         {i18n.t("footer.copyrights1")} <strong> {i18n.t("footer.copyrights2")}</strong> {i18n.t("footer.copyrights3")}
      </p>
    </div>
  );
};

export default Footer;
