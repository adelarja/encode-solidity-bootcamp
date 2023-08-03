import { ethers } from "hardhat";
import { expect } from 'chai';
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { Ballot } from "../typechain-types";

const PROPOSALS = ["Proposal 1", "Proposal 2", "Proposal 3"];

async function deployContract() {
    const ballotFactory = await ethers.getContractFactory("Ballot");
    const ballotContract = await ballotFactory.deploy(
      PROPOSALS.map(ethers.encodeBytes32String)
    );
    await ballotContract.waitForDeployment();
    return ballotContract;
  }

describe("Ballot", async  () => {
    let ballotContract: Ballot;
    describe("When the contract is deployed", async () => {
        beforeEach(async() => {
            ballotContract = await loadFixture(deployContract);
        });

        it("Has the provided proposals", async () => {
            for (let index = 0; index < PROPOSALS.length; index++){
                const proposal = await ballotContract.proposals(index);
                expect(ethers.decodeBytes32String(proposal.name)).to.eq(PROPOSALS[index]);
            }
        })
        it("Has zero voter for all proposals", async () => {
            for (let index = 0; index < PROPOSALS.length; index++){
                const proposal = await ballotContract.proposals(index);
                expect(proposal.voteCount).to.eq(0n);
            }
        })
        it("sets the deployer address as chairperson", async () => {
            const accounts = await ethers.getSigners();
            const chairperson = await ballotContract.chairperson();

            expect(accounts[0].address).to.eq(chairperson);
        })
        it("sets the voting weight for the chairperson as 1", async () => {
            const accounts = await ethers.getSigners();
            const chairpersonVoter = await ballotContract.voters(accounts[0].address);

            expect(chairpersonVoter.weight).to.eq(1n);
        })
    });
});