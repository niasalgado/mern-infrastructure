// Don't forget the import
import { Link } from 'react-router-dom';

export default function NavBar({ user }) {
  return (
    <nav>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      {user && <p>Hello, {user.name} </p>}
    </nav>
  );
}