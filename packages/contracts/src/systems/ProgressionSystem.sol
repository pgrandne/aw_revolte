// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { addressToEntity } from "../Utils.sol";
import { getUniqueEntity } from "@latticexyz/world/src/modules/uniqueentity/getUniqueEntity.sol";

import { Progression, ProgressionData } from "../codegen/Tables.sol";

contract ProgressionSystem is System {
  uint256 public number = 0;
  address public owner;

  function updateProgression(address player, uint256 chapter, uint256 episode, uint256 scene) public {
    // require(owner == _msgSender(), "Not authorized");
    bytes32 id = getUniqueEntity();
    number +=1;
    Progression.set(id, ProgressionData({ player:player, chapter: chapter, episode:episode, scene: scene }));
  }

}
