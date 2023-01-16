import { LazyExoticComponent } from "react";
import { RouteProps } from "react-router-dom";

export const RoutePaths = {
	home: '/',
}

export interface IRoute {
	element: LazyExoticComponent<() => JSX.Element>,
	path: string,
	options?: RouteProps,
}