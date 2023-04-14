import React from "react";
import { MainLayout } from "../../components/layout/MainLayout";
import { Button, Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { CustomInput } from "../../components/custom-input/CustomInput";

export const SignIn = () => {
  const inputFields = [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "sam@smith.com",
      required: true,
    },

    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "*******",
      required: true,
    },
  ];
  return (
    <MainLayout>
      <Container className="mt-5">
        <Form.Group
          className="border p-5 rounded shadow-lg m-auto bg-light  "
          style={{ width: "600px" }}
        >
          <h3>Welcome back ! please Login to continue</h3>
          <hr />

          {inputFields.map((item, i) => (
            <CustomInput key={i} {...item} />
          ))}

          <div className="d-grid">
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Form.Group>
      </Container>
    </MainLayout>
  );
};
