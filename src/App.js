import "./App.css";
import Counter from "./components/counter";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Flappypage from "./pages/flappypage";
import Endlesspage from "./pages/endlesspage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/flappypage" element={<Flappypage />} />
        <Route path="/endlesspage" element={<Endlesspage />} />
      </Routes>
    </div>
  );
}

export default App;
