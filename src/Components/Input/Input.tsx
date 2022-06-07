import { Add } from "@mui/icons-material";
import { Box, TextField } from "@mui/material";
import { title } from "process";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "../../Context/Context";

export const Title = styled.h1`
  position: absolute;
  top: 10px;
  text-align: center;
`;

const InputWrapper = styled(Box).attrs({
  noValidate: true,
  autoComplete: "off",
  component: "form",
})`
  width: 100%;
  max-width: 600px;
  text-align: center;

  * {
    text-align: center;
  }
`;


export const Input: React.VFC = () => {
  const [title, setTitle] = useState("");
  const { createNewProject } = useContext(Context);

  return (
    <>
      <Title>Scanner app</Title>
      <InputWrapper onSubmit={() => createNewProject(title)}>
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant="standard"
          fullWidth
          margin="normal"
        />
        <Box sx={{ p: 3 }} />
        <Add onClick={() => createNewProject(title)} fontSize="large" />
      </InputWrapper>
    </>
  );
};
