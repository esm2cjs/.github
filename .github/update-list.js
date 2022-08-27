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

  repos.sort((a, b) => a.name.localeCompare(b.name));

  github.log.debug("Repositories: ");
  for (const repo of repos) {
    github.log.debug(`- ${repo.name}`);
  }
  github.log.debug("");
  github.log.debug("");

  let output = "";
  for (const repo of repos) {
    github.log.debug(`Checking ${repo.name}...`);

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
      if (!packageJson.name.includes("@esm2cjs/")) {
        github.log.debug(
          `package.json -> name = "${packageJson.name}" - skipping`
        );
        continue;
      }
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

  github.log.debug("Final package list:");
  github.log.debug(output);

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
