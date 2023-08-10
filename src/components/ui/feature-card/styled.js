import styled from "styled-components";

const FeatureCardWrapper = styled.section`
  width: 540px;
  min-height: 197px;
  padding: ${(props) => props.theme.indent};
  background-color: ${(props) =>
    props.$isNegative
      ? `${props.theme.featureNegativeColor}`
      : `${props.theme.featurePositiveColor}`};
`;

const FeatureCardHeader = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.indent};

  &::before {
    content: url(${(props) => props.img});
    display: block;
    width: 56px;
    height: 56px;
    margin-right: ${(props) => props.theme.indent};
  }
`;

const FeatureCardIcon = styled.span`
  display: inline-block;
  padding: 4px 10px;
  background-color: ${(props) =>
    props.$isNegative
      ? `${props.theme.featureNegativeIconColor}`
      : `${props.theme.featurePositiveIconColor}`};
  text-align: left;
  margin-bottom: 4px;
  font-size: 14px;
  color: ${(props) => props.theme.whiteColor};
`;

const FeatureCardText = styled.p`
  margin: 0;
`;

export {
  FeatureCardWrapper,
  FeatureCardHeader,
  FeatureCardIcon,
  FeatureCardText,
};
