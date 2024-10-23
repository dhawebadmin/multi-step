import React from "react";
import { Button, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { FieldArray, Field } from "formik";
import { TextField } from "formik-mui";
import DeleteIcon from "@mui/icons-material/Delete";

export default function FamilyInfo() {
  return (
    <FieldArray name="spouseDetails">
      {({ push, remove, form }) => (
        <Grid container spacing={3}>
          {form.values.spouseDetails.map((spouse, index) => (
            <Grid container spacing={2} key={index}>
              <Grid xs={12} sm={6}>
                <Field
                  component={TextField}
                  name={`spouseDetails[${index}].spouse_full_name`}
                  label="Spouse Full Name"
                  fullWidth
                  disabled={false} // Make sure this is false
                  readOnly={false} // Ensure this is not set to true
                />
              </Grid>
              <Grid xs={12} sm={6}>
                <Field
                  component={TextField}
                  name={`spouseDetails[${index}].spouse_email`}
                  label="Spouse Email"
                  fullWidth
                  disabled={false} // Make sure this is false
                  readOnly={false} // Ensure this is not set to true
                />
              </Grid>
              <Grid xs={12} sm={6}>
                <IconButton onClick={() => remove(index)}>
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
          ))}

          <Grid xs={12}>
            <Button
              variant="contained"
              onClick={() => push({ spouse_full_name: "", spouse_email: "" })}
            >
              Add Spouse
            </Button>
          </Grid>
        </Grid>
      )}
    </FieldArray>
  );
}
