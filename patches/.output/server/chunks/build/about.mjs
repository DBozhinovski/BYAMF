import { jsxs, jsx } from 'react/jsx-runtime';
import { Link } from 'wouter';

function n() {
  return jsxs("div", { children: [jsx("h1", { children: "About" }), jsx("p", { children: jsx(Link, { to: "/", children: "Home page" }) })] });
}

export { n as default };
//# sourceMappingURL=about.mjs.map
