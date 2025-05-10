import { NavLink } from 'react-router';
export default function IndexPage() {
  return (
    <div>
      <h1>Index Page</h1>
      <p>Welcome to the Index page!</p>
      <NavLink to='/about'>About</NavLink>
    </div>
  );
}
