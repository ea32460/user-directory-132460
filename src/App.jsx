

//Student:Emine Shabani | ID:132460



import { useState} from "react";
import{useEffect} from "react";
import {useMemo} from "react";

import UserCard from "./components/UserCard";
import RegisterUser from "./components/RegisterUser";

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                if (!res.ok) throw new Error("Error fetching data");
                return res.json();
            })
            .then((data) => {
                const updatedUsers = data.map((user) => ({
                    ...user,
                    rating: 5,
                    verified: false,
                }));
                setUsers(updatedUsers);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const addUser = (newUser) => {
        setUsers([...users, {...newUser, id: users.length + 1}]);
    };
    const averageRating = useMemo(() => {
        if (users.length === 0) return 0;
        const total = users.reduce((sum, u) => sum + Number(u.rating), 0);
        return (total / users.length).toFixed(2);
    }, [users]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Users</h1>

            <h3>Average Rating: {averageRating}</h3>

            <RegisterUser addUser={addUser}/>

            {users.map((user) => (
                <UserCard key={user.id} user={user}/>
            ))}
        </div>
    );


}

export default App;