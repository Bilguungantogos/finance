import Link from "next/link";
import React from "react";
import ExpenseForm from "../ExpenseForm";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "@/context/UserProvider";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

const navigations = [
  { name: "Dashboard", path: "/" },
  { name: "Records", path: "/records" },
];

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const closeForm = () => {
    setOpen(false);
  };
  const toprofilepage = () => {
    router.push("/profile");
  };

  const { user, logout } = useContext(UserContext);
  const isActive = usePathname();

  return (
    <header className="flex items-center justify-between px-[120px] py-4">
      <div className="flex gap-6">
        <Link href="./">
          <img src="./vector.svg" className="w-[27.7px] h-[27.3px]" />
        </Link>
        {navigations.map((navigation, i) => (
          <Link
            className={`transition-all duration-75 ${
              isActive === navigation.path
                ? "font-semibold"
                : "hover:font-semibold "
            }`}
            key={i}
            href={navigation.path}
          >
            {navigation.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-6">
        <button
          className="btn btn-primary rounded-[20px] text-white px-4 h-[32px]"
          onClick={() => {
            setOpen(true);
          }}
        >
          <img src="./plus.svg" className="w-5 h-5"></img>Record
        </button>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img src="./avatar.png" className="w-10 h-10"></img>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={toprofilepage}>Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={logout}>Logout</a>
            </li>
          </ul>
        </div>
        <p></p>
      </div>
      <ExpenseForm open={open} closeForm={closeForm} />
    </header>
  );
};

export default Header;
