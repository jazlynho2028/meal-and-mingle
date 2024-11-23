import getCSSVar from "../getCSSVar";
import AllUsers from "./AllUsers";

// fetch users from database and add them to User
async function getAllUsers() {
    try {
      const response = await fetch("https://disc-assignment-5-users-api.onrender.com/api/users");
      if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      const fetchedUsers = await response.json();
      
      // Map over fetched users to add missing properties with default values
      const newAllUsers = fetchedUsers.map(user => ({
          id: user.id,
          name: `${user.firstName} ${user.lastName}`,
          initials: `${user.firstName[0]}${user.lastName[0]}`,
          color: getCSSVar('--lightGray'),
          class: user.graduationYear,
          school: 'NA',
          major: user.major,
          bio: user.bio,
          events: [],
          posts: [],
          saved: [],
          display: [],
          contacts: []
      }))
  
      // Add new users to the Users array
      AllUsers.push(...newAllUsers);
  
      console.log("Updated Users array:", AllUsers);
      return AllUsers;
    } 
    catch (error) {
      console.error("Failed to fetch users:", error);
    }
  }

  export default getAllUsers;