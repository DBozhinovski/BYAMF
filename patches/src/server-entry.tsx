/// <reference types="vinxi/types/server" />
import { eventHandler } from "vinxi/http";
import { renderToPipeableStream } from "react-dom/server";
import App from "./App";
import { getManifest } from "vinxi/manifest";
import { Router } from "wouter";

export default eventHandler(async (event) => {
  const clientManifest = getManifest("client");

  const stream = await new Promise(async (resolve) => {
    const stream = renderToPipeableStream(
      <Router ssrPath={event.path}>
        <App />
      </Router>,
      {
        onShellReady() {
          resolve(stream);
        },
        bootstrapModules: [
          clientManifest.inputs[clientManifest.handler].output.path,
        ],
        bootstrapScriptContent: `window.manifest = ${JSON.stringify(
          await clientManifest.json()
        )}`,
      }
    );
  });

  event.node.res.setHeader("Content-Type", "text/html");
  return stream;
});
