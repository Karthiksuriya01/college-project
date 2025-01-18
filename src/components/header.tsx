import { SignedOut, SignInButton } from "@clerk/clerk-react";
import { Input } from "./ui/input";

const Header = () => {
  return (
    <header>
      <Input/>
       <SignedOut>
          <SignInButton />
        </SignedOut>
    </header>
  );
}

export default Header;
