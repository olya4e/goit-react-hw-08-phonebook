import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="title">
      <h1>Phonebook welcome page</h1>
      <p className="wrapper">
        Please, <Link to="/register">Sign up</Link> or{' '}
        <Link to="/register">Log in</Link> your profile!
      </p>
    </div>
  );
};
export default HomePage;
