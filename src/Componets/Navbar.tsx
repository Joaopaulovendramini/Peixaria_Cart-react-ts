import { Button } from "@material-tailwind/react";

const Navbar = () => {
  return (
    <header>
      <nav className="flex p-6 items-center shadow-lg justify-between">
        <div className="logo w-10">
          <img
            src="https://static.vecteezy.com/system/resources/previews/014/033/577/non_2x/blue-fish-transparent-free-png.png"
            alt=""
          />
        </div>

        <ul className="flex gap-5  justify-center">
          <li>
            <a href="" className="text-blue-500 hover:text-blue-700 ">
              Home
            </a>
          </li>
          <li>
            <a href="" className="text-blue-500 hover:text-blue-700 ">
              Contact
            </a>
          </li>
          <li>
            <a href="" className="text-blue-500 hover:text-blue-700 ">
              Help us
            </a>
          </li>
        </ul>

        <Button
          variant="outlined"
          className="text-blue-500 border-blue-500 hover:shadow-md"
        >
          Login
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
