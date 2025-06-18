import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage";
import InputForm from "./components/InputForm";

function App() {
  return (
    <>
      {" "}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hesaplama" element={<InputForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
