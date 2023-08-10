import styled from "styled-components";
import Title from "../title/title";

const ProductCardWrapper = styled.article`
  position: relative;
  display: flex;
  width: 727px;
  height: 288px;
  padding: ${(props) => props.theme.indent};
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.whiteColor};
`;

const ProductImage = styled.img`
  display: block;
  width: 248px;
  height: 248px;
  object-fit: cover;
  margin-right: ${(props) => props.theme.indent};
`;

const ProductDetails = styled.div`
  min-height: 248px;
  position: relative;
`;

const ProductTitle = styled(Title)`
  margin-bottom: 24px;
`;

const ProductPriceAndWeight = styled.span`
  position: absolute;
  bottom: 0;
  display: inline-block;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 700;
  background-color: ${(props) => props.theme.bgColor};
`;

export {
  ProductCardWrapper,
  ProductImage,
  ProductDetails,
  ProductPriceAndWeight,
  ProductTitle,
};
