# ESM to CJS

We love ESM and think it is a great step in the right direction. Unfortunately like many developers, we still have to support CommonJS and cannot simply switch everything to ESM.
The fact that some maintainers decided to make popular packages ESM-only is a problem, especially since using the older CommonJS versions of their packages means we're stuck without security fixes.

Maintaining a hybrid ESM/CommonJS package is not hard and can actually be automated. This project aims at providing forks for some of the more popular ESM-only packages and patch in CommonJS support.

Contributors are always welcome!

## Packages
- [`@esm2cjs/execa`](https://github.com/esm2cjs/execa) - Forked from https://github.com/sindresorhus/execa
- [`@esm2cjs/human-signals`](https://github.com/esm2cjs/human-signals) - Forked from https://github.com/ehmicky/human-signals
- [`@esm2cjs/is-stream`](https://github.com/esm2cjs/is-stream) - Forked from https://github.com/sindresorhus/is-stream
- [`@esm2cjs/mimic-fn`](https://github.com/esm2cjs/mimic-fn) - Forked from https://github.com/sindresorhus/mimic-fn
- [`@esm2cjs/npm-run-path`](https://github.com/esm2cjs/npm-run-path) - Forked from https://github.com/sindresorhus/npm-run-path
- [`@esm2cjs/onetime`](https://github.com/esm2cjs/onetime) - Forked from https://github.com/sindresorhus/onetime
- [`@esm2cjs/path-key`](https://github.com/esm2cjs/path-key) - Forked from https://github.com/sindresorhus/path-key
- [`@esm2cjs/strip-final-newline`](https://github.com/esm2cjs/strip-final-newline) - Forked from https://github.com/sindresorhus/strip-final-newline