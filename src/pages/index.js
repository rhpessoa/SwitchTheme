import React from "react";
import Link from "next/link";
import { DivTeste } from "./indexStyle";

export default function Home() {
  return (
    <>
      <h1>Switch Theme</h1>
      <div>
        <h1>TESTE DIV</h1>
      </div>
      <DivTeste>
        <h1>OLÁ TESTE</h1>
      </DivTeste>
      <Link href="/login">Me clica</Link>
    </>
  );
}
