import Tarefa from "../model/Tarefa";

export default function Home() {
  let tarefa: Tarefa = new Tarefa(1, "Exemplo tarefa");
  tarefa = tarefa.altenarStatus();

  return (
    <div className="flex flex-col bg-purple-600 justify-center items-center text-white h-screen bg-gradient-to-tr from-purple-500 to-yellow-600">
      <span>{tarefa.id}</span>
      <span>{tarefa.descricao}</span>
      <span>{tarefa.concluida ? "Sim" : "Não"}</span>
    </div>
  );
}
