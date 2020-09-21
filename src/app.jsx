import React from "react";
import LeftNavMenu from "./components/leftmenu/leftmenu";
import TerminalWindow from "./components/terminal/termwindow";
import PromptPsOneLine from "./components/lines/promptline";
import { Result } from "./components/result/result";
import styled from "styled-components";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const ContentContainer = styled.div`
  width: 100%;
`;

function App() {
  return (
    <div className="global-style">
      <div className="shell-container">
        <LeftNavMenu />
        <ContentContainer>
          <TerminalWindow />
          <DndProvider backend={HTML5Backend}>
            <PromptPsOneLine />
          </DndProvider>
          <Result />
        </ContentContainer>
      </div>
    </div>
  );
}
export default App;
