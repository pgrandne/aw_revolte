import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  tables: {
    Progression: {
      schema: {
        player: "address",
        chapter: "uint256",
        episode: "uint256",
        scene: "uint256",
      }
    },
    Rule: {
      schema: {
        initialized:"bool",
      }
    }
  },
  modules: [
    {
      name: "UniqueEntityModule",
      root: true,
      args: [],
    }
  ],
});
