import { useState } from "react";
import styled from "styled-components";
import mobileImg from "./images/image-header-mobile.jpg";

import "./App.css";

function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const MainContainer = styled.div`
    border-radius: 15px;
    background-color: hsl(244, 38%, 16%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    /* @media (max-width: ;); */
  `;
  return (
    <div className="App">
      <MainContainer>
        <img
          src={mobileImg}
          alt="peopleTalkingPurpleOverlay"
          className="main-photo"
        />
        <div className="purple-overlay-box"></div>
        <p className="first-sent">
          Get <span className="ins-word">insights</span> that help your business
          grow.{" "}
        </p>
        <div style={{ width: "90%" }}>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency. 10k+
          companies 314 templates 12m+ queries
        </div>
      </MainContainer>
    </div>
  );
}

export default App;
