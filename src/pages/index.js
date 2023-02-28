import React from "react";
import Link from "next/link";
import { DivTeste } from "./StyleIndex";
import Button from "@/components/Button/index";
import styled from "styled-components";

const OutroBotao = styled.button`
  background-color: #9015a3;
  color: #070208;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;
export default function Home() {
  return (
    <>
      <h1>Switch Theme</h1>
      <Button />
      <Link href="/login">Me clica</Link>
      <div>
        <h1>TESTE DIV</h1>
      </div>
      <DivTeste>
        <h1>OLÁ TESTE</h1>
      </DivTeste>
      <OutroBotao>OUTRO Botão de teste</OutroBotao>
    </>
  );
}
