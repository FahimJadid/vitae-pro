import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { UserButton, useUser } from "@clerk/clerk-react";

const Header = () => {
  const { isSignedIn } = useUser();
  return (
    <div className="p-3 px-5 flex justify-between shadow-md">
      <img src="/logo.svg" width={50} height={50} alt="" />

      {isSignedIn ? (
        <div className="flex gap-2 items-center">
          <Link to={"/auth/sign-in"}>
            <Button variant="ghost">Dashboard</Button>
        </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <Button variant="destructive">Get Started</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
