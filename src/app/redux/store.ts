import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootreducer";
import { saveState, loadState } from "./localstorage/localstorage";
import { composePromptResultMiddleware } from "./middleware/promptresultmiddleware";
import logger from "redux-logger";

const persistedState = loadState();
//composePromptResultMiddleware;
//applyMiddleware(logger);
export const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(logger, composePromptResultMiddleware)
);

//composePromptResultMiddleware

store.subscribe(() => {
  saveState({
    result: store.getState().result,
  });
});