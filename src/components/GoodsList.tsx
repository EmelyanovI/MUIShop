import React from "react";
import { Grid } from "@mui/material";
import GoodsItemComponent from "./GoodsItem";
import { GoodsListProps } from "../types/types";
import { useTranslation } from "react-i18next";

const GoodsList: React.FC<GoodsListProps> = ({ goods, setOrder }) => {

const {t} = useTranslation("Goods");

  return (
    <Grid container spacing={2}>
      {goods.map((item) => (
        <GoodsItemComponent 
          key={item.id} // Уникальный ключ для каждого элемента
          {...item} // Распаковываем свойства товара
          name={t(`goods.${item.id}`)} // Переводим название товара по ID
          setOrder={setOrder} // Передаем функцию добавления товара в заказ
        />
      ))}
    </Grid>
  );
};

export default GoodsList;
