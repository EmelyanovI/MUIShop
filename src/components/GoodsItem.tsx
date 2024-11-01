import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { GoodsItemProps } from "../types/types";
import React from "react";
import { useTranslation } from "react-i18next";

const GoodsItem: React.FC<GoodsItemProps> = (props) => {
	const { name, price, poster, setOrder } = props;

	const { t } = useTranslation("GoodsItem");

	return (
		<Grid item xs={12} md={4}>
			<Card
				sx={{
					height: "100%",
				}}
			>
				<CardMedia
					image={poster}
					component="img"
					title={name}
					alt={name}
					sx={{
						height: "180px",
					}}
				/>
				<CardContent>
					<Typography
						variant="h6"
						component="h3"
						sx={{
							height: "80px",
							maxHeight: "80px",
							display: "-webkit-box",
							WebkitLineClamp: 2,
							WebkitBoxOrient: "vertical",
							overflow: "hidden",
						}}
					>
						{name}
					</Typography>
					<Typography variant="body1">
						{t("Цена")}: {price} {t("руб.")}
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						variant="contained"
						onClick={() =>
							setOrder({
								id: props.id,
								name: props.name,
								price: props.price,
								poster: props.poster,
							})
						}
					>
						{t("Купить")}
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default GoodsItem;
