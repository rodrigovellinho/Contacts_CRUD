import React from "react";
import CreateNewUser from "../components/CreateNewUser";
import Header from "../components/Header";
import UserList from "../components/UserList";
import styles from "../styles/global.module.css";

export default function main() {
  return (
    <div className={styles.container}>
      <Header />
      <CreateNewUser />
      <UserList />
    </div>
  );
}
