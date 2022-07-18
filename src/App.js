import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Top from "./Top";
import Bottom from "./Bottom";
import { Route, Routes, Router } from "react-router-dom";
import Test from "./Test";
import Value_page from "./Value_page";
// import Test from './Test';
import Login_page from "./Login_page";

function App() {
  return (
    <div className="App">
      {/* <Top/> */}
      {/* <Home/> */}
      {/* <Bottom/> */}
      {/* <Value_page/> */}
      {/* <Login_page/> */}
      <Routes>
        <Route path="/" element={<Login_page />} />
         <Route path = '/Top' element={<Top/>}/>
        <Route path="/Test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
