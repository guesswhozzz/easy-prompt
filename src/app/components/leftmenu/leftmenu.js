import React from 'react';
import { useLocation } from 'react-router-dom';
import { PsOneMenu } from './psone/psonemenu';
import { ResultMenu } from './result/resultmenu';
import { connect } from 'react-redux';
import {
  getFgColor,
  getBgColor,
  changeSelection,
  setCurrentElement,
  resetOptions,
  openControl,
  closeControl,
  setElementStyle,
  removeElemtStyle,
  changeModeStatus,
  closeAllControls,
} from '../../redux/psoneoptionsreducer.ts';
import {
  updateSelectedElement,
  deleteSelectedElement,
  addNewPromptElem,
} from '../../redux/resultreducer.ts';
import './leftmenu.scss';

const LeftNavMenu = (state) => {
  const { pathname } = useLocation();
  return (
    <div className="left-menu">
      {pathname === '/psone' && <PsOneMenu {...state} />}
      {pathname === '/result' && <ResultMenu />}
    </div>
  );
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {
  getFgColor,
  getBgColor,
  addNewPromptElem,
  setCurrentElement,
  changeSelection,
  resetOptions,
  openControl,
  closeControl,
  setElementStyle,
  removeElemtStyle,
  changeModeStatus,
  updateSelectedElement,
  deleteSelectedElement,
  closeAllControls,
})(LeftNavMenu);
