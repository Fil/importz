Just a test of

```js
import foobar from "./foo%20bar.js";
```

See https://fil.github.io/importz/


When opening "[index.html](https://fil.github.io/importz/)", all browsers show:

```
foo bar=using foo[space]bar.js
foo%20bar=using foo[space]bar.js
foo%2520bar=using foo%20bar.js
```

Similarly, node and deno show:

```
❯ node index.mjs
{
  foobar0: 'using foo[space]bar.js',
  foobar1: 'using foo[space]bar.js',
  foobar2: 'using foo%20bar.js'
}
❯ deno run index.mjs
{
  foobar0: "using foo[space]bar.js",
  foobar1: "using foo[space]bar.js",
  foobar2: "using foo%20bar.js"
}
```

interestingly, bun is NOT following this and uses strict file names:

```
❯ bun index.mjs
{
  foobar0: "using foo[space]bar.js",
  foobar1: "using foo%20bar.js",
  foobar2: "using foo%2520bar.js",
}
```

This bun issue is tracked at https://github.com/oven-sh/bun/issues/8640
