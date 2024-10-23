import React from "react";
import { Typography } from "@mui/material";
import { useFormikContext } from "formik";

export default function ReviewInfo() {
  const { values } = useFormikContext();

  return (
    <div>
      <Typography variant="h6">Review Your Information</Typography>
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </div>
  );
}
