import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="flex justify-center w-full bg-white">
      <div className="container flex justify-between items-center gap-10 ">
        <Link to="/">ServiceDesk</Link>
        <Link to="/profile">Борис Иванов</Link>
      </div>
    </header>
  );
};
