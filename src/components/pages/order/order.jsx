import { useState } from "react";
import {
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
} from "./styled";
import Container from "../../layout/container/container";
import Title from "../../ui/title/title";
import Checkbox from "../../ui/checkbox/checkbox";
import Button from "../../ui/button/button";
import { SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Scrollbar } from "swiper/modules";
import "swiper/css/bundle";
import ProductCard from "../../ui/product-card/product-card";

const Order = ({ products }) => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [address, setAddress] = useState("");
  const [swiperRef, setSwiperRef] = useState(null);

  const selectedProducts = selectedIds.map((id) =>
    products.find((product) => product.id === id)
  );
  const fullPrice = selectedProducts.reduce(
    (summ, product) => (summ += product.price),
    0
  );

  const handleOnClickProduct = (value) => {
    if (!selectedIds.includes(value)) {
      swiperRef.slideTo(value, 0);
    }
  };

  const handleBuyClick = () => {
    alert(`Спасибо за заказ, вы купили:\n${selectedProducts.map(
      (product) => `${product.name} - ${product.price} руб.\n`
    )}
    Итого: ${fullPrice} руб.
    Доставка по адресу: ${address}.`);
  };
  return (
    <OrderSection>
      <Container>
        {products?.length ? (
          <OrderForm>
            <OrderDetails>
              <OrderFormSection>
                <Title size={"extra-small"} level={2}>
                  Выберите продукты
                </Title>
                <CheckboxList>
                  {products.map((product) => (
                    <li key={product.id}>
                      <Checkbox
                        selectedIds={selectedIds}
                        labelComponent={CheckboxLabel}
                        text={product.name}
                        name={"selected-products"}
                        value={product.id}
                        onChange={setSelectedIds}
                        onClick={handleOnClickProduct}
                      />
                    </li>
                  ))}
                </CheckboxList>
              </OrderFormSection>
              <OrderFormSection>
                <Title size={"extra-small"} level={2}>
                  Сделать заказ
                </Title>
                <AddressInput
                  type="text"
                  placeholder="Введите адрес доставки"
                  onChange={(e) => setAddress(e.target.value)}
                />
                <OrderPriceLabel>Цена</OrderPriceLabel>
                <OrderPriceValue>{fullPrice} руб.</OrderPriceValue>
                <Button
                  isFormButton
                  disabled={!(selectedProducts.length && address)}
                  onClick={handleBuyClick}
                >
                  Купить
                </Button>
              </OrderFormSection>
            </OrderDetails>
            <ProductSwiper
              onSwiper={setSwiperRef}
              modules={[Mousewheel, Pagination, Scrollbar]}
              spaceBetween={12}
              direction="vertical"
              slidesPerView="auto"
              scrollbar={{ draggable: true }}
              mousewheel
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </ProductSwiper>
          </OrderForm>
        ) : (
          <Title size={"big"} level={1}>
            Продукты были очень вкучные и их разобрали
          </Title>
        )}
      </Container>
    </OrderSection>
  );
};

export default Order;
