import { useState } from "react";
import { CircularProgress, Select, MenuItem, Snackbar, Alert } from "@mui/material";
import { useLang } from "../Context/LangContext";



function ChangeLang() {
  const { lang, changeLanguage } = useLang();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(lang);
  const [loading, setLoading] = useState(false);

  const styles = {
    "& .MuiSelect-select": {
      color: "red",

      
    },
    "@media (max-width: 768px)": {
      fontSize: "22px",
      
    },
  };

  const langChange = (e) => {
    const selectedLang = e.target.value;
    setSnackbarOpen(true);
    setLoading(true);
    changeLanguage(selectedLang);
    setSelectedLanguage(selectedLang);

    setTimeout(() => {
      window.location.href = "/";
      setLoading(false);
    }, 1000);
  };

  // الرسائل حسب اللغة
  const handleMessage = () => {
    switch (selectedLanguage) {
      case "en":
        return "Language changed to English!";
      case "ar":
        return "تم تغيير اللغة إلى العربية!";
      default:
        return "Language changed to English!";
    }
  };

  return (
    <div>
      <Select
        sx={styles}
        value={lang}
        onChange={langChange}
        disabled={loading}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="ar"> العربية</MenuItem>
      </Select>

      {loading && (
        <CircularProgress
          sx={{
            color: "red",
            width: "30px !important",
            height: "30px !important",
            my: "10px !important",
          }}
        />
      )}

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={1500}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          {handleMessage()}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ChangeLang;
