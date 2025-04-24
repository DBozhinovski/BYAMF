/// <reference types="vite/client" />

// Add declaration for @vinxi/server-functions/server
declare module "@vinxi/server-functions/server" {
  export function registerServerReference(fn: Function): void;
}

// Add declaration for @vinxi/server-functions/client
declare module "@vinxi/server-functions/client" {
  // Add any client-side exports if needed
}
