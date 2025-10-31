import { Button, Fab } from "@mui/material";
import { Link } from "react-router-dom";
import DynamicBreadcrumbs from "../Common/components/Breadcrumbs";

export const NotFound = () => {
  return (
    <div className="flex flex-col justify-around items-start mt-56 sm:mt-36 mx-4 md:mx-40 ">
      <DynamicBreadcrumbs />
      <div className="flex flex-col items-center mt-12 mx-auto">
        <div className="flex flex-col justify-center gap-14 items-center text-center">
          <h1 className="text-3xl md:text-8xl">404 Not Found</h1>
          <h6 className="text-xs md:text-xl">
            Your visited page not found. You may go home page.
          </h6>
        </div>

        <Link to="..">
          <Button
            sx={{
              color: "white",
              backgroundColor: "red",
              marginTop: "60px",
              padding: "20px 20px",
              "&:hover": {
                transform: "translateY(-4px)",
                "&:focus": {
                  transform: "translateY(0)",
                  transition: "transform 0.1s ease",
                  transform: "translateY(0)",
                },
              },
            }}
          >
            Back to Home Page
          </Button>
        </Link>
      </div>
    </div>
  );
};
