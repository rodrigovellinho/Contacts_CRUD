import React, { useContext, useState } from "react";
import { UserContext } from "../../hooks/useUsers";
import { Container, Card, Button } from "react-bootstrap";
import AddressField from "../AddressField";
import styles from "./styles.module.css";

export default function AddressRegister({ selectedUser }) {
  const { users, editUser } = useContext(UserContext);

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
    <div className={styles.container}>
      <Card style={{ border: "none" }}>
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

      <Button
        className="btn btn-primary"
        className={styles.buttonNewAddress}
        onClick={() => addAddress()}
      >
        Adicionar Endereço
      </Button>
    </div>
  );
}
