import {
  FeatureCardWrapper,
  FeatureCardHeader,
  FeatureCardIcon,
  FeatureCardText,
} from "./styled";
import Title from "../title/title";

const FeatureCard = ({ owner, title, text, isNegative, img }) => (
  <FeatureCardWrapper $isNegative={isNegative}>
    <FeatureCardHeader img={img}>
      <div>
        <FeatureCardIcon $isNegative={isNegative}>{owner}</FeatureCardIcon>
        <Title size={"extra-small"} level={3}>
          {title}
        </Title>
      </div>
    </FeatureCardHeader>
    <FeatureCardText>{text}</FeatureCardText>
  </FeatureCardWrapper>
);

export default FeatureCard;
