import { BaseFileSystemRouter, cleanPath } from "vinxi/fs-router";

export class ServerRouter extends BaseFileSystemRouter {
  toPath(src: string) {
    const routePath = cleanPath(src, this.config)
      .slice(1)
      .replace(/index$/, "");

    return routePath?.length > 0 ? `/${routePath}` : "/";
  }

  toRoute(filePath: string) {
    return {
      path: this.toPath(filePath),
      $component: {
        src: filePath,
        pick: ["default"],
      },
    };
  }
}
