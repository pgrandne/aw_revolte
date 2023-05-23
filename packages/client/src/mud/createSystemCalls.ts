import { ClientComponents } from "./createClientComponents";
import { SetupNetworkResult } from "./setupNetwork";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

const entityToBytes32 = (entity: string) => {
  return "0x" + entity.replace("0x", "").padStart(64, "0");
};

export function createSystemCalls(
  { worldSend }: SetupNetworkResult,
  components: ClientComponents
) {
  const addColor = (nft:string,content:string) => {
    worldSend("addColor", [nft,content])
  }

  const toggleDone = (id:string) => {
    worldSend("toggleDone", [entityToBytes32(id)])
  }

  const addGame = () => {
    worldSend("addGame",[])
  }

  const launchGame = (id:string) => {
    worldSend("launchGame", [entityToBytes32(id)])
  }

  return {
    addColor,
    toggleDone,
    addGame,
    launchGame,
  };

}
