import { TipoFiltro } from "../model/TipoFiltro";
import ListaTarefas from "../model/ListaTarefas";
import Tarefa from "../model/Tarefa";

const tarefasIniciais: Tarefa[] = [
  Tarefa.criarAtiva(1, "Estudar Next"),
  Tarefa.criarAtiva(2, "Criar um site portfolio"),
  Tarefa.criarConcluida(3, "Acordar"),
];

export default new ListaTarefas(tarefasIniciais, TipoFiltro.NENHUM);
