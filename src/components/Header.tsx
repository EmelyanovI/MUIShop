import React, { useContext } from "react";
import { ShoppingBasket } from "@mui/icons-material";
import {
	AppBar,
	Badge,
	FormGroup,
	FormControlLabel,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material";
import SwitchTheme from "./button/SwitchTheme";
import { ColorModeContext } from "../theme";
import LandSwitcher from "./LandSwitcher/LandSwitcher";

const Header: React.FC<{ handleCart: () => void; orderLen: number }> = ({
	handleCart,
	orderLen,
}) => {
	const { toggleColorMode } = useContext(ColorModeContext);

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography
					variant="h6"
					component="span"
					sx={{ flexGrow: 1, cursor: "default" }}
				>
					MUI Shop
				</Typography>
				<FormGroup sx={{ flexDirection: "row", }}>
					<LandSwitcher />
					<FormControlLabel 
						sx={{ mr: '0px', }}
						control={
							<SwitchTheme
								defaultChecked
								onChange={toggleColorMode}
							/>
						}
						label=""
					/>
					<IconButton color="inherit" onClick={handleCart}>
						<Badge color="secondary" badgeContent={orderLen}>
							<ShoppingBasket />
						</Badge>
					</IconButton>
				</FormGroup>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
