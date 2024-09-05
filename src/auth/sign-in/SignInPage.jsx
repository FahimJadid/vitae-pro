import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    // <div className="flex justify-center my-20 items-center">
    //   <SignIn />
    // </div>

    <div className="flex flex-col md:flex-row h-screen">
    {/* Left part with full image */}
    <div className="relative hidden md:block md:w-1/2 h-full">
      <img
        src="/images/world.jpg"
        alt="Background"
        className="object-cover w-full h-full"
      />
      {/* Logo at the top left */}
      <div className="absolute top-4 left-4">
        <img src="/logo.svg" alt="Logo" className="h-12" />
      </div>
      {/* Inspirational text at the bottom */}
      <div className="font-thin absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-sm text-center">
        <p>“Life is not easy for any of us. But what of that? We must have perseverance and, above all, confidence in ourselves. We must believe that we are gifted for something and that this thing must be attained.”</p>
        <span>―Marie Curie</span>
      </div>
    </div>
    {/* Right part with SignIn component */}
    <div className="flex justify-center items-center w-full md:w-1/2 h-full">
      <SignIn />
    </div>
  </div>
  );
};

export default SignInPage;
