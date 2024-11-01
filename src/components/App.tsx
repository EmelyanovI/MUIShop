import { Suspense, useState } from "react";
import React from "react";
import Header from "./Header";
import Basket from "./Basket";
import GoodsList from "./GoodsList";
import Search from "./Search";
import Snack from "./Snack";
import { GoodsItem, OrderItem, BasketItemProps } from "../types/types";
import { goods } from "../data/goods";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";


const App: React.FC = () => {
	// Состояние для хранения заказа
	const [order, setOrder] = useState<OrderItem[]>([]);
	// Состояние для поиска
	const [search, setSearch] = useState<string>("");
	// Состояние для хранения продуктов
	const [products, setProducts] = useState<GoodsItem[]>(goods);
	// Состояние для открытия корзины
	const [isCartOpen, setCartOpen] = useState<boolean>(false);
	// Состояние для открытия уведомления о добавлении товара
	const [isSnackOpen, setSnackOpen] = useState<boolean>(false);

	// Функция для обработки изменений в поле поиска
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.value) {
			// Если поле пустое, показываем все товары
			setProducts(goods);
			setSearch("");
			return;
		}

		// Обновляем состояние поиска и фильтруем продукты
		setSearch(e.target.value);
		setProducts(
			goods.filter((good) =>
				good.name.toLowerCase().includes(e.target.value.toLowerCase())
			)
		);
	};

	// Функция для добавления товара в заказ
	const addToOrder = (goodsItem: GoodsItem) => {
		let quantity = 1;
		const indexInOrder = order.findIndex((item) => item.id === goodsItem.id);

		if (indexInOrder > -1) {
			// Если товар уже в заказе, увеличиваем его количество
			quantity = order[indexInOrder].quantity + 1;

			setOrder(
				order.map((item) => {
					if (item.id !== goodsItem.id) return item;

					// Обновляем количество товара в заказе
					return {
						...item,
						quantity,
					};
				})
			);
		} else {
			// Если товар новый, добавляем его в заказ
			setOrder([
				...order,
				{
					id: goodsItem.id, // id остается числом
					name: goodsItem.name,
					price: goodsItem.price,
					quantity,
				},
			]);
		}

		// Открываем уведомление о добавлении товара
		setSnackOpen(true);
	};

	// Функция для удаления товара из заказа
	const removeFromOrder = (goodsItemId: number) => {
		// Удаляем товар из заказа по его id
		setOrder(order.filter((item) => item.id !== goodsItemId));
	};

	// Функция для получения общего количества товаров в заказе
	const getTotalQuantity = (): number => {
		return order.reduce((total, item) => total + item.quantity, 0);
	};

	// Преобразуем заказ для отображения в корзине
	const orderForBasket: BasketItemProps[] = order.map((item) => ({
		id: item.id.toString(), // Преобразуем id в строку
		name: item.name,
		price: item.price,
		quantity: item.quantity,
		// Удаляем товар из заказа по его id (строковому)
		removeFromOrder: (id: string) => removeFromOrder(parseInt(id)),
	}));

	const [theme, colorMode] = useMode();
	return (
		<>
			<Suspense>
				<ColorModeContext.Provider value={colorMode}>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<Header
							handleCart={() => setCartOpen(true)}
							orderLen={getTotalQuantity()}
						/>
						<Container
							sx={{
								mt: "20px",
								mb: "40px",
							}}
						>
							<Search value={search} onChange={handleChange} />
							<GoodsList goods={products} setOrder={addToOrder} />
						</Container>
						<Basket
							order={orderForBasket}
							// Удаляем товар из заказа по его id (строковому)
							removeFromOrder={(id) => removeFromOrder(parseInt(id))}
							cartOpen={isCartOpen}
							closeCart={() => setCartOpen(false)}
						/>
						<Snack
							isOpen={isSnackOpen}
							handleClose={() => setSnackOpen(false)}
						/>
					</ThemeProvider>
				</ColorModeContext.Provider>
			</Suspense>
		</>
	);
};

export default App;
