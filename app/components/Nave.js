import Link from "next/link";
import React from "react";

const Nave = () => {
  return (
    <div className="flex space-x-4 w-96 m-auto  text-center">
      <div className="hover:text-red-300 duration-500">
        <Link href={"/"}>Home</Link>
      </div>
      <div className="hover:text-red-300 duration-500">
        <Link href={"/users"}>Users</Link>
      </div>
    </div>
  );
};

export default Nave;
