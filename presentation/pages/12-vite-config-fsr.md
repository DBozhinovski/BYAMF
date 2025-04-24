---
layout: center
---

# Routing: **Config**

````md magic-move
```ts {3}
import { createApp } from "vinxi";
import path from "path"; // Needed for path.join
import { FSRouter } from "./src/FSRouter"; // 1. Import our custom router
```

```tsx {10-19}
export default createApp({
  routers: [
    // ... public router
    {
      name: "ssr",
      type: "http",
      handler: "./src/server-entry.tsx",
      target: "server",
      // 2. Add routes config to 'ssr' router
      routes: (router, app) => {
        return new FSRouter(
          {
            dir: path.join(__dirname, "src/routes"), // Directory to scan
            extensions: ["jsx", "js", "tsx", "ts"], // File extensions
          },
          router, // Pass Vinxi's internal router instance
          app, // Pass Vinxi's app instance
        );
      },
    },
  ],
});
```
````

<!--

We import our custom `FSRouter` class.

[click] We add the `routes` property to the `ssr` router configuration. This property takes a function.

Inside the function, we instantiate our `FSRouter`.
    *   The first argument is the config object:
        *   `dir`: Specifies the directory containing the route files (`src/routes`). We use `path.join` for cross-platform compatibility.
        *   `extensions`: An array of file extensions to consider as routes.
    *   The `router` and `app` arguments are passed through from Vinxi.

We can get the same set of routes to our client too, using the FSRouter, but will skip that in favour of a simpler approach with Wouter.
-->
