import React from "react";
import axios from "axios";
import { Card, Button, Form } from "react-bootstrap";
import styles from "./styles.module.css";

export default ({ values, onChange }) => {
  const getAddress = async () => {
    try {
      const info = await axios.get(
        `https://viacep.com.br/ws/${values.cep}/json/`
      );
      onChange(info.data.cep, "cep");
      onChange(info.data.logradouro, "logradouro");
      onChange(info.data.bairro, "bairro");
      onChange(info.data.localidade, "localidade");
      onChange(info.data.uf, "uf");
    } catch (error) {
      alert("Erro ao procurar CEP, tente outra vez");
    }
  };

  return (
    <Form className="border p-1" style={{ borderRadius: "5px" }}>
      <Form.Label className="font-weight-bold h5">Endereço</Form.Label>

      <Form.Group>
        <div className="row">
          <div className="col-2 mt-1">
            <Form.Label>CEP:</Form.Label>
          </div>
          <div className="col-7">
            <Form.Control
              value={values.cep}
              onChange={(e) => onChange(e.target.value, "cep")}
            />
          </div>
          <div className="col-2">
            <Button className="btn btn-dark" onClick={getAddress}>
              Procurar
            </Button>
          </div>
        </div>
      </Form.Group>

      <Form.Group>
        <div className="row">
          <div className="col-2 mt-1">
            <Form.Label>Logradouro:</Form.Label>
          </div>
          <div className="col-9">
            <Form.Control
              value={values.logradouro}
              onChange={(e) => onChange(e.target.value, "logradouro")}
            />
          </div>
        </div>
      </Form.Group>

      <Form.Group>
        <div className="row">
          <div className="col-2 mt-1">
            <Form.Label>Bairro:</Form.Label>
          </div>
          <div className="col-9">
            <Form.Control
              value={values.bairro}
              onChange={(e) => onChange(e.target.value, "bairro")}
            />
          </div>
        </div>
      </Form.Group>

      <Form.Group>
        <div className="row">
          <div className="col-2 mt-1">
            <Form.Label>Localidade:</Form.Label>
          </div>
          <div className="col-9">
            <Form.Control
              value={values.localidade}
              onChange={(e) => onChange(e.target.value, "localidade")}
            />
          </div>
        </div>
      </Form.Group>

      <Form.Group>
        <div className="row">
          <div className="col-2 mt-1">
            <Form.Label>UF:</Form.Label>
          </div>
          <div className="col-9">
            <Form.Control
              className={styles.input}
              value={values.uf}
              onChange={(e) => onChange(e.target.value, "uf")}
            />
          </div>
        </div>
      </Form.Group>

      <div>
        <Button className="btn btn-primary">Salvar</Button>
      </div>
    </Form>
  );
};
