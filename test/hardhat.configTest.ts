import { expect } from "chai";
import { ethers, waffle } from "hardhat";
import { PRIVATE_KEY, ETHERSCAN_KEY, config } from "../hardhat.config";

describe("Gasless CCTP - Hardhat Config File", function () {

  it("should contain PRIVATE_KEY", function () {
    expect(PRIVATE_KEY).not.to.be.empty;
  });

  it("should contain ETHERSCAN_KEY", function () {
    expect(ETHERSCAN_KEY).not.to.be.empty;
  });

  it("should define the w3f, solidity, typechain, namedAccounts, networks and verify objects", function () {
    expect(config).to.have.property("w3f");
    expect(config).to.have.property("solidity");
    expect(config).to.have.property("typechain");
    expect(config).to.have.property("namedAccounts");
    expect(config).to.have.property("networks");
    expect(config).to.have.property("verify");
  });

  it("should verify w3f properties", function () {
    expect(config.w3f).to.be.an("object").which.has.all.keys("rootDir", "debug", "networks");
  });

  it("should verify solidity properties", function () {
    expect(config.solidity).to.be.an("object").which.has.all.keys("compilers");
  });

  it("should verify typechain properties", function () {
    expect(config.typechain).to.be.an("object").which.has.all.keys("outDir", "target");
  });

  it("should verify namedAccounts properties", function () {
    expect(config.namedAccounts).to.be.an("object").which.has.all.keys("deployer");
  });

  it("should verify networks properties", function () {
    expect(config.networks).to.be.an("object").which.has.all.keys("avalanche", "arbitrum");
  });

  it("should verify verify properties", function () {
    expect(config.verify).to.be.an("object").which.has.all.keys("etherscan");
  });

  it("should verify ethers properties", function () {
    expect(config.verify.etherscan).to.be.an("object").which.has.all.keys("apiKey");
  });

});
