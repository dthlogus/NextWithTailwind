import { Check } from "phosphor-react";

interface SelecaoProps {
  valor: boolean;
}

export default function Selecao(props: SelecaoProps) {
  const gradiente = props.valor
    ? "bg-gradient-to-br from-blue-400 to-purple-500"
    : "";

  return (
    <div
      className={` h-7 w-7 flex 
        justify-center items-center
        rounded-full cursor-pointer text-white
        border border-gray-400 ${gradiente}`}
    >
      {props.valor ? <Check size={20} color="#ffffff" weight="bold" /> : ""}
    </div>
  );
}
