import {
  ProductCardWrapper,
  ProductImage,
  ProductDetails,
  ProductPriceAndWeight,
  ProductTitle,
} from "./styled";
import Tabs from "../tabs/tabs";
import ProductInfo from "../product-info/product-info";

const ProductCard = ({ product }) => {
  const tabs = [
    {
      title: "Описание",
      content: product.description,
    },
    {
      title: "Характеристики",
      content: <ProductInfo list={product.specifications} />,
    },
    {
      title: "Свойства",
      content: <ProductInfo list={product.structure} />,
    },
  ];

  return (
    <ProductCardWrapper>
      <ProductImage
        src={product.image}
        width={248}
        height={248}
        alt={product.name}
      />
      <ProductDetails>
        <ProductTitle size={"small"} level={2}>
          {product.name}
        </ProductTitle>
        <Tabs
          tabsList={tabs}
          price={product.price}
          weight={product.weight}
          priceAndWeightComponent={ProductPriceAndWeight}
        />
      </ProductDetails>
    </ProductCardWrapper>
  );
};

export default ProductCard;
