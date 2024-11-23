import { createContext, useState, useContext, useEffect } from 'react';
import useUsers from './useUsers';

const UserContext = createContext();

const useUserContext = () => {
  return useContext(UserContext);
}

const UserProvider = ({ children }) => {
  const { allUsers, selectedUser, loading, setSelectedUser } = useUsers();

  return (
    <UserContext.Provider value={{ allUsers, selectedUser, loading, setSelectedUser }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, useUserContext, UserProvider };