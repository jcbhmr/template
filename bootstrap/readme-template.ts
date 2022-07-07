/**
 * There are seven major reasons that a person is looking at your readme. You want
 * to make sure that you address each one in some fashion (even if only briefly).
 * 1. They want to use it
 * 2. They want to use it IN DETAIL
 * 2. They want to know how it works
 * 4. They want to modify it
 * 5. They want to contribute modifications
 * 6. They want a feature
 * 7. They found a bug
 *
 * To satisfy all of these use-cases, a good readme should...
 * - Tell you WHAT you are looking at
 * - Provide a general overiew of how to use it
 * - Link to detailed install/beginner instructions (Wiki)
 * - Point you to more extensive user docs about it (Wiki)
 * - Explain how to run the dev scripts & what they do (code)
 * - Link to a description of how the app is designed (code)
 * - Point to a contributing guide
 * - Mention the Issues tab for features and bugs
 *
 * Read more about Wiki vs in-source-tree docs in the readme
 */

import html from "@jcbhmr/html"
import md from "@jcbhmr/md"

export { readmeTemplate as default }

// For our purposes, it's the same as a string. Ideally, it would be a class that
// extends String with a validator that ensures it is a valid <user>/<repo> string.
type GithubRepoSlug = string

/** Returns a Markdown document that should be rendered to a string for the readme */
// This is NOT indented to make it easier to read/write since it is such a large string
const readmeTemplate = (slug: GithubRepoSlug, description: string) => md`

# \`${slug}\`

${
  // If there is NO description, remind the user to add one
  description.length === 0
    ? md`
      <!-- 🎗️ Add a description -->
      ✨ An awesome project
    `
    // If there isn't an emoji as the first character, add a tip about adding one
    : !description.match(/^\p{Extended_Pictographic}/u)
      ? md`
        <!-- 💡 Emojis can be great ways of grabbing people's attention -->
        ${description}
      `
      // Otherwise, just use the description as-is
      : description
}

${
  // This returns a Node that contains all the badges like License, CI Status, etc.
  badges(slug)
}

<div align="center">

<!-- 🎗️ Add a cover image -->
![](https://via.placeholder.com/600x400)

</div>

`
