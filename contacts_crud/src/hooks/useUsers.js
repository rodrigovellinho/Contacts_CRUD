import { createContext, useReducer } from "react";

const ACTIONS = {
  DELETE_USER: "DELETE_USER",
  ADD_TRANSACTION: "ADD_USER",
};

function UsersReducer(state, action) {
  switch (action.type) {
    case ACTIONS.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case ACTIONS.ADD_USER:
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    case ACTIONS.EDIT_USER:
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    default:
      return state;
  }
}

//Initial state
const users = {
  users: [
    {
      id: 0,
      name: "Rodrigo",
      email: "rodrigo@gmail.com",
      password: "123",
      phones: [],
    },
    {
      id: 1,
      name: "Rafael",
      email: "rafael@gmail.com",
      password: "123",
      phones: [],
    },
    {
      id: 2,
      name: "Pedro",
      email: "pedro@gmail.com",
      password: "123",
      phones: [],
    },
  ],
};

// Create Context
export const UserContext = createContext(users);

// Provider Component
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UsersReducer, users);

  function deleteUser(id) {
    dispatch({
      type: ACTIONS.DELETE_USER,
      payload: id,
    });
  }

  function addUser(addedUser) {
    dispatch({
      type: ACTIONS.ADD_USER,
      payload: addedUser,
    });
  }

  function editUser(user) {
    dispatch({
      type: ACTIONS.EDIT_USER,
      payload: user,
    });
  }

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        deleteUser,
        addUser,
        editUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
