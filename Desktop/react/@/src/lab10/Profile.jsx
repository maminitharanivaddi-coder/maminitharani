import { useContext } from "react";
import { UserContext } from "./UserContext";
 
function Profile() {
  const { user, setUser } = useContext(UserContext);
 
  return (
    <div>
      <h2>Context API Example</h2>
      <h3>Username: {user}</h3>
      <button onClick={() => setUser("React Student")}>
        Change User
      </button>
    </div>
  );
}
 
export default Profile;