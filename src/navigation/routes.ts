import * as React from "react";
import Consultations from "@pages/private/consultations/Consultations";
import Users from "@pages/private/users/Users";

export interface Route {
  path: string;
  component: React.ComponentType;
  name: string;
}

export const privateRoutes: Route[] = [
  {
    path: "/user",
    component: Users,
    name: "Pengguna"
  },
  {
    path: "/consultation",
    component: Consultations,
    name: "Konsultasi"
  }
];
