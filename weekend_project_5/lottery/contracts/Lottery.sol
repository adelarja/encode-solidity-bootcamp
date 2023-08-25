// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import { LotteryToken } from "./LotteryToken.sol";

contract Lottery is Ownable{
    LotteryToken public paymentToken;
    bool public betsOpen;
    uint256 public betsClosingTime;

    constructor() {
        paymentToken = new LotteryToken("Name", "SYM");
    }

    /// @notice Passes when the lottery is at closed state
    modifier whenBetsClosed() {
        require(!betsOpen, "Lottery is open");
        _;
    }

    /// @notice Passes when the lottery is at open state and the current block timestamp is lower than the lottery closing date
    modifier whenBetsOpen() {
        require(
            betsOpen && block.timestamp < betsClosingTime,
            "Lottery is closed"
        );
        _;
    }

    function openBets(uint256 closingTime) external whenBetsClosed onlyOwner {
        require(
            closingTime > block.timestamp,
            "Closing time must be in the future"
        );
        betsOpen = true;
        betsClosingTime = closingTime;
    }
}
