import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {  useNavigate } from "react-router-dom";
import { ITEMS } from "../Common/functions/items";
import { useState } from "react";
import i18n from "../Common/components/LangConfig";


export default function ControllableStates() {
  const [searchText, setSearchText] = useState("");
 const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && searchText.trim() !== "") {
      navigate(`${searchText.trim()}`);
    }
  };

  const handleOptionSelect = (event, value) => {
    if (value) {
      navigate(`/${value}`);
    }
  };

  return (
    <div>
      <Autocomplete
        value={searchText}
        freeSolo
        options={ITEMS.map((item) => item.title)}
        onInputChange={(event, newValue) => setSearchText(newValue)}
        onChange={handleOptionSelect}
        sx={{
    width: { xs: 150, sm: 200, md: 300 },
    height: { xs: 30, sm: 35, md: 40 },
  
  }}
        renderInput={(params) => (
          <TextField
            onKeyDown={handleKeyDown}
            placeholder={i18n.t("search")}
            {...params}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </div>
  );
}
