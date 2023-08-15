import { getUser } from "@/lib/users";
import React from "react";

const Author = async ({ id }) => {
  const user = await getUser(id);
  return (
    <p className=" text-right text-green-400 font-bold cursor-pointer hover:text-green-500 duration-500">
      *Author-{user.name}
    </p>
  );
};

export default Author;
