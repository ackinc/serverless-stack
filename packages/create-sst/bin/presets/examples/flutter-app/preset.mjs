import { patch, extend, extract, install } from "create-sst";

export default [
  extend("presets/base/example"),
  extract(),
  patch({
    file: "package.json",
    operations: [{ op: "add", path: "/workspaces/-", value: "frontend" }],
  }),
];