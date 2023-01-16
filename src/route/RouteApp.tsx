import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { RoutePaths, IRoute } from "./RouteApp.model";

const Home = React.lazy(() => import("pages/home/Home"));

const routeList: IRoute[] = [
  {
    element: Home,
    path: RoutePaths.home,
  },
];

export default function RouteApp() {
  function createRoute(page: IRoute, index: number) {
    return (
      <Route
        key={index}
        path={page.path}
        element={
          <React.Suspense fallback={<>...</>}>
            <page.element />
          </React.Suspense>
        }
        {...page.options}
      />
    );
  }

  return (
    <BrowserRouter>
      <Routes>{routeList.map(createRoute)}</Routes>
    </BrowserRouter>
  );
}
