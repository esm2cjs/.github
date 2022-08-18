// @ts-check
/// <reference path="types.d.ts" />

const fs = require("fs/promises");
const path = require("path");

const listMarkerStart = "<!-- BEGIN PACKAGES -->";
const listMarkerEnd = "<!-- END PACKAGES -->";

/**
 * @param {{github: Github, context: Context}} param
 */
async function main(param) {
  const { github, context } = param;

  const { data: repos } = await github.rest.repos.listForOrg({
    org: "esm2cjs",
    type: "forks",
  });

  let output = "";
  for (const repo of repos.sort((a, b) => a.name.localeCompare(b.name))) {
    // Check if package.json is already using our scope (or if this is a WIP)
    const { data: contents } = await github.rest.repos.getContent({
      owner: "esm2cjs",
      repo: repo.name,
      path: "package.json",
    });
    if (contents.type === "file" && "content" in contents) {
      const packageJson = JSON.parse(
        Buffer.from(contents.content, "base64").toString()
      );
      if (!packageJson.name.includes("@esm2cjs/")) continue;
    }

    output += `* [\`@${repo.full_name}\`](${repo.html_url})`;
    const { data: details } = await github.rest.repos.get({
      owner: "esm2cjs",
      repo: repo.name,
    });
    if (details.parent) {
      output += ` - Forked from [${details.parent.full_name}](${details.parent.html_url})`;
    }
    output += "\n";
  }

  const readmePath = path.join(__dirname, "..", "profile/README.md");
  const readme = await fs.readFile(readmePath, "utf8");

  const newReadme =
    readme.slice(0, readme.indexOf(listMarkerStart) + listMarkerStart.length) +
    "\n" +
    output +
    readme.slice(readme.indexOf(listMarkerEnd));

  await fs.writeFile(readmePath, newReadme, "utf8");
}
module.exports = main;
