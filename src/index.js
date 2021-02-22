const core = require('@actions/core');
const SSM = require('aws-sdk/clients/ssm');

(async () => {
  const ssmParams = core.getInput('SSM_PARAMETERS', { required: true });

  core.startGroup('Injecting secret environment variables');

  const ssm = new SSM();

  let result;
  try {
    const regex = /(\w+)=\s*([^,\s*]*)/gi;
    let match;
    const params = [];

    while ((match = regex.exec(ssmParams)) !== null) {
      params.push({ envKey: match[1].toUpperCase(), ssmParam: match[2] });
    }

    for (const { envKey, ssmParam } of params) {
      result = await ssm
        .getParameter({
          Name: ssmParam,
          WithDecryption: true,
        })
        .promise();

      const secret = result && result.Parameter && result.Parameter.Value;

      if (!secret) {
        core.warning(`Secret ${envKey} seems to be empty`);
      }

      core.setSecret(secret || '');
      core.exportVariable(envKey, secret);
      core.info(`Secret ${envKey} injected`);
    }
  } catch (error) /* istanbul ignore next */ {
    core.setFailed(error.message);
    throw error;
  }

  core.endGroup();
})();
