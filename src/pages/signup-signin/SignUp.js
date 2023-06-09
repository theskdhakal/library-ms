import React, { useState } from "react";
import { MainLayout } from "../../components/layout/MainLayout";
import { Button, Container, Form } from "react-bootstrap";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { toast } from "react-toastify";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../config/firebase-config";
import { doc, setDoc } from "firebase/firestore";

const initialState = {
  password: "DentedCode1",
  confirmPassword: "DentedCode1",
};
export const SignUp = () => {
  const [frmData, setFrmData] = useState(initialState);
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    if (name === "password") {
      setError("");
      value.length < 6 && setError("Password is too short");

      !/[0-9]/.test(value) && setError("Must include Number");
      !/[A-Z]/.test(value) && setError("Must include uppercase");
      !/[a-z]/.test(value) && setError("Must include lowercase");
    }

    setFrmData({
      ...frmData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();

      const { confirmPassword, password, email } = frmData;

      if (confirmPassword !== password) {
        toast.error("password do not match!");
      }

      //use firebase auth service to create user with auth account

      const pendingState = createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      toast.promise(pendingState, {
        pending: "please wait..",
      });

      const { user } = await pendingState;
      if (user?.uid) {
        //user is registered,now lets's add them in our database for the future purpose

        const userObj = {
          fName: frmData.fName,
          lName: frmData.lName,
          email: frmData.email,
        };

        await setDoc(doc(db, "users", user.uid), userObj);
        toast.success("user has been registered.You may login now");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const inputs = [
    {
      label: "first Name",
      name: "fName",
      type: "text",
      placeholder: "sam",
      required: true,
    },
    {
      label: "last Name",
      name: "lName",
      type: "text",
      placeholder: "smith",
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
      value: frmData.password,
    },

    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "*******",
      required: true,
      value: frmData.confirmPassword,
    },
  ];
  return (
    <MainLayout>
      <Container className="mt-5">
        <Form
          onSubmit={handleOnSubmit}
          className="border p-5 shadow-lg rounded m-auto bg-light mb-5"
          style={{ width: "600px" }}
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
            <Form.Group className="mb-3">
              <Form.Label>Account Type</Form.Label>
              <Form.Select name="role">
                <option value="">--Select User--</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </Form.Select>
            </Form.Group>
            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}

            <div className="p3">
              <Form.Text>
                Password should be longer than 6 characters contain at least one
                number, one uppercase and one lower case.
                {error && (
                  <ul>
                    <li className="text-danger fw-bolder">{error}</li>
                  </ul>
                )}
              </Form.Text>
            </div>

            {/* <div className="d-grid"> */}
            <Button variant="primary" type="submit" disabled={error}>
              Register Now!
            </Button>
            {/* </div> */}
          </div>
        </Form>
      </Container>
    </MainLayout>
  );
};
