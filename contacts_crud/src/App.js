import React from "react";
import { UserProvider } from "./hooks/useUsers";
import CreateNewUser from "./components/CreateNewUser";
import UserList from "./components/UserList";
import styles from "./styles/global.module.css";

function App() {
  return (
    <UserProvider>
      <div className={styles.container}>
        <CreateNewUser />
        <UserList />
      </div>
    </UserProvider>
  );
}

export default App;
