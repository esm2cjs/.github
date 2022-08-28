# ESM to CJS

We love ESM and think it is a great step in the right direction. Unfortunately like many developers, we still have to support CommonJS and cannot simply switch everything to ESM.
The fact that some maintainers decided to make popular packages ESM-only is a problem, especially since using the older CommonJS versions of their packages means we're stuck without security fixes.

Maintaining a hybrid ESM/CommonJS package is not hard and can actually be automated. This project aims at providing forks for some of the more popular ESM-only packages and patch in CommonJS support.

Contributors are always welcome!

Is a package missing? Please request it [here](https://github.com/esm2cjs/.github/issues/2).

## Packages
<!-- BEGIN PACKAGES -->
* [`@esm2cjs/aggregate-error`](https://github.com/esm2cjs/aggregate-error) - Forked from [sindresorhus/aggregate-error](https://github.com/sindresorhus/aggregate-error)
* [`@esm2cjs/clean-stack`](https://github.com/esm2cjs/clean-stack) - Forked from [sindresorhus/clean-stack](https://github.com/sindresorhus/clean-stack)
* [`@esm2cjs/del`](https://github.com/esm2cjs/del) - Forked from [sindresorhus/del](https://github.com/sindresorhus/del)
* [`@esm2cjs/escape-string-regexp`](https://github.com/esm2cjs/escape-string-regexp) - Forked from [sindresorhus/escape-string-regexp](https://github.com/sindresorhus/escape-string-regexp)
* [`@esm2cjs/execa`](https://github.com/esm2cjs/execa) - Forked from [sindresorhus/execa](https://github.com/sindresorhus/execa)
* [`@esm2cjs/fetch-blob`](https://github.com/esm2cjs/fetch-blob) - Forked from [node-fetch/fetch-blob](https://github.com/node-fetch/fetch-blob)
* [`@esm2cjs/form-data-encoder`](https://github.com/esm2cjs/form-data-encoder) - Forked from [octet-stream/form-data-encoder](https://github.com/octet-stream/form-data-encoder)
* [`@esm2cjs/FormData`](https://github.com/esm2cjs/FormData) - Forked from [jimmywarting/FormData](https://github.com/jimmywarting/FormData)
* [`@esm2cjs/globby`](https://github.com/esm2cjs/globby) - Forked from [sindresorhus/globby](https://github.com/sindresorhus/globby)
* [`@esm2cjs/got`](https://github.com/esm2cjs/got) - Forked from [sindresorhus/got](https://github.com/sindresorhus/got)
* [`@esm2cjs/http-timer`](https://github.com/esm2cjs/http-timer) - Forked from [szmarczak/http-timer](https://github.com/szmarczak/http-timer)
* [`@esm2cjs/human-signals`](https://github.com/esm2cjs/human-signals) - Forked from [ehmicky/human-signals](https://github.com/ehmicky/human-signals)
* [`@esm2cjs/indent-string`](https://github.com/esm2cjs/indent-string) - Forked from [sindresorhus/indent-string](https://github.com/sindresorhus/indent-string)
* [`@esm2cjs/ip-regex`](https://github.com/esm2cjs/ip-regex) - Forked from [sindresorhus/ip-regex](https://github.com/sindresorhus/ip-regex)
* [`@esm2cjs/is`](https://github.com/esm2cjs/is) - Forked from [sindresorhus/is](https://github.com/sindresorhus/is)
* [`@esm2cjs/is-ip`](https://github.com/esm2cjs/is-ip) - Forked from [sindresorhus/is-ip](https://github.com/sindresorhus/is-ip)
* [`@esm2cjs/is-online`](https://github.com/esm2cjs/is-online) - Forked from [sindresorhus/is-online](https://github.com/sindresorhus/is-online)
* [`@esm2cjs/is-path-cwd`](https://github.com/esm2cjs/is-path-cwd) - Forked from [sindresorhus/is-path-cwd](https://github.com/sindresorhus/is-path-cwd)
* [`@esm2cjs/is-path-inside`](https://github.com/esm2cjs/is-path-inside) - Forked from [sindresorhus/is-path-inside](https://github.com/sindresorhus/is-path-inside)
* [`@esm2cjs/is-stream`](https://github.com/esm2cjs/is-stream) - Forked from [sindresorhus/is-stream](https://github.com/sindresorhus/is-stream)
* [`@esm2cjs/lowercase-keys`](https://github.com/esm2cjs/lowercase-keys) - Forked from [sindresorhus/lowercase-keys](https://github.com/sindresorhus/lowercase-keys)
* [`@esm2cjs/mimic-fn`](https://github.com/esm2cjs/mimic-fn) - Forked from [sindresorhus/mimic-fn](https://github.com/sindresorhus/mimic-fn)
* [`@esm2cjs/node-data-uri-to-buffer`](https://github.com/esm2cjs/node-data-uri-to-buffer) - Forked from [TooTallNate/node-data-uri-to-buffer](https://github.com/TooTallNate/node-data-uri-to-buffer)
* [`@esm2cjs/node-fetch`](https://github.com/esm2cjs/node-fetch) - Forked from [node-fetch/node-fetch](https://github.com/node-fetch/node-fetch)
* [`@esm2cjs/npm-run-path`](https://github.com/esm2cjs/npm-run-path) - Forked from [sindresorhus/npm-run-path](https://github.com/sindresorhus/npm-run-path)
* [`@esm2cjs/onetime`](https://github.com/esm2cjs/onetime) - Forked from [sindresorhus/onetime](https://github.com/sindresorhus/onetime)
* [`@esm2cjs/p-any`](https://github.com/esm2cjs/p-any) - Forked from [sindresorhus/p-any](https://github.com/sindresorhus/p-any)
* [`@esm2cjs/p-cancelable`](https://github.com/esm2cjs/p-cancelable) - Forked from [sindresorhus/p-cancelable](https://github.com/sindresorhus/p-cancelable)
* [`@esm2cjs/p-limit`](https://github.com/esm2cjs/p-limit) - Forked from [sindresorhus/p-limit](https://github.com/sindresorhus/p-limit)
* [`@esm2cjs/p-map`](https://github.com/esm2cjs/p-map) - Forked from [sindresorhus/p-map](https://github.com/sindresorhus/p-map)
* [`@esm2cjs/p-queue`](https://github.com/esm2cjs/p-queue) - Forked from [sindresorhus/p-queue](https://github.com/sindresorhus/p-queue)
* [`@esm2cjs/p-some`](https://github.com/esm2cjs/p-some) - Forked from [sindresorhus/p-some](https://github.com/sindresorhus/p-some)
* [`@esm2cjs/p-timeout`](https://github.com/esm2cjs/p-timeout) - Forked from [sindresorhus/p-timeout](https://github.com/sindresorhus/p-timeout)
* [`@esm2cjs/path-key`](https://github.com/esm2cjs/path-key) - Forked from [sindresorhus/path-key](https://github.com/sindresorhus/path-key)
* [`@esm2cjs/public-ip`](https://github.com/esm2cjs/public-ip) - Forked from [sindresorhus/public-ip](https://github.com/sindresorhus/public-ip)
* [`@esm2cjs/slash`](https://github.com/esm2cjs/slash) - Forked from [sindresorhus/slash](https://github.com/sindresorhus/slash)
* [`@esm2cjs/strip-final-newline`](https://github.com/esm2cjs/strip-final-newline) - Forked from [sindresorhus/strip-final-newline](https://github.com/sindresorhus/strip-final-newline)
* [`@esm2cjs/yocto-queue`](https://github.com/esm2cjs/yocto-queue) - Forked from [sindresorhus/yocto-queue](https://github.com/sindresorhus/yocto-queue)
<!-- END PACKAGES -->
