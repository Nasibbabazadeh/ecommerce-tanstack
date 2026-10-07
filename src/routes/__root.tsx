import { createTheme, MantineProvider } from "@mantine/core";
import { MainLayout } from "@/app/layouts/main-layout";
import appCss from "@/app/styles.css?url";
import "@mantine/core/styles.css";
import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Scripts,
} from "@tanstack/react-router";

interface MyRouterContext {
	queryClient: QueryClient;
}

const theme = createTheme({
	fontFamily: "Open Sans, sans-serif",
	primaryColor: "cyan",
});

export const Route = createRootRouteWithContext<MyRouterContext>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "TanStack Start Starter",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				<MantineProvider theme={theme} defaultColorScheme="light">
					<MainLayout>{children}</MainLayout>
					{/* <TanStackDevtools
						plugins={[
							{
								name: "Tanstack Router",
								render: <TanStackRouterDevtoolsPanel />,
							},
							TanStackQueryDevtools,
						]}
					/> */}
				</MantineProvider>
				<Scripts />
			</body>
		</html>
	);
}
