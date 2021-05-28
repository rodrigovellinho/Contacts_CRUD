import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import AddressField from "../AddressField";

export default function AddressRegister({ selectedUser }) {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      cep: "",
      logradouro: "",
      bairro: "",
      localidade: "",
      uf: "",
    },
  ]);

  function handleAddressChange(value, field, id) {
    setAddresses((prevState) => {
      return prevState.map((address) => ({
        ...address,
        [field]: address.id === id ? value : address[field],
      }));
    });
  }

  function addAddress() {
    setAddresses((prevState) => [
      ...prevState,
      {
        id: Math.floor(Math.random() * 1000),
        cep: "",
        logradouro: "",
        bairro: "",
        localidade: "",
        uf: "",
      },
    ]);
  }

  return (
    <>
      <Card style={{ border: "none" }} className="bg-light">
        <div className="container-fluid">
          <div className="row p-1">
            {addresses.map((address) => (
              <div className="col-6 p-1">
                <AddressField
                  values={address}
                  onChange={(value, field) =>
                    handleAddressChange(value, field, address.id)
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </Card>

      <div className="d-flex flex-row-reverse mr-2 mb-3">
        <Button className="btn-lg btn-primary" onClick={() => addAddress()}>
          Novo Endereço
        </Button>
      </div>
    </>
  );
}
