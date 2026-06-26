import { Outlet } from "react-router-dom";
 
function ContactLayout() {
  return (
    <div>
      <h2>Contact Page</h2>
      <Outlet />
    </div>
  );
}
 
export default ContactLayout;