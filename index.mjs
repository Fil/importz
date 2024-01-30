import foobar0 from "./foo bar.js";
import foobar1 from "./foo%20bar.js";
import foobar2 from "./foo%2520bar.js";

console.log({ foobar0, foobar1, foobar2 });
