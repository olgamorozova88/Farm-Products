import styled from "styled-components";
import tick from "../../../assets/img/tick.svg";
import { Swiper } from "swiper/react";

const OrderSection = styled.section`
  width: 100%;
  height: 100%;
  padding: 40px 0;
  background-color: ${(props) => props.theme.mutedColor};
`;

const OrderForm = styled.form`
  position: relative;
  display: flex;
  overflow-y: overlay;
`;

const OrderDetails = styled.div`
  width: 373px;
  padding-right: ${(props) => props.theme.indent};
  max-height: 100%;
`;

const OrderFormSection = styled.fieldset`
  display: block;
  padding: 24px 20px;
  margin: 0;
  margin-bottom: 18px;
  background-color: ${(props) => props.theme.whiteColor};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
`;

const CheckboxLabel = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  padding-left: 0;
  text-align: left;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    ${(props) =>
      props.$isChecked
        ? `
        background-color: ${props.theme.buttonColor};
        background-image: url(${tick});
        background-repeat: no-repeat;
        background-position: center;
      `
        : `
        background-color: ${props.theme.mutedColor};
      `}
  }
`;

const CheckboxList = styled.ul`
  margin: 0;
  margin-top: 12px;
  padding: 0;
  list-style: none;
`;

const AddressInput = styled.input`
  width: 100%;
  margin-top: 24px;
  margin-bottom: ${(props) => props.theme.indent};
  font-size: 14px;
  padding: 14px 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.mutedColor};
  line-height: 1.5;

  &::placeholder {
    font-size: 14px;
    color: ${(props) => props.theme.textColor};
  }
`;

const OrderPriceValue = styled.span`
  display: block;
  font-size: 24px;
  line-height: 1.3;
  font-weight: 700;
  margin-bottom: 32px;
`;

const OrderPriceLabel = styled.span`
  display: block;
  font-size: 14px;
  margin-bottom: 18px;
`;

const ProductSwiper = styled(Swiper)`
  width: 727px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;

  & .swiper-slide {
    flex-shrink: 1;
  }
`;

export {
  OrderSection,
  OrderForm,
  OrderDetails,
  OrderFormSection,
  CheckboxLabel,
  CheckboxList,
  AddressInput,
  OrderPriceLabel,
  OrderPriceValue,
  ProductSwiper,
};
