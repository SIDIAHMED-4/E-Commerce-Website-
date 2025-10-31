import { useState, useContext } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Tabs,
  Tab,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../Auth/firebase";
import { auth } from "../Auth/firebase";
import i18n from "../Common/components/LangConfig";

const Navigations = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const routes = [
    { path: "/", label: i18n.t("home") },
    { path: "/contact", label: i18n.t("contact") },
    { path: "/about", label: i18n.t("about")},
    ...(currentUser
      ? [{ path: "account", label: i18n.t("account") }]
      : [
          { path: "/logIn", label: i18n.t("loginPage.login") },
          { path: "/signUp", label: i18n.t("signUp")},
        ]),
  ];

  const currentRouteIndex = routes.findIndex(
    (route) => route.path === location.pathname
  );

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error signing out: ", error.message);
    }
  };

  const drawerAnimation = {
    initial: { x: -200, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5 },
  };

  return (
    <>
      {isMobile ? (
        <>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            {/* SVG menu icon */}
            <svg
              className="w-6 sm:w-8"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
                fill="#000000"
              ></path>
            </svg>
          </IconButton>

         <Drawer
  anchor={i18n.language === "ar" ? "right" : "left"}
  open={drawerOpen}
  onClose={toggleDrawer(false)}
  dir={i18n.language === "ar" ? "rtl" : "ltr"}
>

            <motion.div
              {...drawerAnimation}
              className="px-5 py-20 w-60 bg-white h-screen flex flex-col justify-between"
            >
              {/* 🟢 شعار الموقع مع تأثير النبض */}
              <motion.div
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex items-center gap-3 "
              >
                {/* ✅ الدائرة الخضراء المتحركة */}
                <motion.svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [1, 0.9, 1],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeOut",
                  }}
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
                </motion.svg>

                {/* ✅ نص Exclusive مع نبض لطيف */}
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
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.15 }}
              >
                <List className="text-2xl font-bold">
                  {routes.map((route, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemButton
                        component={Link}
                        to={route.path}
                        onClick={toggleDrawer(false)}
                      >
                        <ListItemText primary={route.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                  {currentUser && (
                    <ListItem disablePadding>
                      <ListItemButton
                        component={Link}
                        to="/"
                        onClick={handleLogout}
                      >
                        <ListItemText primary="Logout" />
                      </ListItemButton>
                    </ListItem>
                  )}
                </List>
              </motion.div>
              <footer className="text-center py-4 text-sm text-gray-500">
                <a
                  href="https://www.linkedin.com/in/mahmoud-mansy-a189a5232/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {i18n.t("footer.copyrights1")} <strong> {i18n.t("footer.copyrights2")}</strong> {i18n.t("footer.copyrights3")}
                </a>
              </footer>
            </motion.div>
          </Drawer>
        </>
      ) : (
        <Tabs
          variant="standard"
          indicatorColor="primary"
          textColor="primary"
          value={currentRouteIndex !== -1 ? currentRouteIndex : false}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          {routes.map((route, index) => (
            <Tab
              key={index}
              label={route.label}
              component={Link}
              to={route.path}
              sx={{
                textTransform: "none",
                fontSize: "16px",
                "&.Mui-selected": { color: "black" },
                "&:hover": { color: "inherit" },
              }}
            />
          ))}
          {currentUser && (
            <ListItem button onClick={handleLogout}>
              <ListItemText primary="Logout" />
            </ListItem>
          )}
        </Tabs>
      )}
    </>
  );
};

export default Navigations;
