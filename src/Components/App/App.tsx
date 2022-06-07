import React, { useContext } from "react";
import styled from "styled-components";
import { Context, StoreProvider } from "../../Context/Context";
import { Page } from "../Page/Page";

export const App: React.VFC = () => {
  return (
    <StoreProvider>
      <Page />
    </StoreProvider>
  );
};
