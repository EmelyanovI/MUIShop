import React from "react";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import { Switch, Box } from "@mui/material";

const LanguageSwitch = styled(Switch)({
	width: 48,
	height: 28,
	padding: 6.5,
	"& .MuiSwitch-switchBase": {
		margin: 1,
		padding: 0,
		transform: "translateX(4px)",
		"&.Mui-checked": {
			transform: "translateX(18px)",
		},
	},
	"& .MuiSwitch-thumb": {
		width: 26,
		height: 26,
		backgroundColor: "#aab4be",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		fontSize: "10px",
		color: "#fff",
		fontWeight: "bold",
		"&:before": {
			content: "'RU'",
		},
	},
	"& .MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb:before": {
		content: "'EN'",
	},
	"& .MuiSwitch-track": {
		opacity: 1,
		backgroundColor: "#d3d3d3 !important",
		borderRadius: 14,
	},
	"& .MuiSwitch-track.Mui-checked": {
		opacity: 1,
	},
});

const LanguageSwitcher: React.FC = () => {
	const { i18n } = useTranslation();

	const toggleLanguage = () => {
		i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
	};

	return (
		<Box display="flex" alignItems="center">
			<LanguageSwitch
				checked={i18n.language === "en"}
				onChange={toggleLanguage}
				sx={{ mr: 1 }}
			/>
		</Box>
	);
};

export default LanguageSwitcher;
