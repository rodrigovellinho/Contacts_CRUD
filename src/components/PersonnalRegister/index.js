import React from "react";
import { Card, Form } from "react-bootstrap";

export default function PersonnalRegister({ selectedUser }) {
  return (
    <Card className="mt-2 border p-1">
      <Form>
        <Form.Label className="font-weight-bold h5">Dados pessoais</Form.Label>

        <Form.Group>
          <div className="row">
            <div className="col-1 mt-1">
              <Form.Label>Nome:</Form.Label>
            </div>
            <div className="col-10">
              <Form.Control value={selectedUser.name} />
            </div>
          </div>
        </Form.Group>

        <Form.Group>
          <div className="row">
            <div className="col-1 mt-1">
              <Form.Label>Email:</Form.Label>
            </div>
            <div className="col-10">
              <Form.Control value={selectedUser.email} />
            </div>
          </div>
        </Form.Group>

        <Form.Group>
          <div className="row">
            <div className="col-1 mt-1">
              <Form.Label>Senha:</Form.Label>
            </div>
            <div className="col-10">
              <Form.Control value={selectedUser.password} />
            </div>
          </div>
        </Form.Group>
      </Form>
    </Card>
  );
}
