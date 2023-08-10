import eatImg from "../assets/img/eat.svg";
import sproutImg from "../assets/img/sprout.svg";
import garbageImg from "../assets/img/garbage.svg";
import noMeatImg from "../assets/img/no-meat.svg";

const features = [
  {
    id: 1,
    owner: "Фермерские продукты",
    title: "Еда намного вкуснее",
    text: "Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники",
    isNegative: false,
    img: `${eatImg}`,
  },
  {
    id: 2,
    owner: "Магазинные продукты",
    title: "Просроченные продукты",
    text: "Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара",
    isNegative: true,
    img: `${garbageImg}`,
  },
  {
    id: 3,
    owner: "Фермерские продукты",
    title: "Натуральные продукты",
    text: "Поставляем местные органические продукты выращенные без пестицидов и химических удобрений.",
    isNegative: false,
    img: `${sproutImg}`,
  },
  {
    id: 4,
    owner: "Магазинные продукты",
    title: "Некачественное мясо",
    text: "Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов",
    isNegative: true,
    img: `${noMeatImg}`,
  },
];

export default features;
