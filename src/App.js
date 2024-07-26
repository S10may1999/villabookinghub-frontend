import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Description from "./pages/Description";
import BackendLayout from "./pages/vendor/BackendLayout"
import BackendHome from "./pages/vendor/BackendHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/description" element={<Description/>}/>
        </Route>
        <Route path="/vendor" element={<BackendLayout/>}>
          <Route path="/vendor" element={<BackendHome/>}/>
        </Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
