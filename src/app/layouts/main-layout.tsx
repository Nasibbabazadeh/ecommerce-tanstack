import { Footer } from "#/widgets/footer";
import { Header } from "#/widgets/header";

export const MainLayout = ({
	children,
}: Readonly<{ children: React.ReactNode }>) => {
	return (
		<div className="flex flex-col min-h-dvh">
			<Header />
			<main className="flex-1">{children}</main>
			<Footer />
		</div>
	);
};
