components / common / UserCard.tsx;

import { UserProps } from "../../interfaces";

const UserCard = ({ name, email, address }: UserProps) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="mt-1">Email: {email}</p>
      <p className="mt-1">
        Address: {address.street}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
