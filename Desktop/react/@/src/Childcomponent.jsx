import { UserContext } from "./UserContext";
import { useContext } from "react";
function Childcomponent(){

    const user = useContext(UserContext);
    console.log(user);
    return(
        <div>
            <h1>Childcomponent</h1>

            {user && <p>User is activated</p>}
        </div>
    )
}
export default Childcomponent;