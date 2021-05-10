import { createContext, useState } from "react";
import axios from "axios";

// Create Context
export const AddressContext = createContext([]);

// Provider component
export const AddressDataProvider = ({ children }) => {
  const [addressData, setAddressData] = useState([]);
  const [loadingAddress, setLoadingAddress] = useState(false);

  const getAddress = async (cep) => {
    setLoadingAddress(true);
    try {
      const info = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setAddressData(info.data);

      console.log(addressData);
    } catch (error) {
      setAddressData([]);
    } finally {
      setLoadingAddress(false);
    }
  };

  return (
    <AddressContext.Provider
      value={{
        getAddress,
        addressData,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};
