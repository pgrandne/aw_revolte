import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  tables: {
    Game: {
      schema: {
        done: "bool",
        number: "uint256",
        nft: "string",
        content: "string",
      }
    },
  },
  modules: [
    {
      name: "UniqueEntityModule",
      root: true,
      args: [],
    }
  ],
});
