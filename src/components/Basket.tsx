import { Close, ShoppingBasket } from "@mui/icons-material";
import {
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import BasketItem from "./BasketItem";
import React from "react";
import { BasketProps } from "../types/types";

const Basket: React.FC<BasketProps> = ({
	cartOpen,
	closeCart = () => {},
	order = [],
	removeFromOrder,
}) => {
	return (
		<Drawer anchor="right" open={cartOpen} onClose={closeCart}>
			<List sx={{ width: "375px" }}>
				<ListItem>
					<ListItemIcon>
						<ShoppingBasket />
					</ListItemIcon>
					<ListItemText primary="Корзина" />
					<ListItemIcon
						sx={{
							width: "30px",
							minWidth: "30px",
							mr: "8px",
							cursor: "pointer",
						}}
						onClick={closeCart}
					>
						<Close />
					</ListItemIcon>
				</ListItem>
				<Divider />
				{!order.length ? (
					<ListItem>Корзина пуста</ListItem>
				) : (
					<>
						{order.map((item) => (
							<BasketItem
								key={item.id}
								id={item.id}
								name={item.name}
								price={item.price}
								quantity={item.quantity}
								removeFromOrder={removeFromOrder}
							/>
						))}
						<Divider />
						<ListItem>
							<Typography sx={{ fontWeight: 700 }}>
								Общая стоимость: {""}
								{order.reduce((acc, item) => {
									return acc + item.price * item.quantity;
								}, 0)}
								{""} рублей.
							</Typography>
						</ListItem>
					</>
				)}
			</List>
		</Drawer>
	);
};

export default Basket;
