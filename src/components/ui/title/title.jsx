import StyledTitle from "./styled";

const Title = ({ className, size, level, children }) => (
  <StyledTitle className={className} $size={size} as={`h${level}`}>
    {children}
  </StyledTitle>
);

export default Title;
