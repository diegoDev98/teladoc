import React, { useState } from "react";
import styled from "@emotion/styled";
import logo from "../logo.svg";
import { Button } from "../Button";
import { keyframes } from "@emotion/react";
import { useWindowSize } from "../useWindowSize";

interface TileProps {
  id: string;
  addTile: () => void;
  removeTile: () => void;
  tiles: React.ReactNode[];
}

export default function Tile(props: TileProps) {
  const size = useWindowSize();
  const [isRotated, setIsRotated] = useState(false);

  const handleButtonClick = () => {
    setIsRotated(!isRotated);
  };

  return (
    <TileContainer id={props.id}>
      <Logo src={logo} alt="logo" isRotated={isRotated} />
      {/*OK so normally what I would do to resize the buttons is just use a media query in the styled component, but for the sake of this exercise I will give the buttons a class that will apply when the width is <= 500px */}
      <Button
        text="Toggle rotation direction"
        expand={size.width <= 500}
        onClick={handleButtonClick}
      />
      <Button
        text="Insert new logo before this one"
        expand={size.width <= 500}
        onClick={props.addTile}
      />
      <Button
        text="Remove this logo"
        expand={size.width <= 500}
        onClick={props.removeTile}
      />
    </TileContainer>
  );
}

const TileContainer = styled.div`
  width: 100%;
  border-top: 1px solid #484848;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  gap: 0.5rem;
`;
const rotation = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;
const Logo = styled.img<{ isRotated: boolean }>`
  height: 10rem;
  pointer-events: none;
  animation: ${rotation} infinite 20s linear;
  animation-direction: ${({ isRotated }) => (isRotated ? "reverse" : "normal")};
`;
