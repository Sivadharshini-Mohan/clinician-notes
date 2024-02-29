import React from "react";
import "./Desktop.css";
import FrameD from "./FrameD";
import ProfileSidebar from "./ProfileSidebar";
import Recordingsectionheader from "./Recordingsectionheader";

const Desktop  = () => {
  return (
    <div className="desktop-1">
      <header className="f-r-a-m-e-a">
        <div className="f-r-a-m-e-b">
          <div className="header-background" />
          <div className="acme-corporation">Acme Corporation</div>
        </div>
      </header>
      <FrameD />
      <main className="rectangle-i">
      
        <section className="recordingsectionheader-wrapper">
          <Recordingsectionheader />
		</section>
		<ProfileSidebar />
			
      </main>
    </div>
  );
};
export default Desktop;