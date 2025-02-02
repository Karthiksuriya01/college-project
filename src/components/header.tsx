import { SignedOut, SignInButton, useUser } from "@clerk/clerk-react";
import { Input } from "./ui/input";
import { Search} from "lucide-react";
import { Button } from "./ui/button";
import { NavLink } from "react-router-dom";



const Header = () => {
  const {user,isLoaded} = useUser()
  return (
    <header className="flex items-center justify-between p-4 bg-black text-white border-b">
      <div className="flex items-center w-80 rounded-lg bg-[#121212] border-6">
      <Search className="p-3" size={45}/>
      <Input className="bg-[#121212]" placeholder="Search..."/>
      </div>
      <div>

        {
          user?.unsafeMetadata.role === "admin" ? (
            <NavLink to="/createvent">
              <Button >Create Event</Button>
            </NavLink>
            
          ) : (
              <SignedOut>
      <SignInButton />
    </SignedOut>
          )
        }
        
      </div>
    
    </header>
  );
}

export default Header;
