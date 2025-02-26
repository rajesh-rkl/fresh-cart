import { BrowserRouter, Routes, Route } from "react-router-dom"
import Account from "./pages/Account";
import Dashboard from "./pages/Dashboard";
import Docs from "./pages/Docs";
import Home from "./pages/Home";
import MegaMenu from "./pages/MegaMenu";
import Shop from "./pages/Shop";
import Pages from "./pages//Pages";
import Stores from "./pages/Stores";
import Nav from "./pages/Nav";

function App() {


  return (
    <div className="app">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/Account" element={<Account />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="/Docs" element={<Docs/>}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/MegaMenu" element={<MegaMenu />}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
          <Route path="/Nav" element={<Nav />}></Route>
          <Route path="/Stores" element={<Stores />}></Route>
          <Route path="/Pages" element={<Pages />}></Route>


        </Routes>
      </BrowserRouter>



    </div>
  )
}

export default App;