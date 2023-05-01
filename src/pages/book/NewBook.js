import React, { useState } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { Button, Container, Form } from "react-bootstrap";
import { PrivateRoute } from "../../components/private-route/PrivateRoute";
import { Link } from "react-router-dom";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { useDispatch } from "react-redux";

export const NewBook = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  // const handleOnSUbmit

  const inputs = [
    {
      label: "Book Title",
      name: "title",
      type: "text",
      placeholder: "Bhagvad Gita",
      required: true,
    },

    {
      label: "Author Name",
      name: "name",
      type: "text",
      placeholder: "Krishna",
      required: true,
    },
    {
      label: "Published Year",
      name: "year",
      type: "number",
      placeholder: "1990",
      required: true,
    },
    {
      label: "Image Url",
      name: "url",
      type: "url",
      placeholder: "http://image-url.com",
      required: true,
    },
    {
      label: "Summary",
      name: "summary",
      type: "text",
      as: "textarea",
      rows: "5",
      required: true,
    },
  ];
  return (
    <PrivateRoute>
      <UserLayout>
        <Container>
          <h3>NewBook</h3>
          <Link to="/books">
            <Button variant="secondary">&lt; Back</Button>
          </Link>
          <hr />

          <Form
            className="border p-5 shadow-lg rounded m-auto bg-light mb-3"
            style={{ width: "500px" }}
          >
            <h3 className="text-primary fw-bolder mb-3">Add New book</h3>

            <div className="mt-5">
              {inputs.map((item, i) => (
                <CustomInput key={i} {...item} />
              ))}

              <div className="d-grid">
                <Button variant="primary" type="submit">
                  Add Book
                </Button>
              </div>
            </div>
          </Form>
        </Container>
      </UserLayout>
    </PrivateRoute>
  );
};
