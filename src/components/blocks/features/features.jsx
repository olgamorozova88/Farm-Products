import {
  FeaturesContent,
  FeatureTitle,
  FeaturesList,
  FeatureItem,
} from "./styled";
import FeatureCard from "../../ui/feature-card/feature-card";
import Container from "../../layout/container/container";
import Button from "../../ui/button/button";
import { AppRoutes } from "../../../const";

const Features = ({ features }) => {
  return features?.length ? (
    <section>
      <Container>
        <FeaturesContent>
          <FeatureTitle level={2}>
            Почему фермерские продукты лучше?
          </FeatureTitle>
          <FeaturesList>
            {features.map((feature) => (
              <FeatureItem key={feature.id}>
                <FeatureCard {...feature} />
              </FeatureItem>
            ))}
          </FeaturesList>
          <Button minWidth={260} link={AppRoutes.BUY}>
            Купить
          </Button>
        </FeaturesContent>
      </Container>
    </section>
  ) : null;
};

export default Features;
