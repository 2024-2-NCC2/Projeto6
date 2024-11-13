import CreateAccountPage from './pages/CreateAccountPage';
import LoginPage from './pages/LoginPage';
import Home from "./pages/Home";
import SobreNos from "./pages/SobreNos";
import Explorar_Itens from "./pages/Explorar_Itens";
import PontosColeta from "./pages/PontosColeta";
import NotFound from './Components/NotFound';
import Produto from './pages/Produto';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PontosColeta from "./pages/PontosColeta";
import PaginaUsuario from "./pages/PaginaUsuario";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre-nos' element={<SobreNos />} />
          <Route path='/loginpage' element={<LoginPage />} />
          <Route path='/create-account' element={<CreateAccountPage />} />
          <Route path='/pontos-coleta' element={<PontosColeta />} />
          <Route path='/explorar_itens' element={<Explorar_Itens />} />
          <Route path='/item/:id' element={<Produto />} />
          <Route path="*" element={<NotFound />} /> {/* Rota 404 */}
          <Route path='/pagina-usuario' element={<PaginaUsuario />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;