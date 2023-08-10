import { OptionList, OptionItem, OptionProperty } from "./styled";

const ProductInfo = ({ list }) => (
  <OptionList>
    {list.map((item, index) => (
      <OptionItem key={index}>
        <OptionProperty $isBold>{item.property}</OptionProperty>:{" "}
        <OptionProperty>{item.value}</OptionProperty>
      </OptionItem>
    ))}
  </OptionList>
);

export default ProductInfo;
