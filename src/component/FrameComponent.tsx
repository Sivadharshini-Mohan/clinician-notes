import { FunctionComponent } from "react";
import { Stack, TextField, Typography } from "@mui/material";
import "./FrameComponent.css";

type FrameComponentType = {
	data: string[];
	title: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({ data, title }) => {

  return (
    <Stack className="profilepictureframe-inner">
      <Stack className="frame-parent">
        <Stack className="frame-group">
          <Stack className="heading1-parent">
        <Typography className="timothy-jordan">{title}</Typography>
          {data.map((detail)=> <TextField
                      className="frame-inner"
                      value={detail}
                      variant="standard"
                      sx={{
                        "& .MuiInputBase-root": { height: "24px" },
                        "& .MuiInputBase-input": { color: "#000" },
				}}
 disabled
                    />)  }

          </Stack>
        </Stack>
     
      </Stack>
    </Stack>
  );
};

export default FrameComponent;
