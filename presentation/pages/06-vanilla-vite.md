---
layout: center
---

# Starting Point: **Vanilla Vite**

1. Starting with vanilla **Vite**:

```bash
pnpm create vite@latest patches -- --template vanilla-ts
```

2. Adding **Vinxi** and **React**:

```bash
pnpm i react react-dom @vinxi/react
pnpm i -D @types/react @types/react-dom
```

---

3. Define the **Vite** (**Vinxi**) config:

```ts {all|5-9|10-15|16-22}
import { createApp } from "vinxi";

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
    },
    {
      name: "client",
      type: "client",
      handler: "./src/client-entry.tsx",
      target: "browser",
      base: "/_build",
    },
  ],
});
```

<!-- The Vinxi router API is the core primitive of Vinxi. It allows us to define how a group of URLs should be handled by Vinxi.

- 'static' - for serving uncompiled, static assets
- 'http' - for creating traditional web servers
- 'client' - for rendering React components on the client

Vinxi comes with more than those, check out the API at their website

-->
