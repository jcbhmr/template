# Template

🍰🚀 Basic GitHub template for anything

[![License](https://img.shields.io/github/license/jcbhmr/template)](./license.txt)

<div align="center">

![Click the "Use this template" button](https://user-images.githubusercontent.com/61068799/177676171-5d3d704a-1902-45d6-816b-97c0cdab5419.png)

</div>

🤔 Not what you're looking for? Check out [my other templates](https://github.com/jcbhmr?tab=repositories&type=template)!

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
- ☁ [Creates PRs on your repo for this template's changes](./.github/workflows/updates.yml)

🏃‍♂️ Check out [the bootstrapping Action](./github/workflows/bootstrap.yml) to see what happens when you clone this!

## General Workflow 🏢

1. ☑️ Create an Issue
2. 🚩 Add that issue to a Project
3. ⤴️ Create a branch (name doesn't matter)
4. 💡 Add commits to that branch (messages don't matter)
5. ⌨️ Create a PR with a descriptive title (title _does_ matter)
6. 🏁 Add that PR to a Milestone
7. 🏷️ Add SemVer tags to your PR
8. ✔️ Make sure your PR completes all checks
9. 🥾 Squash-merge PR into `trunk` (without changing title of auto-generated commit)
10. ✨ Watch SemVer auto-bump Release
11. 🚀 Watch the Release be pushed to the production Environment
12. 🔁 Repeat

## Tool Philosophy

- Issues: Where you track tasks
- PRs: Where you track code
- Milestones: Where you track work progress
- Projects: Where you track potential work (and prioritize it)
- Releases: Where you publish final work versions
- Environments: Where you define an external view of the current Release
- Actions: Where you automate transitions between all these trackers

This philosophy and strategy is very similar to the [.NET contributor Labels Milestones and Projects guide](https://docs.microsoft.com/en-us/contribute/dotnet/labels-projects)
