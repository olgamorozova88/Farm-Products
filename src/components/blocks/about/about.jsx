import { AboutSection, AboutContent, AboutTitle, AboutText } from "./styled";
import Container from "../../layout/container/container";

const About = () => (
  <AboutSection>
    <Container>
      <AboutContent>
        <AboutTitle size={"big"} level={1}>
          Магазин фермерских продуктов с доставкой
        </AboutTitle>
        <AboutText>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </AboutText>
      </AboutContent>
    </Container>
  </AboutSection>
);

export default About;
