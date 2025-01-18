import { SignedOut, SignInButton, useUser } from "@clerk/clerk-react";
import { Input } from "./ui/input";
import { Bell, Search} from "lucide-react";

const Header = () => {
  const {user} = useUser()
  return (
    <header className="flex items-center justify-between p-4 bg-black text-white border-b">
      <div className="flex items-center w-80 bg-background rounded-lg bg-[#121212] border-6">
      <Search className="p-3" size={45}/>
      <Input className="bg-[#121212]" placeholder="Search..."/>
      </div>
      <div>
      {
        user ? <Bell/> :  <SignedOut>
        <SignInButton />
      </SignedOut>
      }
        
      </div>
     
    </header>
  );
}

export default Header;
