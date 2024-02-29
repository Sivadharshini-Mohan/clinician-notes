import { FunctionComponent } from "react";
import { TextField,} from "@mui/material";
import "./FrameD.css";
import SearchIcon from "@mui/icons-material/Search";

const FrameD: FunctionComponent = () => {
  return (
    <div className="frame-d">
      <div className="tabheader">
        <div className="header-background1" />
       
        <div className="tabitemtypographytablinetabite">
          <div className="tabitem">
            <div className="typography">
              <div className="tab">Clinitian Notes</div>
            </div>
            <div className="frame-h" />
          </div>
          <div className="tab">History</div>
        </div>
		<div className="tabtypographytab">
          <TextField
            className="search"
            placeholder="Patient ID"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <SearchIcon />
              ),
            }}
            sx={{
              "& fieldset": { borderColor: "rgba(0, 0, 0, 0.23)" },
              "& .MuiInputBase-root": {
                height: "38px",
                backgroundColor: "#fff",
                paddingLeft: "10px",
                borderRadius: "6px",
              },
              "& .MuiInputBase-input": {
                paddingLeft: "8px",
                color: "rgba(0, 0, 0, 0.5)",
              },
            }}
          />
          <div className="buttoncontained">
            <div className="searchinstance">
              <button className="unstyledbutton">
                <div className="saerch-button">Search</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameD;

