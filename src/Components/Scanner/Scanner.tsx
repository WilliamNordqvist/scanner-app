import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { Context } from "../../Context/Context";

type ScannerProps = {
  toggleScanner: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Scanner: React.FC<ScannerProps> = ({ toggleScanner }) => {
  const { barCode } = useContext(Context);

  return (
    <>
      <Button
        color="secondary"
        variant="contained"
        onClick={() => {
          toggleScanner(false);
        }}
      >
        Stäng kamera
      </Button>
      <BarcodeScannerComponent
        facingMode="environment"
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) {
            barCode.add(result.getText());
            toggleScanner(false);
          }
        }}
      />
    </>
  );
};
