import { createApp } from "vinxi";
import path from "path";
import { serverFunctions } from "@vinxi/server-functions/plugin";
import { ServerRouter } from "./src/ServerRouter";

export default createApp({
  server: {
    preset: "vercel",
  },
  routers: [
    {
      name: "public",
      type: "static",
      dir: "./public",
    },
    {
      name: "ssr",
      type: "http",
      handler: "./src/server-entry.tsx",
      target: "server",
      routes: (router, app) => {
        return new ServerRouter(
          {
            dir: path.join(__dirname, "src/routes"),
            extensions: ["jsx", "js", "tsx", "ts"],
          },
          router,
          app
        );
      },
    },
    {
      name: "client",
      type: "client",
      handler: "./src/client-entry.tsx",
      target: "browser",
      base: "/_build",
      routes: (router, app) => {
        return new ServerRouter(
          {
            dir: path.join(__dirname, "src/routes"),
            extensions: ["jsx", "js", "tsx", "ts"],
          },
          router,
          app
        );
      },
      plugins: () => [serverFunctions.client()],
    },
    serverFunctions.router(),
  ],
});
