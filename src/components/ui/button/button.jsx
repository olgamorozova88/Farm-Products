import StyledButton from "./styled";

const Button = ({
  className,
  minWidth,
  link,
  isFormButton,
  children,
  onClick,
  ...props
}) => (
  <StyledButton
    className={className}
    $minWidth={minWidth}
    {...(link ? { to: link } : { as: "button" })}
    {...(isFormButton ? { type: "submit" } : { type: "button" })}
    onClick={onClick}
    {...props}
  >
    {children}
  </StyledButton>
);

export default Button;
