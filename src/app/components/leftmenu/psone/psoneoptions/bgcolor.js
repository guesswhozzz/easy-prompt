import React from "react";
import DropDownMenu from "../../../global/select/dropdown.jsx";
import Palate from "../psonecontrolls/palate";
import { Preview } from "../../../global/select/controls";

export const BackgroundColors = (state) => {
  // STATE
  const {
    psOneOptions: {
      activeControls,
      currentElement: { bg },
    },
    closeControl,
    openControl,
    getBgColor,
  } = state;
  // OPEN && CLOSED FLAG
  const [, bgSubMenu] = activeControls;

  return (
    <div className="option-item">
      <div className="option-item-header">
        <div className="option-item__title">Background colors</div>
        {/* <ControllWrapper
          open={open}
          onClick={() => {
            open ? OpenClose(false) : OpenClose(true);
          }}
        >
          <LeftDivider open={open}>{"["}</LeftDivider>
          <StaticIcon>{"i"}</StaticIcon>
          <RightDivider open={open}>{"]"}</RightDivider>
        </ControllWrapper> */}
      </div>
      <div className="option-item-controlls">
        <DropDownMenu
          flag={bgSubMenu.flag}
          handler={bgSubMenu.flag ? openControl : closeControl}
          accessory={"bgColorMenu"}
          selectedItem={bg.name ? bg.name : ""}
          preview={<Preview style={{ color: bg.hexString }}>{"░░░"}</Preview>}
        >
          <Palate state={state} colorHandler={getBgColor} />
        </DropDownMenu>
      </div>
    </div>
  );
};