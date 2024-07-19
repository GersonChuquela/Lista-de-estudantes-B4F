import { Link, useSearchParams } from "react-router-dom";

export const NavBar =() => {

    const NavLink = ({ to, children, className }) => (
        <Link to={to} className={`text-gray-700 font-bold ${className}`}>
          {children}
        </Link>
      );

    return (
        
        <nav className="space-x-8 ">
      
        <NavLink to="/" className=" hover:text-white">
          Página Inicial
        </NavLink>

        <NavLink to="/users" className=" hover:text-white">
          Estudantes
        </NavLink>
        
        <NavLink to="/about" className=" hover:text-white">
          Contactos
        </NavLink>

      </nav>
     
    );
};