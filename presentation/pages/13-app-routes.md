---
layout: two-cols-header
---

# Client-side routing: **Wouter**

::left::

For client-side routing, we'll add **Wouter**:

`pnpm i wouter`

- Add Wouter to `client` entry file
- Add Wouter to `server` entry file
- Define routes in `App` component
- Add routes to JSX

::right::

````md magic-move
```tsx {2}
// src/server-entry.tsx
import { Router } from "wouter";
...
renderToPipeableStream(
      <App />
...
```

```tsx {all}
// src/server-entry.tsx
...
renderToPipeableStream(
  <Router ssrPath={event.path}>
      <App />
  </Router>,
...
```

```tsx {3}
// src/client-entry.tsx
...
import { Router } from "wouter";

hydrateRoot(
  document,
  <App />
);

```

```tsx {2-7}
...
hydrateRoot(
  document,
  <Router>
    <App />
  </Router>
);

```

```tsx {3|6-19}
// src/App.tsx
...
import { Route } from "wouter";
...

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
//
...
```

```tsx
...
{routes.map((route) => (
  <Route
    key={route.path}
    path={route.path}
    component={route.component}
  />
))}
...
```
````

<!--

First, install `wouter`: `pnpm i wouter`.

In the **server entry** (`src/server-entry.tsx`), import the `Router` component from `wouter`.

[click] Wrap the `<App />` component within `<Router>`, passing the current request path (`event.path`) to the `ssrPath` prop. This tells `wouter` which route to render for the initial server-side response.

[click] In the **client entry** (`src/client-entry.tsx`), also import the `Router` component.

[click] Wrap the `<App />` component within `<Router>` during hydration. On the client, `wouter`'s `Router` automatically uses the browser's `location` and handles history integration.

[click] In the main **App component** (`src/App.tsx`), import `Route` from `wouter`. We also manually define a `routes` array mapping paths to the imported route components (like `Index`, `About`, etc.).

[click] Finally, inside the App's JSX, we map over our `routes` array and render a `wouter` `<Route>` for each entry, passing the `path` and `component` props. `wouter` handles matching the current URL and rendering the correct component.
 -->
