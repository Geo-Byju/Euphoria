import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/screens/home/components/Main";
import SingleMainPage from "./components/screens/home/components/SingleMainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/singlepage/:id" element={<SingleMainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
