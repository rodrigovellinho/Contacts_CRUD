import React from "react";
import UserRegister from "../UserRegister";
import { Container, Card } from "react-bootstrap";
import Header from "../Header";
import styles from "./styles.module.css";

export default function FirstRegister() {
  return (
    <div className={styles.container}>
      <Header />
      <Container className="container">
        <div className="row justify-content-center">
          <Card className="col-8 mt-5">
            <Card.Body>
              <Card.Title className="text-center font-weight-bold">
                Cadastro usuário
              </Card.Title>
              <UserRegister />
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}
