import { Provider } from "react-redux";
import Count from "./count";
import { store } from "./ReducerStore";
import Newcount from "./Newcount";
import Userdata from "./ui/Userdata";
import Getdata from "./ui/getdata";

export default function App2() {
  return (
    <>
      <Provider store={store}>
        {/* <Count /> */}
        {/* <Newcount /> */}
        <Userdata/>
        <Getdata/>
        
      </Provider>

    </>
  );
}
