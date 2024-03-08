import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/header/header';
import Info from './components/info/info';
import Doc from './components/doc/doc';
import Home from './components/home/home';
function App() {
  return (
    <div className="App"><Doc />
     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/:id" element={<Info />}></Route>
        <Route path="/*" element={<h1>error</h1>}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
