import cn from "classnames";
import styles from "./container.module.css";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  Component?: React.ElementType;
}

const Container: React.FC<ContainerProps> = ({
  Component = "div",
  children,
  className,
}) => {
  return (
    <Component className={cn([styles.container, className])}>
      {children}
    </Component>
  );
};

export default Container;
