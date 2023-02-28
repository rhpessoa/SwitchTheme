import { ThemeContext } from "@/context/ColorThemeContext";
import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

export default function Button() {
  const { toggleTheme } = React.useContext(ThemeContext);

  return (
    <div>
      <ButtonStyled onClick={toggleTheme}>Troca o tema</ButtonStyled>
    </div>
  );
}
