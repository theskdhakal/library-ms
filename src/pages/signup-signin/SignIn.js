import React, { useEffect, useState } from "react";
import { MainLayout } from "../../components/layout/MainLayout";
import { Button, Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../components/user/userAction";

export const SignIn = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  const [frmData, setFrmData] = useState({});
  // const { user } = useSelector((state) => state.user);

  // useEffect(() => {
  //   user?.uid && navigate("/dashboard");
  // }, [user?.uid, navigate]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrmData({
      ...frmData,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    loginUser(frmData);
  };

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
          onSubmit={handleOnSubmit}
          className="border p-5 rounded shadow-lg m-auto bg-light  "
          style={{ width: "600px" }}
        >
          <h3>Welcome back ! please Login to continue</h3>
          <hr />

          {inputFields.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
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
