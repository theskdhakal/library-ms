import React from "react";
import { PrivateRoute } from "../../components/private-route/PrivateRoute";
import { Container } from "react-bootstrap";
import { UserLayout } from "../../components/layout/UserLayout";

export const Profile = () => {
  return (
    <PrivateRoute>
      <UserLayout>
        <Container>
          <h3>Profile</h3>
          <hr />
        </Container>
      </UserLayout>
    </PrivateRoute>
  );
};
