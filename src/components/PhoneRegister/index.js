import React, { useState, useContext } from "react";
import { UserContext } from "../../hooks/useUsers";
import InputMask from "react-input-mask";
import { Container, Card, Form, Button, Row } from "react-bootstrap";
import styles from "./styles.module.css";

export default function PhoneRegister({ selectedUser }) {
  const { users, addUser } = useContext(UserContext);
  const [phones, setPhones] = useState([
    {
      id: 1,
      number: "",
    },
  ]);

  function handleChangePhone(value, id) {
    setPhones((prevState) => {
      return prevState.map((phone) => ({
        ...phone,
        number: phone.id === id ? value : phone.number,
      }));
    });
  }

  function addPhone() {
    setPhones((prevState) => [
      ...prevState,
      {
        id: Math.floor(Math.random() * 1000),
        phone: "",
      },
    ]);
  }

  function handleAddPhones(e) {
    e.preventDefault();

    addUser(phones);

    console.log(phones);
  }

  return (
    <Card className="mt-2 p-1">
      <Form>
        <Form.Label className="font-weight-bold h5">Telefone</Form.Label>

        <Container>
          <Row>
            {phones.map((phone) => (
              <Form.Group className="mr-3">
                <Form.Label>Telefone:</Form.Label>
                <InputMask
                  className={styles.inputMask}
                  mask="(99)99999-9999"
                  value={phone.number}
                  onChange={(e) => handleChangePhone(e.target.value, phone.id)}
                />
              </Form.Group>
            ))}
          </Row>
        </Container>

        <Button
          className="btn-block  btn-primary float-center"
          onClick={addPhone}
        >
          Adicionar
        </Button>
      </Form>
    </Card>
  );
}
