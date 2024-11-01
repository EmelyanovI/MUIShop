import React from "react";
import { Alert, Snackbar } from "@mui/material";
import { SnackProps } from "../types/types";

const Snack: React.FC<SnackProps> = ({ isOpen, handleClose = () => {} }) => {
	return (
		<Snackbar open={isOpen} onClose={handleClose} autoHideDuration={750}>
			<Alert severity="success">Товар успешно добавлен</Alert>
		</Snackbar>
	);
}

export default Snack;
