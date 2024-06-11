/* eslint-disable jsx-a11y/iframe-has-title */
import "../src/reset.css";
import logo from "../src/assets/logo2.png";
import { SectionStyled } from "./styles";

function App() {
  return (
    <div className="App">
      <SectionStyled>
        <div className="aside">
          <figure>
            <img src={logo} alt="Logo do tusimy"></img>
          </figure>

          <h2>
            Conhecimento nunca
            <br /> é demais
          </h2>
        </div>
        <div className="form-container">
          <h1>Cadastro</h1>
          <iframe
            className="form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfv0GPDVzsH8beM9zLRlCA3Px4609Yhx-nnvwtuiRVAcWtUlA/viewform?embedded=true"
            title="Google Form"
            style={{ border: "none" }}
          >
            Carregando…
          </iframe>
        </div>
      </SectionStyled>
    </div>
  );
}

export default App;
