interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  leftIcon?: JSX.Element;
}

const Button: React.FC<React.PropsWithChildren<IButtonProps>> = ({
  className,
  children,
  leftIcon,
  ...props
}) => {
  return (
    <button className={`${className}`} {...props}>
      {leftIcon && <span>{leftIcon}</span>}
      {children}
    </button>
  );
};

export default Button;
