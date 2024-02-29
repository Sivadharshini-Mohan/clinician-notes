import { FunctionComponent } from "react";
import "./Recordingsectionheader.css";
import { Stack, Typography } from "@mui/material";
import userRecord from "./../assets/user-record.svg";
import mic from "./../assets/micButton.svg";

const Recordingsectionheader: FunctionComponent = () => {
  return (
    <Stack className="recordingsectionheader" >
      <Stack className="recoding-section">
        <Stack className="recod-background" />
        <Typography className="record-coversation">Record Coversation</Typography>
        <Stack className="searchfilledinstance" direction={"row"}>
          <Stack className="searchinstance1" direction={"row"}>
            <img
              className="record-voice-over-1-icon"
              loading="eager"
              alt=""
              src={userRecord}
            />
            <Stack className="mic-button-wrapper">
              <img
                className="mic-button-icon"
                loading="eager"
                alt=""
                src={mic}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack className="launchrecordingframe" direction={"row"}>
        <Stack className="transcription-section" sx={{height:"400px", overflow:"auto"}}>
          {/*<Stack className="transcription-section-child" />*/}
          <Stack className="transcription-parent">
            <Stack className="transcription">
              <Stack className="record-conversation">
                <Typography variant="h5" className="transcription1" fontWeight={700}>Transcription</Typography>
              </Stack>
              {/*<input className="launch-1" type="checkbox" />*/}
            </Stack>
            <Typography className="lorem-ipsum-is-simply" sx={{m:"20px 5px"}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s  Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lore....
            </Typography>
          </Stack>
          <Stack className="transcription-section-inner">
            <Stack className="rectangle-Stack" />
          </Stack>
        </Stack>
        <Stack className="clinical-notes-wrapper">
          <Stack className="clinical-notes">
            <Stack className="frame-parent2">
              <Stack className="frame-parent3">
                <Stack className="clinical-notes-container">
                  {/*<Typography className="clinical-notes1">Clinical Notes</Typography>*/}
 <Typography variant="h5" className="clinical-notes1" fontWeight={700}>Clinical Notes</Typography>
                </Stack>
                {/*<img
                  className="launch-1-icon"
                  loading="eager"
                  alt=""
                  src="/launch-1-1.svg"
                />*/}
              </Stack>
              <Stack className="lorem-ipsum" >
                <Stack className="lorem-ipsum-is-simply-dummy-te-wrapper">
                  <Typography className="lorem-ipsum-is-simply1" sx={{m:"20px 5px",height:"190px", overflow:"auto"}}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry22. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s , when....typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
                  </Typography>
                </Stack>
                {/*<Stack className="lorem-ipsum-child" />*/}
              </Stack>
            </Stack>
            <Stack className="button-contained" />
            <Stack className="button-container">
              <Stack className="buttoncontained1">
                <Stack className="search-button">
                  <Stack className="unstyledbutton1">
                    <Stack className="saerch-button1">Approve</Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Recordingsectionheader;