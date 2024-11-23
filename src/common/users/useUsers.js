import { useState, useEffect } from 'react';
import getCSSVar from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/common/getCSSVar.js';

const useUsers = () => {
    const [loading, setLoading] = useState(true);
    const [selectedUser, setSelectedUser] = useState(null);
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        async function fetchAndSetUsers() {
            try {
                const response = await fetch('http://localhost:3004/users');
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }

                const fetchedUsers = await response.json();

                const newAllUsers = fetchedUsers.map(user => {
                    return {
                        id: user.id,
                        name: `${user.first_name} ${user.last_name}`,
                        initials: `${user.first_name[0]}${user.last_name[0]}`,
                        email: user.email,
                        color: getCSSVar(`--${user.color}Icon`),
                        class: user.class,
                        school: user.school,
                        major: user.major,
                        bio: user.bio,
                        events: [],
                        posts: [],
                        saved: [],
                        display: [],
                        contacts: []
                    };
                });

                setAllUsers(newAllUsers);

                if (allUsers.length > 0) {
                    setSelectedUser(allUsers[0]);
                    console.log("Updated Users array:", allUsers);

                    if (selectedUser !== null) {
                        console.log(selectedUser)
                        setLoading(false);
                    }

                }

            } catch (error) {
                console.error("Failed to fetch users:", error);
            }
        }

        fetchAndSetUsers();

    }, selectedUser);

    return { allUsers, selectedUser, loading, setSelectedUser };
}

export default useUsers;