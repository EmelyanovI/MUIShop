import { createContext, useState, useMemo } from "react";
import { createTheme, Theme } from "@mui/material";

// Основные базовые цвета
const baseColors = {
	black: { DEFAULT: "#000000", 500: "#0F0E0E" },
	white: { DEFAULT: "#F5F5F5", 100: "#F7F7F7" },
	accentMain: "#0F0E0E",
	blue: "#1900D5",
};

// Цветовая палитра для светлой и темной темы
const lightColors = {
	...baseColors,
	primary: { DEFAULT: "#3C3C3C" },
	secondary: { DEFAULT: "#FF0000" },
	button: { contained: "#0000FF", outlined: "#FF5000" },
	borderColor: "#D1D1D1",
};

const darkColors = {
	...baseColors,
	primary: { DEFAULT: "#7c7c7c" },
	secondary: { DEFAULT: "#FF0000" },
	button: { contained: "#1900D5", outlined: "#FF0000" },
	borderColor: "#3C3C3C",
};

// Функция для выбора палитры в зависимости от темы
const tokens = (mode: "light" | "dark") => (mode === "dark" ? darkColors : lightColors);

// Настройки темы, зависящие от выбранной темы (светлая или темная)
const themeSettings = (mode: "light" | "dark") => {
	const colors = tokens(mode);
	return {
		palette: {
			mode,
			primary: { main: colors.primary.DEFAULT },
			secondary: { main: colors.secondary.DEFAULT },
		},
		components: {
			MuiButton: {
				styleOverrides: {
					contained: {
						backgroundColor: colors.button.contained,
						color: colors.white.DEFAULT,
						"&:hover": { backgroundColor: colors.button.outlined },
					},
					outlined: {
						borderColor: colors.button.outlined,
						color: colors.primary.DEFAULT,
						"&:hover": { borderColor: colors.button.contained },
					},
				},
			},
		},
	};
};

// Контекст для управления темой
export const ColorModeContext = createContext({
	toggleColorMode: () => {},
});

// Хук useMode для переключения темы
export const useMode = (): [Theme, { toggleColorMode: () => void }] => {
	const [mode, setMode] = useState<"light" | "dark">("light");

	// Функция для переключения темы
	const colorMode = useMemo(() => ({
		toggleColorMode: () => setMode((prev) => (prev === "dark" ? "light" : "dark")),
	}), []);

	// Создание темы с обновлением при изменении режима
	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

	return [theme, colorMode];
};
