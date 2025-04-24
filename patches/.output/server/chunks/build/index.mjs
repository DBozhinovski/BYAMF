import { jsxs, jsx } from 'react/jsx-runtime';
import { Link } from 'wouter';
import { useState, useEffect } from 'react';

function a() {
  const [n, t] = useState(0);
  return jsxs("div", { children: [jsx("h1", { children: "Counter" }), jsx("p", { children: n }), jsx("button", { onClick: () => t(n + 1), children: "Increment" })] });
}
async function u() {
  "use server";
  return console.log("Access database"), new Promise((n) => {
    setTimeout(() => n("Hello from server"), 500);
  });
}
function f() {
  const [n, t] = useState("");
  return useEffect(() => {
    async function c() {
      t(await u());
    }
    c();
  }, []), jsxs("div", { children: [jsx("h1", { children: "Index" }), jsx(a, {}), jsx("p", { children: jsx(Link, { to: "/about", children: "About page" }) }), jsx("h1", { children: "Server Functions" }), n] });
}

export { f as default };
//# sourceMappingURL=index.mjs.map
