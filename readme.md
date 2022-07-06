# Template
🍰🚀 Basic GitHub template for anything

[![Use this template](https://user-images.githubusercontent.com/61068799/177652030-10a0b529-9b3f-410d-b4ed-c32deccd1a7b.png)](https://github.com/jcbhmr/template/generate)

**🔎 See also**
- [jcbhmr/template-ts-lib](https://github.com/template-ts-lib)

## What's Included

- 📄 Excellent `readme.md` template
- 🏷️ Starter labels with emojis 🐛✨✔️
- 🚧 [PR title linting](#pr-merging)
- 🔀 Require Actions to pass before merge
- 🔒 [Recommended Branch Protection rules](#branch-protection)
- 🥾 Squash merging strategy
- ✨ Autofills `readme` with repo name and description
- 👩‍⚖️ A copy of [the MIT license](http://billpatrianakos.me/blog/2016/07/28/why-i-use-the-mit-license/)
- 🎗️ Per-file hints to include things after cloning
- ✔️ [`TODO:` ➡️ Issue Action](#todo-action)
- 👷 [Standard CI scripts](https://github.com/jcbhmr/jcbhmr/discussions/45)

### Bootstrap Action

When you first instantiate this template, there is [a bootstrap GitHub Action](./.github/workflows/bootstrap.yml) that will...
1. Replace this `readme.md` with the one evaluated from `bootstrap/readme-template.ts`
2. Replace the `license.txt` with the one evaluated from `bootstrap/license-template.ts`
4. Remove the `bootstrap.yml` action (and associated `bootstrap/` files)
5. Commit and push those changes
