/**
 * 📖 Readme template
 *
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
const readmeTemplate = ({ slug, description }: { slug: GithubRepoSlug, description: string }) => md`

# \`${slug}\`

${
  // Add a suggestion if the description isn't "catchy" enough. In this case, "catchy"
  // means it has an emoji at the start of it.
  // Ref: https://stackoverflow.com/a/64007175
  description.match(/^\p{Extended_Pictographic}/u)
    // If it does, just include it
    ? description
    // If it doesn't, we add an extra comment node
    : md`
      ${html.comment("💡 Tip: Use emojis to grab attention. Colorful pictures are great 😍!")}
      ${description}
    `
}

`
