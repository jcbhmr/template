# Template

๐ฐ๐ Basic GitHub template for anything

[![License](https://img.shields.io/github/license/jcbhmr/template)](./license.txt)

<div align="center">

![Click the "Use this template" button](https://user-images.githubusercontent.com/61068799/177676171-5d3d704a-1902-45d6-816b-97c0cdab5419.png)

</div>

๐ค Not what you're looking for? Check out [my other templates](https://github.com/jcbhmr?tab=repositories&type=template)!

## What's Included

- ๐ [Excellent `readme.md` template](./bootstrap/readme-template.ts)
- ๐ [Assortment of badges](./bootstrap/readme-badges.ts)
- ๐ท๏ธ [Starter labels with emojis ๐โจโ๏ธ](./bootstrap/labels.yml)
- ๐ [Always require status checks to pass before PR merging](./bootstrap/pr-status.ts)
- ๐ [Recommended Branch Protection rules](./bootstrap/branch-protection.ts)
- ๐ฅพ [Squash merging strategy](./bootstrap/pr-squash.ts)
- โจ [Autofills `readme` with repo name and description](./bootstrap/ctx.ts)
- ๐ฉโโ๏ธ [A copy of the MIT license](./bootstrap/license-template.ts)
- โ๏ธ [`TODO` โก๏ธ Issue Action](./.github/workflows/todo.yml)
- ๐ฆ [Generate next SemVer tag when a PR is merged](./.github/workflows/semver.yml)
- ๐งช [Run `test.sh` everytime something changes](./.github/workflows/test.yml)
- ๐ [Create a new Release each time a tag is created](./.github/workflows/release.yml)
- ๐ [Attach `build.sh` `artifacts/*` files when a release is created](./.github/workflows/release.yml)
- ๐งน [Self-cleaning bootstrap action when you clone this template](./.github/workflows/bootstrap.yml)
- โ [Creates PRs on your repo for this template's changes](./.github/workflows/updates.yml)

๐โโ๏ธ Check out [the bootstrapping Action](./github/workflows/bootstrap.yml) to see what happens when you clone this!

## General Workflow ๐ข

1. โ๏ธ Create an Issue
2. ๐ฉ Add that issue to a Project
3. โคด๏ธ Create a branch (name doesn't matter)
4. ๐ก Add commits to that branch (messages don't matter)
5. โจ๏ธ Create a PR with a descriptive title (title _does_ matter)
6. ๐ Add that PR to a Milestone
7. ๐ท๏ธ Add SemVer tags to your PR
8. โ๏ธ Make sure your PR completes all checks
9. ๐ฅพ Squash-merge PR into `trunk` (without changing title of auto-generated commit)
10. โจ Watch SemVer auto-bump Release
11. ๐ Watch the Release be pushed to the production Environment
12. ๐ Repeat

## Tool Philosophy

- Issues: Where you track tasks
- PRs: Where you track code
- Milestones: Where you track work progress
- Projects: Where you track potential work (and prioritize it)
- Releases: Where you publish final work versions
- Environments: Where you define an external view of the current Release
- Actions: Where you automate transitions between all these trackers
- Wiki: Where you document how to use the releases

This philosophy and strategy is very similar to the [.NET contributor Labels Milestones and Projects guide](https://docs.microsoft.com/en-us/contribute/dotnet/labels-projects)
