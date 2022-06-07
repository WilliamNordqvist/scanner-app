import {
  TableContainer,
  Paper,
  Table as MuiTable,
  TableCell as MuiTableCell,
  TableHead,
  TableRow,
  TableBody,
  Box,
  Button,
} from "@mui/material";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";
import { PhotoCamera, Store } from "@mui/icons-material";
import { Scanner } from "../Scanner/Scanner";
import { Context } from "../../Context/Context";
import { Title } from "../Input/Input";

const TableCell = styled(MuiTableCell)`
  && {
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};
    p {
      margin: 0;
      font-size: 17px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

const FlexTableCell = styled(TableCell)`
  && {
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.primary};

    svg {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const CameraIcon = styled(PhotoCamera)`
  text-align: auto;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  padding: ${({ theme }) => theme.sizes.xsmall};
`;

export const Table: React.FC = () => {
  const [isScanOpen, toggleScanner] = useState(false);
  const { store, barCode, deleteProject, saveProject } = useContext(Context);
  const { barcodes, name } = store!;

  if (isScanOpen) {
    return <Scanner toggleScanner={toggleScanner} />;
  }

  return (
    <Box
      height="100%"
      width="100%"
      maxWidth={700}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      overflow="hidden"
    >
      <Box textAlign="center">
        <h1>{name}</h1>
        <CameraIcon onClick={() => toggleScanner(!isScanOpen)} />
      </Box>
      <Box height="50%" overflow="scroll" width="100%">
        <TableContainer component={Paper}>
          <MuiTable>
            <TableBody>
              {barcodes.map((i, index) => (
                <TableRow
                  key={i + index}
                  hover
                  sx={{ "&:last-child td": { border: 0 } }}
                >
                  <FlexTableCell color="white">
                    <p>{i}</p>
                    <ClearIcon onClick={() => barCode.delete(i)} />
                  </FlexTableCell>
                </TableRow>
              ))}
            </TableBody>
          </MuiTable>
        </TableContainer>
      </Box>
      <Box display="flex" marginBottom={2}>
        <Button
        onClick={saveProject}
          disabled={barcodes.length === 0}
          fullWidth
          color="secondary"
          variant="contained"
        >
          Spara
        </Button>
        <Box sx={{ p: 1 }} />
        <Button
          onClick={deleteProject}
          fullWidth
          color="warning"
          variant="outlined"
        >
          Radera
        </Button>
      </Box>
    </Box>
  );
};
