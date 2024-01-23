import { Utensils } from "lucide-react";
import { NavLink } from "react-router-dom";
import InputField from "../InputField";

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center font-medium border-b border-zinc-200/20">
      <div className="flex">
        <Utensils size={28} />
        <h2 className="ml-3 hidden sm:block font-semibold text-2xl">Kardapio</h2>
      </div>
      <form className="w-4/5 sm:w-1/3">
        <InputField placeholder="Search"/>
      </form>
      <nav className="hidden sm:block">
        <ul className="flex *:mx-3">
          <li className="hover:text-zinc-400 transition-all">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:text-zinc-400 transition-all">
            <NavLink to="/restaurants">Restaurants</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
