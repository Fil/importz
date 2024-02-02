import import0 from "./foo bar.js";
import import1 from "./foo%20bar.js";
import import2 from "./foo%2520bar.js";

console.log({ import0, import1, import2 });

if (process?.title==="bun") {
  const require0 = require( "./foo bar.js").default;
  const require1 = require("./foo%20bar.js").default;
  const require2 = require("./foo%2520bar.js").default;
  console.log({ require0, require1, require2 });
}