import { Close } from "@mui/icons-material";
import { IconButton, ListItem, Typography } from "@mui/material";
import React from "react";
import { BasketItemProps } from "../types/types";


const BasketItem: React.FC<BasketItemProps> = ({
	removeFromOrder,
	id,
	name,
	price,
	quantity,
}) => {
	return (
		<ListItem>
			<Typography variant="body1">
				{name} {price} руб x {quantity}
			</Typography>
			<IconButton onClick={() => removeFromOrder(id)}>
				<Close />
			</IconButton>
		</ListItem>
	);
};

export default BasketItem;
