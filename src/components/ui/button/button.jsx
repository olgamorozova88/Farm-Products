import StyledButton from "./styled";

const Button = ({
  minWidth,
  link,
  isMainLink,
  isFormButton,
  children,
  onClick,
  ...props
}) => (
  <StyledButton
    $minWidth={minWidth}
    {...(link ? { to: link } : { as: "button" })}
    {...(isFormButton ? { type: "submit" } : { type: "button" })}
    $isMainLink={isMainLink}
    onClick={onClick}
    {...props}
  >
    {children}
  </StyledButton>
);

export default Button;
