# Template
🍰🚀 Basic GitHub template for anything

[![Use this template](https://user-images.githubusercontent.com/61068799/177652030-10a0b529-9b3f-410d-b4ed-c32deccd1a7b.png)](https://github.com/jcbhmr/template/generate)

**👀 See also**
- [jcbhmr/template-ts-lib](https://github.com/template-ts-lib)

## What's Included

- 📄 [Excellent `readme.md` template](./bootstrap/readme-template.ts)
- 📛 Assortment of badges
- 🏷️ [Starter labels with emojis 🐛✨✔️](./bootstrap/labels.json)
- 🚧 PR title linting
- 🔀 Require Actions to pass before PR merging
- 🔒 [Recommended Branch Protection rules](./bootstrap/branch-protection.ts)
- 🥾 Squash merging strategy
- ✨ Autofills `readme` with repo name and description
- 👩‍⚖️ A copy of [the MIT license](./bootstrap/license-template.ts)
- ✔️ [`TODO` ➡️ Issue Action](https://github.com/marketplace/actions/buluma-todo-action)
- 👷 [Standard CI scripts](https://github.com/jcbhmr/jcbhmr/discussions/45)

🏃‍♂️ Check out [the bootstrapping Action](./github/workflows/bootstrap.yml) that is triggered when you clone this repo to see what it does!

## General Workflow

- Use Issues for tasks and bugs
- Use PRs for completions to those tasks and bugs
- Use Milestones to track releases
- Use your own User-scoped Projects to track what you are doing
- Use Releases to trigger publishing to other places
- Use Environments to represent those other places (like a website hosting service or an NPM package)
- Use Actions to automate all of it
- Try to use the repo metadata to fill in parts of `package.json`-like files in Actions
- Favor conventional inferences over configuration files

### PR Merging 🔀

You may have noticed that this template has a rather opinionated view of how PRs and branches should be managed. This is because we want all your commits on the `trunk` branch to be _good commits_. How can we make that happen? Well, we can't define what you push to the `trunk` branch. As soon as you `git push`, it is already published. There is no going back. Instead, we circumvent this by adopting the following workflow:

1. A developer creates new branch called `jcbhmr-patch-45` (the name is irrelevant)
2. That dev then commits `Created script.js` and `Edited script.js` to the branch
3. A PR is opened to merge `jcbhmr-patch-45` into `trunk`
4. This PR is then linted via a GitHub Action to ensure that its title and body meet the commit standards (not the commits themselves)
5. The PR is then approved and squashed into a single commit _with the PR title as the commit title_
6. That good message from the PR title is then merged into `trunk`
7. The `trunk` branch now has a completely clean history of _good_ and _validated_ commits

The key is that _the only way to merge into `trunk` is to pass the PR title linting test_. This ensures that all `trunk` commits are satisfactory. No `Did stuff` commits should make it past the PR approvers (I hope)!
