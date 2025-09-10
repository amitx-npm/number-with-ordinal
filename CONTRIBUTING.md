## Contributing

Thanks for your interest in improving `ordinal-number`!

### Setup

1. Fork and clone the repo
2. Install dependencies: `npm ci`
3. Run tests: `npm test`
4. Build: `npm run build`

### Development

- Write tests in `tests/` using Vitest
- Ensure lint passes: `npm run lint`
- Format code: `npm run format`

### Branching model

- Default branch: `main` (stable releases)
- Development: `dev` (integration) and short-lived feature branches
- Branch naming:
  - `feat/<short-description>`
  - `fix/<short-description>`
  - `chore/<short-description>`
  - `docs/<short-description>`
  - `refactor/<short-description>`
  - `test/<short-description>`

Open PRs from feature branches into `dev`, then from `dev` into `main` when ready for release.

### Conventional Commits

We enforce Conventional Commits via commitlint + Husky.

Types: `feat`, `fix`, `docs`, `chore`, `refactor`, `test`, `build`, `ci`.

Examples:
- `feat: add bigint support to ordinal()`
- `fix: handle 11/12/13 teen suffixes`
- `docs: update README with edge cases`
- `test: add negative number scenarios`

### Release process

We use semantic versioning (MAJOR.MINOR.PATCH):
- MAJOR: breaking changes
- MINOR: new features, backwards-compatible
- PATCH: bug fixes and docs/internal changes

Local release steps (maintainers):
1. Ensure `main` is green (CI passing)
2. `npm run release` (uses standard-version to bump version and changelog)
3. `git push --follow-tags origin main`
4. Create a tag `vX.Y.Z` if not already created by step 2
5. GitHub Release is auto-generated from commits; the `release` workflow publishes to npm when a tag is pushed

### Pull Requests

- Include a clear description of the change
- Update README or docs if behavior changes
- Add a changelog entry under `Unreleased`

### Release

Maintainers:
- Bump version in `package.json`
- Update `CHANGELOG.md`
- `npm publish` (or via CI workflow)



