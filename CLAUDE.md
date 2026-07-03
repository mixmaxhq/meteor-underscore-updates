# meteor-underscore-updates — repo card

> A map, not a manual. Keep it ~1 screen; point to detail, don't inline it.

## What it is

Meteor (Atmosphere) package `mixmax:underscore-updates` — back-ports three methods from modern Underscore (`findIndex`, `findLastIndex`, `mapObject`) into Meteor's bundled 1.5.2-era `_` via `_.mixin()`. Dormant: last code change April 2020; kept published for any remaining Meteor apps.

## serves

role: Underscore back-port shim for Meteor apps — extends the global `_` with `findIndex`, `findLastIndex`, and `mapObject`
referenced-by: []

## Code map

- Package manifest (Atmosphere name/version, `api.use`/`api.imply`) -> package.js
- The mixin — all three methods, copied from upstream Underscore source -> underscore-updates.js
- Pinned Meteor/underscore dependency versions -> .versions

## Conventions

- Meteor package, not npm: no `package.json`; name and version live in `Package.describe()` in `package.js`. Consumers run `meteor add mixmax:underscore-updates` (it lands in their `.meteor/packages`).
- `api.imply('underscore')` — consumers get `_` transitively just by adding this package.
- Method bodies are copied verbatim from upstream Underscore source; add or update methods by re-copying from upstream, not rewriting.
- No tests and no CI (`.github/` holds only a PR template). Publishing is manual via `meteor publish` (bumps version in `package.js`).

## Run / test

- None — no test suite, build step, or CI. Verify changes by adding the package to a Meteor app locally.

## Load the matching domain card

- Cross-cutting library — load the consuming capability's card, not a domain-* for this repo.
