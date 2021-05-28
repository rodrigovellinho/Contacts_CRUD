import React, { useContext } from "react";
import { UserContext } from "../../hooks/useUsers";
import PersonnalRegister from "../PersonnalRegister";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Header from "../Header";
import AddressRegister from "../AddressRegister";
import PhoneRegister from "../PhoneRegister";
import styles from "./styles.module.css";

export default function CompleteRegister({ selectedUser }) {
  const { addUser } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <Header />
      <Card className="mt-2">
        <div className="text-center bg-dark text-white">
          <Card.Header className="font-weight-bold h3">
            Cadastro usuário
          </Card.Header>
        </div>

        <div className="container-fluid">
          <div className="row p-1">
            <div className="col-6 p-1">
              <PersonnalRegister
                selectedUser={selectedUser}
                addUser={addUser}
              />
            </div>
            <div className="col-6 p-1">
              <PhoneRegister selectedUser={selectedUser} />
            </div>
          </div>
        </div>

        <AddressRegister selectedUser={selectedUser} />

        <Link to="/">
          <Button className="btn-lg btn-danger float-right mr-2 mb-2">
            Voltar ao menu
          </Button>
        </Link>
      </Card>
    </div>
  );
}
