import type { Route } from "react-router";

export interface RootRoute extends Route {
    id: "root";
    path: "/";
    children: Route[];
} 