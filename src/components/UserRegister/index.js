import React, { useState, useContext } from "react";
import { UserContext } from "../../hooks/useUsers";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function UserRegister() {
  const { addUser } = useContext(UserContext);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  function validateUserName(userName) {
    if (!userName) setErrorName(true);
  }

  function checkEmptyFields(inputArr) {
    return inputArr.some(function (input) {
      return Boolean(!input);
    });
  }

  function validateUserEmail(userEmail) {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
      setErrorEmail(false);
      return;
    }
    setErrorEmail(true);
  }

  function validateUserPassword(userPassword, min, max) {
    if (!userPassword) {
      setErrorPassword(true);
      return;
    } else if (userPassword.length < min || userPassword.lenght > max) {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }
  }

  function handleCreateNewUser(e) {
    e.preventDefault();

    const isRequiredFieldsEmpty = checkEmptyFields([
      userName,
      userEmail,
      userPassword,
    ]);

    if (isRequiredFieldsEmpty) {
      alert("Preencha os campos vazios para inserir usuário no cadastro");
      return;
    }

    console.log(isRequiredFieldsEmpty);

    if (!errorName && !errorEmail && !errorPassword) {
      const addedUser = {
        id: Math.floor(Math.random() * 10000),
        name: userName,
        email: userEmail,
        password: userPassword,
      };

      addUser(addedUser);
      alert("Usuário criado com sucesso");
    } else {
      alert("Ajuste os campos para inserir usuário no cadastro");
    }
  }

  return (
    <Form>
      <Form.Group controlId="formName">
        <div className="row">
          <div className="col-1 mt-1">
            <Form.Label>Nome:</Form.Label>
          </div>
          <div className="col-10">
            <Form.Control
              type="text"
              placeholder="Nome"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              onBlur={(e) => validateUserName(e.target.value)}
              required
            />
          </div>
        </div>
        <Form.Text>
          {errorName ? (
            <small className="text-danger">Escreva um nome válido</small>
          ) : null}
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formEmail">
        <div className="row">
          <div className="col-1 mt-1">
            <Form.Label>Email:</Form.Label>
          </div>
          <div className="col-10">
            <Form.Control
              type="email"
              placeholder="Email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              onBlur={(e) => validateUserEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <Form.Text>
          {errorEmail ? (
            <small className="text-danger">Digite um email válido</small>
          ) : null}
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formPassword">
        <div className="row">
          <div className="col-1 mt-1">
            <Form.Label>Senha:</Form.Label>
          </div>
          <div className="col-10">
            <Form.Control
              type="password"
              placeholder="Senha"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              onBlur={(e) => validateUserPassword(e.target.value, 4, 8)}
              required
            />
          </div>
        </div>

        <Form.Text>
          {errorPassword ? (
            <small className="text-danger">
              Digite uma senha entre 4 e 8 caracteres contendo letras e números
              e um caractere especial
            </small>
          ) : null}
        </Form.Text>
      </Form.Group>

      <div className="row justify-content-center">
        <div className="col-4">
          <input
            class="btn btn-primary"
            type="submit"
            value="Registrar Novo Usuário"
            onClick={handleCreateNewUser}
          />
        </div>

        <div className="col-4">
          <Link to="/">
            <Button type="button" className="btn btn-dark">
              Retornar ao Menu
            </Button>
          </Link>
        </div>
      </div>
    </Form>
  );
}
