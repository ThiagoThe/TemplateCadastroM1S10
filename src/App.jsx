import { Agradecimento } from "./components/Agradecimento";
import { DadosPessoaisForm } from "./components/DadosCliente";
import { Endereco } from "./components/Endereco";

function App() {
  return (
    <div>
      <DadosPessoaisForm />
      <Endereco />
      <Agradecimento />
    </div>
  );
}

export default App;
