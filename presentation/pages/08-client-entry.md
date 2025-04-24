---
layout: center
---

# The client entry

This file is the entry point for the JavaScript bundle that runs in the browser.

````md magic-move
```tsx {1|2|3|5}
import "vinxi/client";
import { hydrateRoot } from "react-dom/client";
import App from "./App";

hydrateRoot(document, <App />);
```
````

<!--

`import "vinxi/client";`: Imports Vinxi's client-side runtime. This is crucial for features like accessing the manifest (`window.manifest`) populated by the server and potentially enabling HMR or other client-specific helpers.

[click] `import { hydrateRoot } from "react-dom/client";`: Imports React's function specifically designed for "hydrating" server-rendered HTML. Hydration attaches event listeners and makes the static HTML interactive without discarding the server-rendered DOM nodes.

[click] `import App from "./App";`: Imports the same root React component (`<App>`) that was rendered on the server. It's essential that the client renders the *exact same* component structure initially to match the server-rendered HTML.

[click] `hydrateRoot(document, <App />);`: This is the core hydration call. It tells React to take control of the existing HTML within the `document` (since our `<App>` renders the full `<html>` structure) and make it interactive based on the `<App>` component's logic.

-->
