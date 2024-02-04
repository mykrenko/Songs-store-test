import { store } from "../../store";
import { Provider } from "react-redux";

const GlobalStore = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default GlobalStore;
