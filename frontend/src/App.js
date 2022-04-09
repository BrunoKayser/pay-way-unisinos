import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ROUTER} from "./routes/router";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route {...ROUTER.LOGIN} />
          <Route {...ROUTER.MAIN}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
