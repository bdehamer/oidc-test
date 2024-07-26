const {getIDToken} = require('@actions/core');
const {CIContextProvider} = require('@sigstore/sign');

async function main() {
  console.log('-- Attempt: 1 -----------------------------------');
  let token = await getIDToken('nobody');
  let parts = token.split('.')
  console.log(JSON.stringify(parts));

  console.log('-- Attempt: 2 -----------------------------------');
  const provider = new CIContextProvider();
  token = await provider.getToken();
  parts = token.split('.')
  console.log(JSON.stringify(parts));
}

main();
