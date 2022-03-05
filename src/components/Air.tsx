import { Sprite } from "@inlet/react-pixi";
import { Texture } from "pixi.js";
import { memo } from "react";

type Props = {
  width: number;
  height: number;
  x: number;
  y: number;
}

function Air({ width, height, x, y }: Props) {
  return (
    <Sprite
      interactiveChildren={false}
      x={x}
      y={y}
      width={width}
      height={height}
      texture={Texture.WHITE}
      tint={0x87ceeb}
    />
  )
}

export default memo(Air);