import styled from "styled-components";
import Title from "../../ui/title/title";

const FeaturesContent = styled.section`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FeatureTitle = styled(Title)`
  margin-bottom: 64px;
`;

const FeaturesList = styled.ul`
  margin: 0;
  margin-bottom: 64px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

const FeatureItem = styled.li`
  margin-right: ${(props) => props.theme.indent};
  margin-bottom: ${(props) => props.theme.indent};

  &:nth-last-child(-n + 2) {
    margin-bottom: 0;
  }

  &:nth-child(even) {
    margin-right: 0;
  }
`;

export { FeaturesContent, FeatureTitle, FeaturesList, FeatureItem };
