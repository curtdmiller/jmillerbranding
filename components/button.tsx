import styles from "./button.module.css";
import clsx from "clsx";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  size?: "regular" | "huge";
}

export default function Button({ children, size, ...rest }: ButtonProps) {
  return (
    <button
      className={clsx(styles.root, size == "huge" && styles.huge)}
      {...rest}
    >
      {children}
    </button>
  );
}
