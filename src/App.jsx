import { Agradecimento } from "./components/Agradecimento";
import { DadosPessoaisForm } from "./components/DadosCliente";
import { Endereco } from "./components/Endereco";
import { GrFormNextLink, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import { Etapas } from "./components/Etapas";
import { SCButton, SCFormContainer, SCHeader } from "./styles";

// Hooks
import { useForm } from "./hooks/useForm";

function App() {
  const formComponents = [
    <DadosPessoaisForm />,
    <Endereco />,
    <Agradecimento />,
  ];

  const { passoAtual, passoComponent, mudarPasso, ultimoPasso, primeiroPasso } =
    useForm(formComponents);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container">
        <SCHeader>
          <h2>Cadastre-se gratuitamente!</h2>
          <p>
            Faça o seu cadastro para ter acesso a todos os recursos da nossa
            plataforma
          </p>
        </SCHeader>
        <SCFormContainer>
          <form onSubmit={(e) => mudarPasso(passoAtual + 1, e)}>
            <Etapas passoAtual={passoAtual} />
            <div className="inputs-container">{passoComponent}</div>

            <div className="acoes">
              {!primeiroPasso && (
                <SCButton
                  type="button"
                  onClick={() => mudarPasso(passoAtual - 1)}
                >
                  <GrFormPrevious />
                  <span>Voltar</span>
                </SCButton>
              )}
              {!ultimoPasso ? (
                <SCButton type="submit">
                  <span>Avançar</span>
                  <GrFormNextLink />
                </SCButton>
              ) : (
                <SCButton type="button">
                  <span>Enviar</span>
                  <FiSend />
                </SCButton>
              )}
            </div>
          </form>
        </SCFormContainer>
      </div>
    </div>
  );
}

export default App;
