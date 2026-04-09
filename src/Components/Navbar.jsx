import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="bg-[#0f172a] text-white p-4">
      <div className="flex justify-between">
        <h1 className="text-xl text">Anantha Hotel </h1>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          ☰
        </button>

        <ul className="hidden md:flex gap-6 ">
          <li className="cursor-pointer hover:bg-yellow-300" onClick={() => scrollTo("rooms")}>Rooms</li>
          <li className="cursor-pointer" onClick={() => scrollTo("contact")}>Contact</li>
        </ul>
      </div>

      {open && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden">
          <li className="cursor-pointer" onClick={() => scrollTo("rooms")}>Rooms</li>
          <li className="cursor-pointer" onClick={() => scrollTo("contact")}>Contact</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;