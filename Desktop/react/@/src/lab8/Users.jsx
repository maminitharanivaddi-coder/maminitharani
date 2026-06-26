import { useEffect, useState } from "react";
 
function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
 
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
 
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
 
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
 
    fetchUsers();
  }, []);
 
  if (loading) {
    return <h2>Loading users...</h2>;
  }
 
  if (error) {
    return <h2>Error: {error}</h2>;
  }
 
  return (
    <div>
      <h2>Users List</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
 
export default Users;