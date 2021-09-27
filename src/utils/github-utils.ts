import { Label } from '../interfaces/label';
import { Octokit } from '@octokit/core';

// Gets all the labels in the specified repository.
export async function getLabels(octokit: Octokit, owner: string, repository: string) : Promise<Label[]> {
  const data = [];
  let page = 0;
  let response;
  const pageSize = 100;
  do {
    response = await octokit.request('GET /repos/{owner}/{repo}/labels', {
      owner,
      repo: repository,
      page: ++page,
      per_page: pageSize
    });

    for (const label of response.data) {
      data.push({
        name: label.name,
        description: label.description || '',
        color: label.color,
        alias: []
      })
    }
  } while (response.status === 200 && response.data.length > 0);
  return data;
}

// Creates a new label in the specified repository
export async function createLabel(octokit: Octokit, owner: string, repository: string, label: Label) : Promise<void> {
  const response = await octokit.request('POST /repos/{owner}/{repo}/labels', { owner, repo: repository, ...label });
  if (response.status !== 201) {
    console.error(`Failed to create label '${label.name}' in '${owner}/${repository}'`);
  } else {
    console.info(`Created label '${label.name}' in '${owner}/${repository}'`);
  }
}

// Updates a label in the specified repository
export async function updateLabel(octokit: Octokit, owner: string, repository: string, id: string, label: Label) : Promise<void> {
  const response = await octokit.request('PATCH /repos/{owner}/{repo}/labels/{name}', { owner, repo: repository, name: id, new_name: label.name, color: label.color, description: label.description });
  if (response.status !== 200) {
    console.error(`Failed to update label '${label.name}' in '${owner}/${repository}'`);
  } else {
    console.info(`Updated label '${label.name}' in '${owner}/${repository}'`);
  }
}
