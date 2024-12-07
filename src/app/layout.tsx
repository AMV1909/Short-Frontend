import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import type { Metadata } from "next";

import { ContextProviders } from "./providers";

import "@/styles/globals.css";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Short URL",
	description: "Short URL",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ContextProviders>{children}</ContextProviders>
			</body>
		</html>
	);
}
