import { useState } from "react";
import styled from "styled-components";
import mobileImg from "./images/image-header-mobile.jpg";

import "./App.css";

function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const MainContainer = styled.div`
    border-radius: 10px;
    background-color: hsl(244, 38%, 16%);

    /* @media (max-width: ;); */
  `;
  return (
    <div className="App">
      <MainContainer>
        <img
          src={mobileImg}
          alt="peopleTalkingPurpleOverlay"
          style={{ width: "90%" }}
        />
        Get insights that help your business grow. Discover the benefits of data
        analytics and make better decisions regarding revenue, customer
        experience, and overall efficiency. 10k+ companies 314 templates 12m+
        queries
      </MainContainer>
    </div>
  );
}

export default App;
