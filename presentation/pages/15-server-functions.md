---
layout: center
---

# Server Functions

Add server-only logic callable directly from client components.

````md magic-move
```ts {all}
// vite.config.ts (Recap)
import { serverFunctions } from "@vinxi/server-functions/plugin";

export default createApp({
  routers: [
    // ... public, ssr routers ...
    {
      name: "client",
      // ... other client config ...
      plugins: () => [serverFunctions.client()], // 1. Client plugin
    },
    serverFunctions.router(), // 2. Server Functions router
  ],
});
```

---

```tsx {all}
// routes/index.tsx
async function getServerMessage(): Promise<string> {
  "use server"; // Runs ONLY on server!
  console.log("Executing on the server...");
  await new Promise((resolve) => setTimeout(resolve, 500));
  return `Hello from server at ${new Date().toLocaleTimeString()}`;
}
```

```tsx {all|6-8|21}
// routes/index.tsx
export default function Index() {
  const [loaderData, setLoaderData] = useState("");

  useEffect(() => {
    async function loadData() {
      setLoaderData(await getServerMessage());
    }
    loadData();
  }, []);

  return (
    <div>
      <h1>Index</h1>
      <Counter />
      <p>
        <Link to="/about-routing">About page</Link>
      </p>
      <h1>Server Functions</h1>
      {/* 7. Display result */}
      <p>{loaderData}</p>
    </div>
  );
}
```
````

<!--

Server Functions allow calling server-only code from the client seamlessly. First, ensure the config is correct (recap from previous steps): Add `@vinxi/server-functions` dependency, add the `client()` plugin to the `client` router, and add `serverFunctions.router()` to the main router list in `vite.config.ts`.

[click] We define a simple server function that returns a greeting with the current time. It's important to add "use server" at the top of the function body, so that it's executed on the server.

[click] On the client-side, in the fame file

[click] We can simply call the `getServerMessage` function inside useEffect

[click] and display its result. This is how you use Server Functions to fetch data from the server without leaving the client-side code.



-->
