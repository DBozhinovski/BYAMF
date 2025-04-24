import { createApp } from "vinxi";
import path from "path";
import { serverFunctions } from "@vinxi/server-functions/plugin";
import { FSRouter } from "./src/FSRouter";

export default createApp({
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
        return new FSRouter(
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
      plugins: () => [serverFunctions.client()],
    },
    serverFunctions.router(),
  ],
});
