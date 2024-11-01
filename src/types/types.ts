export interface GoodsItem {
	id: number;
	name: string;
	price: number;
	poster: string;
}

export interface OrderItem {
	id: number;
	name: string;
	price: number;
	quantity: number;
}

export interface GoodsItemProps {
	id: number;
	name: string;
	price: number;
	poster: string;
	setOrder: (order: GoodsItem) => void;
}

export interface GoodsListProps {
	goods: GoodsItem[];
	setOrder: (order: GoodsItem) => void;
}

export interface BasketItemProps {
	name: string;
	price: number;
	quantity: number;
}

export interface BasketProps {
	cartOpen: boolean;
	closeCart?: (
		event: React.MouseEvent | React.KeyboardEvent,
		reason?: "backdropClick" | "escapeKeyDown"
	) => void;
	order: BasketItemProps[];
	removeFromOrder: (name: string) => void;
}

export interface BasketItemProps {
	removeFromOrder: (id: string) => void;
	id: string;
	name: string;
	price: number;
	quantity: number;
}

export interface HeaderProps {
	handleCart: () => void;
	orderLen: number;
}

export interface SearchProps {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
}

export interface SnackProps {
	isOpen: boolean;
	handleClose?: () => void;
}
