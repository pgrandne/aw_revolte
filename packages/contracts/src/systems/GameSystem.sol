// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { addressToEntity } from "../Utils.sol";
import { getUniqueEntity } from "@latticexyz/world/src/modules/uniqueentity/getUniqueEntity.sol";

import { Game, GameData } from "../codegen/Tables.sol";

contract GameSystem is System {
  uint256 public number = 0;

  function addColor(string memory nft, string memory content) public {
    bytes32 id = getUniqueEntity();
    number +=1;
    Game.set(id, GameData({ number: number, nft: nft, content:content, done: false }));
  }

  function toggleDone(bytes32 gameId) public {
    Game.setDone(gameId, !Game.getDone(gameId));
  }
}
