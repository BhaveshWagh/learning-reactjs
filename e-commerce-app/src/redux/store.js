// import { createStore } from "redux";
import { legacy_createStore as createStore } from "redux";
import reducres from "./reducers/index";

const store = createStore(
  reducres,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
