import { getUsers } from "@/lib/users";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const users = await getUsers();
  return (
    <div className=" grid md:grid-cols-3 sm:grid-cols-2 text-center">
      {users.map((user) => {
        return (
          <div
            className=" p-2 bg-slate-200 m-1 rounded hover:bg-slate-300 hover:text-blue-950 duration-500"
            key={user.id}
          >
            <Link href={`/post/${user.id}?name=${user.name}`}>
              <h1>Name: {user.name}</h1>
              <p>Email: {user.email}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
