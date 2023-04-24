import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { Button, Container } from "react-bootstrap";
import { PrivateRoute } from "../../components/private-route/PrivateRoute";
import { Link } from "react-router-dom";

export const NewBook = () => {
  return (
    <PrivateRoute>
      <UserLayout>
        <Container>
          <h3>NewBook</h3>
          <Link to="/books">
            <Button variant="warning">&lt; Back</Button>
          </Link>
          <hr />

          {/* <div className="mt-3">
            <BookTable />
          </div> */}
        </Container>
      </UserLayout>
    </PrivateRoute>
  );
};
