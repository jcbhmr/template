# Template

🍰🚀 Basic GitHub template for anything

[![Use this template](https://user-images.githubusercontent.com/61068799/177652030-10a0b529-9b3f-410d-b4ed-c32deccd1a7b.png)](https://github.com/jcbhmr/template/generate)

![License](https://img.shields.io/github/license/jcbhmr/template)

[![jcbhmr/template-ts-lib](https://github-readme-stats.vercel.app/api/pin/?username=jcbhmr&repo=template-ts-lib&show_owner=true)](https://github.com/jcbhmr/template-ts-lib)

## What's Included

- 📄 [Excellent `readme.md` template](./bootstrap/readme-template.ts)
- 📛 [Assortment of badges](./bootstrap/readme-badges.ts)
- 🏷️ [Starter labels with emojis 🐛✨✔️](./bootstrap/labels.yml)
- 🔀 [Always require status checks to pass before PR merging](./bootstrap/pr-status.ts)
- 🔒 [Recommended Branch Protection rules](./bootstrap/branch-protection.ts)
- 🥾 [Squash merging strategy](./bootstrap/pr-squash.ts)
- ✨ [Autofills `readme` with repo name and description](./bootstrap/ctx.ts)
- 👩‍⚖️ [A copy of the MIT license](./bootstrap/license-template.ts)
- ✔️ [`TODO` ➡️ Issue Action](./.github/workflows/todo.yml)
- 🚦 [Generate next SemVer tag when a PR is merged](./.github/workflows/semver.yml)
- 🧪 [Run `test.sh` everytime something changes](./.github/workflows/test.yml)
- 🚚 [Create a new Release each time a tag is created](./.github/workflows/release.yml)
- 🔗 [Attach `build.sh` `artifacts/*` files when a release is created](./.github/workflows/release.yml)
- 🧹 [Self-cleaning bootstrap action when you clone this template](./.github/workflows/bootstrap.yml)

🏃‍♂️ Check out [the bootstrapping Action](./github/workflows/bootstrap.yml) to see what happens when you clone this!

## General Workflow 🏢

1. Create an Issue ☑️
2. Add that issue to a Project 🚩
3. Create a branch (name doesn't matter) ⤴️
4. Add commits to that branch (names don't matter) 💡
5. Create a PR with a descriptive title (this _does_ matter) ⌨️
6. Add that PR to a Milestone 🏁
7. Add SemVer tags to your PR to inform the bots what to do with it 🏷️
8. Make sure PR completes all checks ✔️
9. Squash-merge PR into `trunk` (without changing title of auto-generated commit) 🥾
10. Watch SemVer auto-bump Release ✨
11. Watch the Release be pushed to the production Environment 🚀
12. Repeat 🔁

- Issues: Where you track tasks
- PRs: Where you track code
- Milestones: Where you track work progress
- Projects: Where you track potential work (and prioritize it)
- Releases: Where you publish final work versions
- Environments: Where you define an external view of the current Release
- Actions: Where you automate transitions between all these trackers

This philosophy and strategy is very similar to the [.NET contributor Labels Milestones and Projects guide](https://docs.microsoft.com/en-us/contribute/dotnet/labels-projects)

[^1]: @jcbhmr personally dislikes Projects, but they are a valid way to work
