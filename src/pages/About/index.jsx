import { NavLink } from 'react-router';

export default function AboutView() {
  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome to the About page!</p>
      <NavLink to='/'>Home</NavLink>
    </div>
  );
}
