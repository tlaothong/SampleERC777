const My777 = artifacts.require("My777");

require('@openzeppelin/test-helpers/configure')({ provider: web3.currentProvider, environment: 'truffle' });

const { singletons } = require('@openzeppelin/test-helpers');

module.exports = async function(deployer, network, accounts) {
  const erc1820 = await singletons.ERC1820Registry(accounts[0]);

  deployer.deploy(My777);
};