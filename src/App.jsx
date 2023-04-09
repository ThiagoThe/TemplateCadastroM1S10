import { Agradecimento } from "./components/Agradecimento";
import { DadosPessoaisForm } from "./components/DadosCliente";
import { Endereco } from "./components/Endereco";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
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
    <div>
      <header>
        <h2>Cadastre-se gratuitamente!</h2>
        <p>
          Faça o seu cadastro para ter acesso a todos os recursos da nossa
          plataforma
        </p>
      </header>
      <div>
        <p>etapas</p>
        <form onSubmit={(e) => mudarPasso(passoAtual + 1, e)}>
          <div className="inputs-container"></div>
          {passoComponent}
          <div className="actions">
            <button type="button" onClick={() => mudarPasso(passoAtual - 1)}>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            {!ultimoPasso ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
