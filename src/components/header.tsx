import { SignedOut, SignInButton } from "@clerk/clerk-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 flex justify-end p-5 shadow z-50">
       <SignedOut>
          <SignInButton />
        </SignedOut>
    </header>
  );
}

export default Header;
