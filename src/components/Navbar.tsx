import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "primereact/button";

const Navbar = () => {
  return (
    <div className="flex h-10 w-screen flex-row items-center justify-between bg-purple-100">
      <p className="mx-4 text-lg font-semibold">AlbumNerd</p>
      <div className="mx-4">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <Button label="Sign In" style={{ padding: "2px 8px" }} />
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
};

export default Navbar;
