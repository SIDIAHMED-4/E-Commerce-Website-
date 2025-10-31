import { useState } from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const StyledBreadcrumb = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  height: theme.spacing(3),
  color: (theme.vars || theme).palette.text.primary,
  fontWeight: theme.typography.fontWeightRegular,
  transition: "all 0.2s ease",
  "&:hover, &:focus": {
    backgroundColor: emphasize(theme.palette.grey[100], 0.06),
  },
  "&.active": {
    backgroundColor: "#1976d2",
    color: "#fff",
    fontWeight: "bold",
    cursor: "default",
  },
}));

export default function DynamicBreadcrumbs() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathnames = location.pathname.split("/").filter(Boolean);

  // 🔹 الحالة التي تخزن العنصر النشط حاليًا
  const [activePath, setActivePath] = useState(location.pathname);

  const handleClick = (to) => {
    setActivePath(to); // 🔹 حدّث العنصر النشط
    navigate(to); // 🔹 انتقل فعليًا إلى الصفحة
  };

  return (
    <div role="presentation" className="my-4">
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
      >
        {/* الصفحة الرئيسية */}
        <StyledBreadcrumb
          label="Home"
          icon={<HomeIcon fontSize="small" />}
          clickable
          onClick={() => handleClick("/")}
          className={activePath === "/" ? "active" : ""}
        />

        {/* بقية المسار */}
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <StyledBreadcrumb
              key={to}
              label={decodeURIComponent(value)}
              clickable
              onClick={() => handleClick(to)}
              className={activePath === to ? "active" : ""}
            />
          );
        })}
      </Breadcrumbs>
    </div>
  );
}




