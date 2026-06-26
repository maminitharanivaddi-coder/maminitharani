import { Link } from "react-router-dom";
 
function Products() {
  return (
    <div>
      <h2>Products Page</h2>
      <Link to="/products/101">Product 101</Link>
      <br />
      <Link to="/products/102">Product 102</Link>
    </div>
  );
}
 
export default Products;