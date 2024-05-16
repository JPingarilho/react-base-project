import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";

const Home = () => {

  /* useEffect(()=> {
    onAuthStateChanged(auth, (user)=> {
      if (user) {
        window.sessionStorage.setItem("accessToken", user.accessToken);
      } else {
        window.sessionStorage.removeItem("accessToken");
      }
    })
  },[]) */
  

  return (
    <Base>
        <div className="pesquisa-container">
          <input type="text" placeholder="Digite o nome da empresa" />
        </div>
        <div className="preciso-container">
          <div className="pendenetes">
            <h2>Pendentes</h2>
            <div className="empresa">
              Empresa <button>Iniciar</button>
            </div>
          </div>
          <div className="pendenetes">
            <h2>Calibragem</h2>
            <div className="empresa">
              Empresa <button>Iniciar</button>
            </div>
          </div>
          <div className="pendenetes">
            <h2>Download pacientes</h2>
            <div className="empresa">
              Empresa <button>Iniciar</button>
            </div>
          </div>
          <div className="pendenetes">
            <h2>Anexo Relatorio</h2>
            <div className="empresa">
              Empresa <button>Iniciar</button>
            </div>
          </div>
        </div>
    </Base>
  )
}

export default Home
