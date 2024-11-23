import { createContext, useContext } from 'react';
import useUsers from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/common/users/useUsers.js';

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