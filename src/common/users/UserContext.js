import { createContext, useState, useContext, useEffect } from 'react';
import getAllUsers from './getAllUsers';  

const UserContext = createContext();

const useUserContext = () => {
  return useContext(UserContext);
}

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getAllUsers(); 
        setUsers(fetchedUsers);  
        
        if (fetchedUsers.length > 4) {  
          setCurrentUser(fetchedUsers[4]);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchUsers();
  }, [])

  return (
    <UserContext.Provider value={{ users, currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, useUserContext, UserProvider };