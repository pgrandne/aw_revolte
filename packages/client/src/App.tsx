import React from "react";
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

export const App = () => {
  const {
    components: {
      Game,
    },
  } = useMUD();

  const gameIds = useEntityQuery([Has(Game)]);

  return (
    <Container>
      <AppContainer>
        <Card>
          <div className="grid gap-4 grid-cols-3 grid-rows-3 mb-2">
            {[...gameIds].map(id => {
              const gameData = getComponentValueStrict(Game, id);
              return <GameItem key={id} id={id} {...gameData} />
            })}
          </div>
          <GameForm />
        </Card>
        {/* <Hero /> */}
        <Footer>
          <TextLink href="https://v2.mud.dev">Github</TextLink>
        </Footer>
      </AppContainer>
    </Container >
  );
};
