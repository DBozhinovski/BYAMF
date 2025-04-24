import { getManifest } from "vinxi/manifest";
import { createAssets } from "@vinxi/react";
import { Suspense } from "react";
import { Route } from "wouter";

import Index from "./routes/index";
import About from "./routes/about";
import Basic from "./routes/basic";

const Assets = createAssets(
  getManifest("client").handler,
  getManifest("client")
);

const routes = [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/basic",
    component: Basic,
  },
];

export default function App() {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles.css" />
        <title>Patches Demo</title>
        <Suspense>
          <Assets />
        </Suspense>
      </head>
      <body>
        <div id="app">
          <img src="/patches.svg" width="200px" alt="Patches Logo" />
          <Suspense fallback="Loading...">
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
              />
            ))}
          </Suspense>
        </div>
      </body>
    </html>
  );
}
