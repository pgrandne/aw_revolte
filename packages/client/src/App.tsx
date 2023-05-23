import "./index.css";
import {
  AppContainer,
  Container,
  Card,
  Footer,
  TextLink,
} from "./theme";
import { GameForm, GameItem } from "./components";
import { useMUD } from "./MUDContext";
import { useEntityQuery } from "@latticexyz/react";
import { Has, getComponentValueStrict } from "@latticexyz/recs";
import { useEffect, useState } from "react";
import { LoadingModal } from "./components/LoadingModal";

export const App = () => {
  const {
    systemCalls: {
      addGame,
    },
    components: {
      Game,
      Rule,
    },
  } = useMUD();

  const colorIds = useEntityQuery([Has(Game)]);
  const RuleId = useEntityQuery([Has(Rule)]);
  const [loading, setLoading] = useState(true);
  const [creation, setCreation] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (RuleId.length === 0)
        addGame()
      else {
        const gameId = RuleId[0]
        const game = getComponentValueStrict(Rule, gameId);
        if (game.initialized === false)
          setCreation(true)
      }
    }
    else
      setTimeout(() => { setLoading(false) }, 7000)
  }, [loading])

  return (
    <div className="container h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <AppContainer>
        <div className="w-1/2 text-3xl font-sans text-white text-center">Color Game</div>
        <Card>
          <div className="grid grid-cols-3 grid-rows-3 gap-4 content-normal mb-2">
            {[...colorIds].map(id => {
              const gameData = getComponentValueStrict(Game, id);
              return <GameItem key={id} id={id} {...gameData} />
            })}
          </div>
        </Card>
        {creation && <GameForm id={RuleId[0]} setLoading={setLoading} />}
        <Footer>
          <TextLink href="https://v2.mud.dev">Github</TextLink>
        </Footer>
      </AppContainer>
      {loading && <LoadingModal />}
    </div>
  );
};
