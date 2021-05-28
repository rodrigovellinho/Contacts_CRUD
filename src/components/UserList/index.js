import React, { useContext } from "react";
import { UserContext } from "../../hooks/useUsers";
import { Container, Card, Table } from "react-bootstrap";
import User from "../User";
import styles from "./styles.module.css";

export default function UserList() {
  const { users, deleteUser } = useContext(UserContext);

  return (
    <Container className="mt-2">
      <Card>
        <Card.Header className="text-white bg-dark mb-3 font-weight-bold h4">
          Lista de usuários
        </Card.Header>

        <Table className="table-bordered w-auto">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Email</th>
              <th scope="col" style={{ textAlign: "center" }}>
                Editar Cadastro
              </th>
              <th scope="col " style={{ textAlign: "center" }}>
                Deletar Usuário
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <User key={user.id} user={user} deleteUser={deleteUser} />
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
}
