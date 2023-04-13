import React from "react";
import { MainLayout } from "../../components/layout/MainLayout";
import { Button, Container, Form } from "react-bootstrap";
import { CustomInput } from "../../components/custom-input/CustomInput";

export const SignUp = () => {
  const inputs = [
    {
      label: "first Name",
      name: "fname",
      type: "text",
      placeholder: "sam-smith",
      required: true,
    },
    {
      label: "last Name",
      name: "lname",
      type: "text",
      placeholder: "sam-smith",
      required: true,
    },
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

    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "*******",
      required: true,
    },
  ];
  return (
    <MainLayout>
      <Container className="mt-5">
        <Form.Group
          className="border p-5 shadow-lg rounded m-auto bg-light mb-5"
          style={{ width: "400px" }}
        >
          <h3 className="text-primary fw-bolder mb-3">
            Join Kitab-Khana Today!!
          </h3>

          <Form.Text>
            Anyone can create admin or user account for experiment purpose
            <br />
            <br />
            Once you are registered, you will be redirected to dashboard
            automatically.
          </Form.Text>

          <div className="mt-5">
            <Form.Group className="mb-3" controlId="formBasicExample">
              <Form.Label>Account Type</Form.Label>
              <Form.Select name="role">
                <option value="">--Select User--</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </Form.Select>
            </Form.Group>
            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} />
            ))}

            <div className="d-grid">
              <Button variant="primary">Register Now!</Button>
            </div>
          </div>
        </Form.Group>
      </Container>
    </MainLayout>
  );
};
