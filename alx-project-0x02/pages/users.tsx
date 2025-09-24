import Header from "../components/layout/Header";
import UserCard from "../components/common/UserCard";
import { useEffect, useState } from "react";
import { UserProps } from "../interfaces";

export default function Users() {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
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
