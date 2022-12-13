import { MouseEvent, ReactNode } from "react";

interface Props {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

const Button: React.FC<Props> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
