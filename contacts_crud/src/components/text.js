import { useState } from "react";
import InputMask from "react-input-mask";
import "./styles.css";

const AddressField = ({ values, onChange }) => (
  <div>
    <fieldset>
      <label>CEP</label>
      <input
        value={values.cep}
        onChange={(e) => onChange(e.target.value, "cep")}
      />
    </fieldset>
    <fieldset>
      <label>Endereço</label>
      <input
        value={values.address}
        onChange={(e) => onChange(e.target.value, "address")}
      />
    </fieldset>
  </div>
);

export default function App() {
  const [phones, setPhones] = useState([
    {
      id: 1,
      number: "",
      cep: "",
    },
  ]);

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      cep: "",
      address: "",
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

  function handleAddressChange(value, field, id) {
    setAddresses((prevState) => {
      return prevState.map((address) => ({
        ...address,
        [field]: address.id === id ? value : addAddress[field],
      }));
    });
  }

  function addAddress() {
    setAddresses((prevState) => [
      ...prevState,
      {
        id: Math.floor(Math.random() * 1000),
        cep: "",
        address: "",
      },
    ]);
  }

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
      }}
    >
      {phones.map((phone) => (
        <InputMask
          mask="(99)9999-9999"
          value={phone.number}
          onChange={(e) => handleChangePhone(e.target.value, phone.id)}
          style={{ marginBottom: "1rem" }}
        />
      ))}
      <button onClick={() => addPhone()}>Add</button>

      {addresses.map((address) => (
        <AddressField
          values={address}
          onChange={(value, field) =>
            handleAddressChange(value, field, address.id)
          }
        />
      ))}
      <button onClick={() => addAddress()}>Add</button>
    </div>
  );
}
