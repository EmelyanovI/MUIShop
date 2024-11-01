import { TextField } from "@mui/material";
import React from "react";
import { SearchProps } from "../types/types";

const Search: React.FC<SearchProps> = ({ onChange, value }) => {
	return (
		<TextField
			label="Поиск"
			variant="outlined"
            fullWidth
			type="search"
			value={value}
			color="primary"
			onChange={onChange}
            sx={{
                mb: '20px',
            }}
		/>
	);
};

export default Search;
