import { BrowserRouter } from "react-router-dom";
import App from "./App";

function Wrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Wrapper;
