import { FunctionComponent } from "react";
import { Stack, TextField, Typography} from "@mui/material";
import "./ProfileSidebar.css";
import profile from "./../assets/profile.svg";
import FrameComponent from "./FrameComponent";
import { data } from "../data/data";

const ProfileSidebar: FunctionComponent = () => {

  return (
    <Stack className="profile-sidebar">
   
      <Stack className="frame-container">
        <Stack className="frame-wrapper">
          <Stack className="line-separator-parent">
            <Stack className="line-separator" direction={"row"}>
              <Stack className="line-separator-inner">
                <Stack className="frame-Stack">
                  {[data].map((detail)=> (<Stack className="timothy-jordan-parent">
                    <Typography className="timothy-jordan">{detail.PatientInformation.Name}</Typography>
                    <TextField
                      className="frame-inner"
                      value={detail.PatientInformation.Identifier}
                      variant="standard"
                      sx={{
                        "& .MuiInputBase-root": { height: "24px" },
                        "& .MuiInputBase-input": { color: "#000" },
				}}
				disabled
                    />
                    <TextField
                      className="male-text"
                      value={detail.PatientInformation.Age}
                      variant="standard"
                      sx={{
                        "& .MuiInputBase-root": {
                          height: "26px",
                          fontSize: "15px",
                        },
                        "& .MuiInputBase-input": { color: "#000" },
                      }}
					disabled
                    />
                  </Stack>))}
                
                </Stack>
              </Stack>
              <img
                className="profile-picture-1"
                loading="eager"
                alt=""
                src={profile}
              />
            </Stack>
            <Stack className="patient-i-dline">
              <img
                className="patient-id-icon1"
                loading="eager"
                alt=""
                src="/patient-id.svg"
              />
            </Stack>
         <FrameComponent data={data?.Condition} title="Condition"/>
		<FrameComponent data={data.ClinicalImpression} title="Clinician Impression"/>
		<FrameComponent data={data.Observations} title="Observation"/>
		<FrameComponent data={data.Immunization} title="Immunization"/>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProfileSidebar;