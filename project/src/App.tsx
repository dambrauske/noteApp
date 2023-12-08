import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Notes from "./pages/Notes";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/notes" element={<Notes/>}></Route>
    </Routes>
      

    </>
  );
}

export default App;
