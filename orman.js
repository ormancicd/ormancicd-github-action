const core = require('@actions/core');
const github = require('@actions/github');

try {
  const organizationID = core.getInput('organization-id');
  const plantingAreaID = core.getInput('planting-area-id');
  const numberOfTrees = core.getInput('agac-sayisi');
  
  let response = `Merhaba ${process.env.GITHUB_ACTOR}! ${plantingAreaID} bölgesinde ${organizationID} adına ${numberOfTrees} adet ağaç dikilecektir.`;
  core.setOutput("response", response);
} catch (error) {
  core.setFailed(error.message);
}