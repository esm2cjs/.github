# ESM to CJS

We love ESM and think it is a great step in the right direction. Unfortunately like many developers, we still have to support CommonJS and cannot simply switch everything to ESM.
The fact that some maintainers decided to make popular packages ESM-only is a problem, especially since using the older CommonJS versions of their packages means we're stuck without security fixes.

Maintaining a hybrid ESM/CommonJS package is not hard and can actually be automated. This project aims at providing forks for some of the more popular ESM-only packages and patch in CommonJS support.

Contributors are always welcome!

## Packages
- [`@esm2cjs/strip-final-newline`](https://github.com/esm2cjs/strip-final-newline) - Forked from https://github.com/sindresorhus/strip-final-newline