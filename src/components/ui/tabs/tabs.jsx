import { useState } from "react";
import { TabsHeader, TabsItem, TabsButton, TabsText } from "./styled";

const Tabs = ({ tabsList, priceAndWeightComponent, price, weight }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ProductPriceAndWeightComponent = priceAndWeightComponent;
  return (
    <div>
      <TabsHeader>
        {tabsList.map((tab, index) => (
          <TabsItem key={index}>
            <TabsButton
              $isActive={activeIndex === index}
              {...(activeIndex === index
                ? { as: "span" }
                : { onClick: () => setActiveIndex(index) })}
            >
              {tab.title}
            </TabsButton>
          </TabsItem>
        ))}
      </TabsHeader>
      <TabsText>{tabsList[activeIndex].content}</TabsText>
      {activeIndex === 0 ? (
        <ProductPriceAndWeightComponent>
          {price} руб./{weight} гр.
        </ProductPriceAndWeightComponent>
      ) : null}
    </div>
  );
};

export default Tabs;
