import styled from "@emotion/styled";
import { useState } from "react";
import Tile from "./components/Tile";

export const App = () => {
  const [tiles, setTiles] = useState<number[]>([0]);

  const addTile = () => {
    const newId = tiles[0] + 1; //since the first element is always the newest element in array. We set the new tiles ID to the first elements ID + 1;
    setTiles([newId, ...tiles]);
    //will add tile to beginning of array, if we wanted to insert new tile directly above tile that clicked the button, we would have to extract tiles into new variable
    //then find index of tile that clicked the button, insert new tile directly before it in array. We would also have to modify how we are setting the IDs.
  };

  const removeTile = (id: number) => {
    //will only remove tile if array has more than 1 element
    if (tiles.length > 1) {
      let oldTiles = [...tiles];
      const index = oldTiles.indexOf(id);
      if (index > -1) {
        oldTiles.splice(index, 1); // Finds index of tile by its ID and removes it
      }
      setTiles(oldTiles);
    }
  };

  return (
    <Container>
      {tiles?.map((tile) => {
        return (
          <Tile
            id={String(tile)}
            key={tile}
            tiles={tiles}
            addTile={() => addTile()}
            removeTile={() => removeTile(tile)}
          ></Tile>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
