const core = require('@actions/core');
const SSM = require('aws-sdk/clients/ssm');


(async () => {
  const ssmParams = core.getInput('SSM_PARAMETERS', { required: true });

  core.startGroup('Injecting secret environment variables');

  console.log(ssmParams);

  const regex = /(\w+)=\s*([^,\s*]*)/gi;
  let match;

  while ((match = regex.exec(ssmParams)) !== null) {
    console.log('FOUND', match[1], match[2]);
    // expected output: "Found foo. Next starts at 9."
    // expected output: "Found foo. Next starts at 19."
  }


  // const ssm = new SSM();

  // let result;
  // try {
  //   result = await ssm
  //     .getParameter({
  //       Name: actionParam.ssmParameter,
  //       WithDecryption: true, // NOTE: this flag is ignored for String and StringList parameter types
  //     })
  //     .promise();
  // } catch (error) /* istanbul ignore next */ {
  //   core.setFailed(error.message);
  //   throw error;
  // }
  //
  // const envVar = actionParam.envVariable.toUpperCase();
  // const secret = result?.Parameter?.Value;
  //
  // if (!secret) {
  //   core.warning(`Secret value for environment variable ${envVar} appears to be empty`);
  // }
  //
  // core.setSecret(secret || '');
  // core.exportVariable(envVar, secret);
  // core.info(`Successfully set secret environment variable: ${envVar}`);

  core.endGroup();





})();




