
import { ButtonProps } from "../..interfaces";

const Button = ({ size, shape, children, onClick }: ButtonProps) => {
  const sizeClasses =
    size === "small"
      ? "px-2 py-1 text-sm"
      : size === "medium"
      ? "px-4 py-2 text-base"
      : "px-6 py-3 text-lg";

  return (
    <button
      className={${sizeClasses} bg-green-500 text-white ${shape} hover:bg-green-600 transition}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
