import { BookOpen, Home, Plus, Search, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import { SignedIn, useUser } from "@clerk/clerk-react";
import { UserButton } from "@clerk/clerk-react";
import { SkeletonDemo } from "./skelton";


const SideBar = () => {

  const {user,isLoaded} = useUser()
  const userName = `${user?.fullName}`
  const userEmail = user?.primaryEmailAddress 
  if (!isLoaded) {
    return <SkeletonDemo />
  }
  return (
    <div className="fixed top-0 left-0 z-40 w-64 h-screen p-6 bg-black border-r">
        <aside className="space-y-9">
            <div className=" flex justify-between text-white text-2xl font-semibold items-center " >
                <div className="flex gap-3 justify-center">
                    <div>
                    <SignedIn>
                        <UserButton 
                        appearance={{
                            elements: {
                            avatarBox: "w-10 h-10",
                            },
                        }}/>
                    </SignedIn>
                    </div>
                    <div className="text-xs flex flex-col">
                        {
                            user ? (

                                !isLoaded ? <SkeletonDemo/> : (

                                    <>
                                
                                <span className="text-sm capitalize">{userName}</span>
                                <span className="opacity-50">{userEmail?.emailAddress ?? ''}</span>
                                </>
                                )
                            ) : (

                                
                                !isLoaded ? <SkeletonDemo/> : ( 

                                    <div className="flex items-center text-3xl gap-3">
                    <img src="/logo.png"  alt="" className="w-8 h-8"/>
                    CREMS 
                </div>
                                )
                            )
                        }
                    </div>
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
                    <li>
                        <NavLink
                            to={'/createvent'}
                            className={
                                ({ isActive }) => {
                                return isActive ? "flex gap-3 text-20 items-center p-3 rounded-lg bg-[#00FF38] text-black transition-colors" : "flex rounded-lg gap-3 p-3 text-20 items-center hover:bg-gray-600 text-none text-white";
                                }}
                        >
                          <Plus size={20}/>  Create Event
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    </div>
  )
}

export default SideBar;
