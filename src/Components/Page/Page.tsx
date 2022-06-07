import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import styled from "styled-components";
import { Input } from "../Input/Input";
import { Table } from "../Table/Table";
import Div100vh from "react-div-100vh";

const Container = styled(Div100vh)`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  overflow: hidden;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  * {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Page: React.FC = () => {
  const { store } = useContext(Context);

  console.log({ store });
  return <Container> {!store ? <Input /> : <Table />} </Container>;
};
