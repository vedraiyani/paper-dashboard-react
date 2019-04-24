import { createStore, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger';
import rootReducer from "reducers/rootReducer";

const loggerMiddleware = createLogger();

function configureStore(state = { bgReducer: {bgColor: "black"}, colorReducer: {activeColor: "info"} }) {
  return createStore(rootReducer,state,applyMiddleware(
    loggerMiddleware
  ));
}
export default configureStore;