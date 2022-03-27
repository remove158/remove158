import type { AppProps } from "next/app";
import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import Head from "next/head";
import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);
	return (
		<main className="min-h-screen flex flex-col">
			<Head>
				<title>OSM Bot</title>
				<meta name="theme-color" content="#9ddad5" />
			</Head>
			{getLayout(<Component {...pageProps} />)}
		</main>
	);
}

export default MyApp;
export type { NextPageWithLayout };
