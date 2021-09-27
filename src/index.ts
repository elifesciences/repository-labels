// Quick and dirty program to update labels in GitHub repos...
// - Catch errors.
// - Document.
// - Add usage.
// - Update README.
// - Add to CI.

import { argv } from 'process';
import { default as labels } from './labels/index';
import { Octokit } from '@octokit/core';
import { getToken, getRepository, getOrganistation } from './utils/cli-utils';
import { createLabel, getLabels, updateLabel } from './utils/github-utils';
import { compareLabel, compareLabelByName, isLabelNameAnAlias } from './utils/label-utils';

const org = getOrganistation(argv, process.env); // The name of the GitHub organistation where the target repo resides.
const repo = getRepository(argv, process.env); // The name of the GitHub repository to update the labels in.
const token = getToken(argv, process.env); // The GitHub API token to use when creating or updating labels.

if (org === '' || repo === '' || token === '') {
  console.info(`${process.argv[0]} [opts]`);
  process.exit(1);
}

let octokit = new Octokit({ auth: token });

console.info(`Retrieving labels for '${org}/${repo}'`);

const currentLabels = await getLabels(octokit, org, repo);

console.info(`Found '${labels.length}' labels in '${org}/${repo}'`);

// For each label we want in the repository.
for (const label of labels) {
  let found = false;

  // Compare against the current labels in the repository.
  for (let currentLabel of currentLabels) {
    // First, check to see if a label with the same name exists...
    if (compareLabelByName(currentLabel.name, label)) {
      // Is it an exact match? If so then no-op, else update...
      if (!compareLabel({ name: currentLabel.name, color: currentLabel.color, description: currentLabel.description || '', alias: [] }, label)) {
        await updateLabel(octokit, org, repo, currentLabel.name, label).catch((e) => console.error(e.message));
      }
      found = true;
      break;
    }
    // Otherwise, does it match an alias at all? If so, then update...
    if (isLabelNameAnAlias(currentLabel.name, label)) {
      await updateLabel(octokit, org, repo, currentLabel.name, label).catch((e) => console.error(e.message));
      found = true;
      break;
    }
  }

  // If no match was found, then create a new label...
  if (!found) {
    await createLabel(octokit, org, repo, label).catch((e) => console.error(e.message));
  }
}
