import { combineReducers } from 'redux';
import { IAppCondition, IGlobalAppCondition, ILeftMenuControls } from './types';
import types from './action.types'
import update from 'immutability-helper'

const initialState: IGlobalAppCondition = {
  currentshell: "bash",
  isLoading: false,
  status: null,
  activeControls: [
    { name: "elementMenu", flag: false },
    { name: "bgColorMenu", flag: true },
    { name: "fgColorMenu", flag: true },
    { name: "symbolMenu", flag: false },
  ],
}

function appcondition(state = initialState, action: IAppCondition) {
  switch (action.type) {
    case types.CHANGELOADSTATUS:
      return update(state, {
        isLoading: { $set: action.payload }
      })

    case types.OPENCONTROL:
      return {
        ...state,
        activeControls: state.activeControls.map((e: ILeftMenuControls) =>
          e.name === action.payload ? { ...e, flag: false } : e
        ),
      };
    case types.CLOSECONTROL:
      return {
        ...state,
        activeControls: state.activeControls.map((e: ILeftMenuControls) =>
          e.name === action.payload ? { ...e, flag: true } : e
        ),
      };
    case types.CLOSEALLCONTROLS:
      return {
        ...state,
        activeControls: state.activeControls.map((e: ILeftMenuControls) => {
          let flag = e.name !== "elementMenu"
          return { ...e, flag: flag };
        }),
      };
    case types.CHANGEMODSTATUS: // DONE
      return update(state, {
        status: { $set: action.payload },
      });
    default:
      return state;
  }
}

const reducer = combineReducers({
  appcondition: appcondition
})
export default reducer