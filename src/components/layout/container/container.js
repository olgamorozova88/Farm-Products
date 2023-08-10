import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.theme.containerWidth};
  padding: 0 ${(props) => props.theme.containerPadding};
  margin: 0 auto;
`;

export default Container;
