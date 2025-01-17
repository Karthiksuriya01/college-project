import { BookOpen, Home, Search, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";


const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 z-40 w-64 h-screen p-5">
        <aside className="space-y-5">
            <div className=" flex justify-between text-white text-2xl font-semibold flex items-center " >
                <div className="flex items-center">
                    <img src="public\logo.png"  alt="" className="w-10 h-10"/>
                    CREMS 
                </div>
                <div>
                    <ModeToggle/>
                </div>
            </div>
            <nav>
                <ul className="space-y-4 align-middle">
                    <li>
                        <NavLink
                            to={'/home'}
                            className={
                                ({ isActive }) => {
                                return isActive ? "flex gap-3 text-20 items-center p-3 rounded-lg bg-[#00FF38] text-black transition-colors" : "flex rounded-lg gap-3 p-3 text-20 items-center hover:bg-gray-600 text-none text-white";
                                }}
                           
                        >
                           <Home size={20}/> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/resources'}
                            className={
                                ({ isActive }) => {
                                return isActive ? "flex gap-3 text-20 items-center p-3 rounded-lg bg-[#00FF38] text-black transition-colors" : "flex rounded-lg gap-3 p-3 text-20 items-center hover:bg-gray-700 text-none text-white";
                                }}
                        >
                           <BookOpen size={20}/> Resources
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/search'}
                            className={
                                ({ isActive }) => {
                                return isActive ? "flex gap-3 text-20 items-center p-3 rounded-lg bg-[#00FF38] text-black transition-colors" : "flex rounded-lg gap-3 p-3 text-20 items-center hover:bg-gray-600 text-none text-white";
                                }}
                        >
                           <Search size={20}/> Search
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/profile'}
                            className={
                                ({ isActive }) => {
                                return isActive ? "flex gap-3 text-20 items-center p-3 rounded-lg bg-[#00FF38] text-black transition-colors" : "flex rounded-lg gap-3 p-3 text-20 items-center hover:bg-gray-600 text-none text-white";
                                }}
                        >
                           <User size={20}/> Profile
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    </div>
  )
}

export default SideBar;
