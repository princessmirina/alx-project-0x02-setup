import Header from "../components/layout/Header";
import UserCard from "../components/common/UserCard";
import { useEffect, useState } from "react";
import { UserProps } from "../interfaces";

export default function Users() {
  return (
    <div>
      <Header />
      <main className="p-8 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Users</h1>
        {users.map((user) => (
          <UserCard
            key={user.email}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </main>
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: UserProps[] = await res.json();

  return {
    props: {
      users: data,
    },
  };
}
