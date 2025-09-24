import { CardProps } from "../../interfaces";

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2">{content}</p>
    </div>
  );
};

export default Card;
