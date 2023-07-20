import Login from "./pages/Login";
import { Router } from "./router/Router";
import { Header } from "./widgets";
// import "../index.css";

function App() {
  return (
    <div>
      <Header />
      <main className="px-3 py-5">
        <h1 className="text-center text-[32px] font-semibold tracking-wide mb-[30px]">
          WeDo - simple todo app
        </h1>
        <Router />
      </main>
    </div>
  );
}

export default App;
