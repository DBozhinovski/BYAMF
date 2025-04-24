---
layout: center
---

# The App Component (entry)

This is the root component rendered by both the server and the client.

````md magic-move
```tsx
import { getManifest } from "vinxi/manifest";
import { createAssets } from "@vinxi/react";
import { Suspense, useState } from "react";
```

```tsx
export default function App() {
  const Assets = createAssets(
    getManifest("client").handler,
    getManifest("client"),
  );
  const [count, setCount] = useState(0);

  ...
}
```

```tsx {all|8-10|13-17|15}
return (
  <html>
    <head>
      <meta charSet="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Patches Demo</title>
      <Suspense>
        <Assets />
      </Suspense>
    </head>
    <body>
      <div id="app">
        <p>Hello from Patches!</p>
        <button onClick={() => setCount((c) => c + 1)}>Increase</button>
        <p>{count}</p>
      </div>
    </body>
  </html>
);
```
````

<!--

`import { createAssets } from "@vinxi/react";`: Imports a helper from Vinxi's React integration package.

[click] `const Assets = createAssets(...)`: This creates a special React component. It uses the client manifest (obtained via `getManifest("client")`) to figure out which CSS and JavaScript files need to be included in the HTML.

[click] We get the entire HTML page here.

[click] The `<Assets />` component must be rendered within a `<Suspense>` boundary inside the `<head>`. It injects the necessary `<link>` (for CSS) and `<script>` (for JS) tags into the server-rendered HTML.

[click] `<div id="app">`: This div acts as the main container for your application's UI content. While `hydrateRoot` targets the `document`, React reconciles the content *within* this structure.

[click] State (`useState`) and event handlers (`onClick`) work as expected. React hydration on the client attaches the necessary listeners to the server-rendered DOM.

-->
