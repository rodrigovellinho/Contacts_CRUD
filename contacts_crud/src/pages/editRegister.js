import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../hooks/useUsers";
import CompleteRegister from "../components/CompleteRegister";
import styles from "../styles/global.module.css";

export default function EditRegister(props) {
  const { users } = useContext(UserContext);

  const [selectedUser, setSelectedUser] = useState({});

  const currentUserId = props.match.params.id;

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find((user) => user.id === Number(userId));
    setSelectedUser(selectedUser);
  }, [currentUserId, users]);

  return (
    <div className={styles.container}>
      <CompleteRegister selectedUser={selectedUser} />
    </div>
  );
}
