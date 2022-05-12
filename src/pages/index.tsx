import ListaItem from "../components/lista/ListaItem";
import Selecao from "../components/lista/Selecao";

export default function Home() {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen
     text-white bg-gradient-to-tr from-gray-600 to-gray-900"
    >
      <ul>
        <ListaItem
          valor="Exemplo de item #01"
          concluido={false}
          alterarStatus={() => {}}
        />
        <ListaItem
          valor="Exemplo de item #02"
          concluido
          alterarStatus={() => {}}
        />
      </ul>
    </div>
  );
}
