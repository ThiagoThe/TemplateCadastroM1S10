import React from "react";
import { SCPassosContainer, SCPasso } from "./Etapa.style";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsHouseAdd } from "react-icons/bs";
import { BiHappyHeartEyes } from "react-icons/bi";

export const Etapas = ({ passoAtual }) => {
  return (
    <SCPassosContainer>
      <SCPasso ativo={passoAtual == 0 ? true : false}>
        <AiOutlineUserAdd /> Dados pessoais
      </SCPasso>
      <SCPasso ativo={passoAtual == 1 ? true : false}>
        <BsHouseAdd /> Endereço
      </SCPasso>
      <SCPasso ativo={passoAtual == 2 ? true : false}>
        <BiHappyHeartEyes /> Agradecimento
      </SCPasso>
    </SCPassosContainer>
  );
};
