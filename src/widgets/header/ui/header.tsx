import { ActionIcon, Avatar, Container, Group, Input } from "@mantine/core";
import {
	HeartIcon,
	MoonIcon,
	SearchIcon,
	ShoppingBasketIcon,
} from "lucide-react";
export function Header() {
	return (
		<header className="h-15 bg-black">
			<Container>
				<Input
					aria-label="Search"
					id="search-products"
					name="search-input"
					placeholder="Search products, brands and SKUs..."
					leftSection={<SearchIcon size={16} />}
				/>
				<h1 className="text-white">salam</h1>
				<Group>
					<ActionIcon variant="transparent" size={36} aria-label="Theme">
						<MoonIcon size={20} />
					</ActionIcon>
					<ActionIcon variant="transparent" size={36} aria-label="Like">
						<HeartIcon size={20} />
					</ActionIcon>
					<ActionIcon variant="transparent" size={36} aria-label="Basket">
						<ShoppingBasketIcon size={20} />
					</ActionIcon>
					<Avatar radius="xl" aria-label="Avatar" />
				</Group>
			</Container>
		</header>
	);
}
