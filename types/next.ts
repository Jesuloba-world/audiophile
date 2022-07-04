import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

export type NextPageWithLayout<T = {}> = NextPage<T> & {
	getLayout?: (page: ReactElement, props: any) => ReactNode;
};

export type AppPropsWithLayout<T = {}> = AppProps & {
	Component: NextPageWithLayout<T>;
};
