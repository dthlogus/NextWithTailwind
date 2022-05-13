import ListaTarefas from "../../model/ListaTarefas";
import ListaBotao from "./ListaBotao";
import ListaItem from "./ListaItem";

interface ListaProps {
  tarefas: ListaTarefas;
  mudou: (tarefa: ListaTarefas) => void;
}

export default function Lista(props: ListaProps) {
  const { tarefas } = props;

  function renderizarTarefas() {
    return tarefas.itens.map((tarefa) => {
      return (
        <ListaItem
          key={tarefa.id}
          valor={tarefa.descricao}
          concluido={tarefa.concluida}
          alterarStatus={() => {
            const tarefaModificada = tarefa.altenarStatus();
            const novaLista = tarefas.modificarTarefa(tarefaModificada);
            props.mudou(novaLista);
          }}
        />
      );
    });
  }

  return (
    <div
      className={`
        flex w-3/5 
    `}
    >
      <ul
        className={`
        w-full list-none
        bg-white shadow-lg rounded-lg
      `}
      >
        {renderizarTarefas()}
        <li className="p-5">
          <ListaBotao selecionado={true} onClick={() => {}}>
            Todas
          </ListaBotao>
        </li>
      </ul>
    </div>
  );
}