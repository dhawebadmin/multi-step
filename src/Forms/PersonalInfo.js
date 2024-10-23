import React from "react";
import Grid from "@mui/material/Grid2";
import { Field } from "formik";
import { TextField } from "formik-mui";

export default function PersonalInfo() {
  const formfield = {
    firstName: {
      name: "firstName",
      label: "First Name*",
      requiredErrorMsg: "First Name is required",
    },
    email: {
      name: "email",
      label: "Email*",
      requiredErrorMsg: "Email is required",
    },
  };
  return (
    <Grid container spacing={2}>
      <Grid xs={12} sm={6}>
        <Field
          component={TextField}
          name="firstName"
          label="First Name"
          fullWidth
          disabled={false} // Make sure this is false
          readOnly={false} // Ensure this is not set to true
        />
      </Grid>
      <Grid xs={12} sm={6}>
        <Field
          component={TextField}
          name="lastName"
          label="Last Name"
          fullWidth
          disabled={false} // Make sure this is false
          readOnly={false} // Ensure this is not set to true
        />
      </Grid>
      <Grid xs={12}>
        <Field
          component={TextField}
          name="email"
          label="Email"
          fullWidth
          disabled={false} // Make sure this is false
          readOnly={false} // Ensure this is not set to true
        />
      </Grid>
    </Grid>
  );
}
