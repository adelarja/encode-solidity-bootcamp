// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "./MyERC20.sol";

contract TokenSale {
    uint256 public ratio;
    address public paymentToken;

    constructor(uint256 ratio_, address paymentToken_) {
        ratio = ratio_;
        paymentToken = paymentToken_;
    }
}


