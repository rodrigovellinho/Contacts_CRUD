import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Container } from "react-bootstrap";
import styles from "./styles.module.css";

export default function CreateNewUser() {
  return (
    <Container className="d-flex">
      <div className="mt-3 p-2 col-4 border border-warning rounded-lg h5 ">
        <span>Cadastrar novo usuário:</span>
        <Link to="/register">
          <Button
            type="button"
            className="btn btn-warning btn-sm text-white font-weight-bold"
          >
            Cadastrar
          </Button>
        </Link>
      </div>
    </Container>
  );
}
