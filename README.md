# neon-sha256

A study project to get a sense of just how much performance can be had
from delegating intensive pieces of code to Rust native Node.js modules. My 
current results are:

- **Pure JavaScript (crypto-js)**: `20.496s/11.97 MB`
- **Native (Rust) Node module**: `11.376s/3.39 MB`
- **Native (C) Node module**: `3.752s/5.2 MB`

Which suggests Rust can be significantly faster than pure JavaScript, but 
at least with my test project, not fast enough to beat Node's own native
implementation of its crypto module. It did use a lot fewer memory though. My 
suspicion is that there's a cost to FFI, but my Rust code can probably use 
some attention. PRs are very much welcome.

Rust, as expected, did outperform the highly optimized JavaScript of `crypto-js`
by nearly 200%, while using roughly 1/3 of the memory. For server-side code,
using Rust modules in JavaScript is likely to yield substantial savings.

## Update (Apr 9 2019)

Thanks to @kjvalencik for pointing out that there is a [cost to FFI][cf] making Rust 
slower on smaller strings. Rust will start outperforming the built-in Node module
as you increase the size of the payload past 20kb.

[cf]: https://github.com/dyu/ffi-overhead

```js
payload = Buffer.alloc(20000).fill(' ').toString()
```

```
Native (Rust) Node module: 7.337s/5.72 MB
Native (C) Node module: 7.427s/5.08 MB
```

The gap widening at 50kb:

```
Native (Rust) Node module: 17.556s/4.82 MB
Native (C) Node module: 19.671s/5.14 MB
```

## Running the benchmark

- `yarn global add neon-cli` (if you haven't already)
- `neon build` (make sure you have Rust first)
- `cd benchmarks`
- `npm install` or `yarn`
- `node node-js.js`
- `node node-rust.js`
- `node node-native.js`