import { useState } from "react";

export function useForm(passos) {
  const [passoAtual, setPassoAtual] = useState(0);

  function mudarPasso(i, e) {
    if (e) e.preventDefault();

    if (i < 0 || i >= passos.length) return;

    setPassoAtual(i);
  }

  return {
    passoAtual,
    passoComponent: passos[passoAtual],
    mudarPasso,
    ultimoPasso: passoAtual + 1 === passos.length ? true : false,
    primeiroPasso: passoAtual === 0 ? true : false,
  };
}
