import AccountDropdown from "./AccountDropdown";
import ControllableStates from "./Search";
import Navigations from "./NavigationBar";
import IconButton from "@mui/material/IconButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useWichlist } from "../Context/WishlistContext";
import { useCart } from "../Context/CartContext";

const Header = (props) => {
  const { wishlistItems } = useWichlist();
  const { cartItems } = useCart();


  return (
    <div className={props.className}>
      <div className="text-4xl hidden min-[1300px]:flex gap-3 ">
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="19" cy="19" r="19" fill="#00FF66" />
          <path
            d="M19 29C14.03 29 10 26.418 10 22V21.912C10 19.794 11.338 18.1 13.375 17C15.324 15.948 16.476 14.01 16.188 12L15.625 9L17.711 9.795C21.468 11.225 24.597 13.707 26.625 16.861C27.5167 18.2311 27.9941 19.8293 28 21.464V22C28 23.562 27.496 24.895 26.625 25.965"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 29C17.343 29 16 27.567 16 25.8C16 24.4 17.016 23.279 17.91 22.252L19 21L20.09 22.252C20.984 23.28 22 24.4 22 25.8C22 27.567 20.657 29 19 29Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <motion.h1
          animate={{
            scale: [1, 1.05, 1],
            color: ["#4ade80", "#22c55e", "#4ade80"],
            // تدرج بسيط في اللون
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          whileHover={{ scale: 1.15 }}
          className="text-2xl font-bold"
        >
          Exclusive
        </motion.h1>
      </div>
      <Navigations />
      <div className="flex gap-0 sm:gap-5">
        <ControllableStates />
        <div className={props.imgs}>
          
          <Link to="/wishlist">
            <IconButton
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <span
                className={`absolute ml-5 mb-5 px-1 rounded-full text-white text-sm ${
                  wishlistItems.length == 0 ? "hidden " : "bg-red-500"
                }`}
              >
                {wishlistItems.length}
              </span>
              <svg
                className="hover:bg-cyan-400 hover:invert rounded-full w-6 md:w-8 md:h-8"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </IconButton>
          </Link>
        
          <Link to="/cart">
            <IconButton
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <span
                className={`absolute ml-5 mb-5 px-1 rounded-full text-white text-sm ${
                  cartItems.length == 0 ? "hidden " : "bg-red-500"
                }`}
              >
                {cartItems.length}
              </span>

              <svg
                className="hover:bg-cyan-400 hover:invert  rounded-full w-6 md:w-8 md:h-8"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 5H7L10 22H26"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </IconButton>
          </Link>
          <AccountDropdown />
        </div>
      </div>
    </div>
  );
};

export default Header;
