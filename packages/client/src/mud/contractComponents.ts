/* Autogenerated file. Do not edit manually. */

import { TableId } from "@latticexyz/utils";
import { defineComponent, Type as RecsType, World } from "@latticexyz/recs";

export function defineContractComponents(world: World) {
  return {
    Game: (() => {
      const tableId = new TableId("", "Game");
      return defineComponent(
        world,
        {
          done: RecsType.Boolean,
          number: RecsType.BigInt,
          nft: RecsType.String,
          content: RecsType.String,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
  };
}
