import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
  <Top>
    <Link to="/">Home</Link>
    <Link to="/buscador">Buscador</Link>
    <Link to="/calibragem">Calibragem</Link>
    <Link to="/downloadpacientes">Pacientes</Link>
    <Link to="/relatorio">Relatorio</Link>
    
     {/* { window.sessionStorage.getItem('accessToken')
    ? <Link to="/logout">Logout</Link>
    : <Link to="/login">Login</Link>
    }
     */}
  </Top>
)

export default Header;