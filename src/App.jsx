import { Provider } from "react-redux";
import appStore from "../utils/AppStore";
import Body from "./components/Body";

function App() {
  return (
    <Provider store = {appStore} >
      <Body />
    </Provider>
  );
}

export default App;
