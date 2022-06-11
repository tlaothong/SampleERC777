// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

contract My777 is ERC777 {
    constructor()
        ERC777("My 777 Coin", "MY777", new address[](0))
    {
        _mint(msg.sender, 50000, "", "");
    }
}