import Home from "./pages/Home";
import SobreNos from "./pages/SobreNos";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/sobre-nos' element={<SobreNos/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
