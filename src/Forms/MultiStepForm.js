import React, { useState } from "react";
import { Button, Step, StepLabel, Stepper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import PersonalInfo from "./PersonalInfo";
// import FamilyInfo from './FamilyInfo';
import ReviewInfo from "./ReviewInfo";
import FamilyInfo from "./FamilyInfo";

// Define steps for the form
const steps = ["Personal Information", "Family Information", "Review"];

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  spouseDetails: [
    {
      spouse_full_name: "",
      spouse_email: "",
    },
  ],
  // More fields can be added as needed
};

// Define validation schema for all steps
const validationSchema = [
  Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  }),
  Yup.object({
    spouseDetails: Yup.array().of(
      Yup.object({
        spouse_full_name: Yup.string().required("Spouse full name is required"),
        spouse_email: Yup.string()
          .email("Invalid email")
          .required("Spouse email is required"),
      })
    ),
  }),
  Yup.object(),
];

function MultiStepForm() {
  const [activeStep, setActiveStep] = useState(0);

  const isLastStep = activeStep === steps.length - 1;

  const handleNext = (values) => {
    if (!isLastStep) {
      setActiveStep(activeStep + 1);
    } else {
      // Submit form
      console.log(values);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <PersonalInfo />;
      case 1:
        return <FamilyInfo />;
      case 2:
        return <ReviewInfo />;
      default:
        return <div>Not Found</div>;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema[activeStep]}
      enableReinitialize={true}
      onSubmit={handleNext}
    >
      {({ isSubmitting, values }) => (
        <Form>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {renderStepContent(activeStep)}

          <Grid container spacing={2} justifyContent="flex-end">
            {activeStep !== 0 && (
              <Button
                onClick={handleBack}
                variant="contained"
                color="secondary"
              >
                Back
              </Button>
            )}

            <Button
              variant="contained"
              color="primary"
              type="submit"
              //disabled={isSubmitting}
              style={{ marginLeft: "10px" }}
            >
              {isLastStep ? "Submit" : "Next"}
            </Button>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default MultiStepForm;
