import { NavLink } from 'react-router-dom';

const style = ({ isActive }) => (isActive ? 'active' : undefined);

export default function NavBar() {
  return (
    <nav class="nav">
      <NavLink to="/" className={style}>
        Home
      </NavLink>
      <NavLink to="/new" className={style}>
        New Tweet
      </NavLink>
    </nav>
  );
}
