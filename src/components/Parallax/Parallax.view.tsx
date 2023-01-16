import { Parallax } from "./Parallax.style";
import { IParallaxViewProps } from "./Parallax.model";

export default function ParallaxView(props: IParallaxViewProps) {

  return (
    <Parallax backgroundImage={props.backgroundImage} height={props.height}>
      {props.children}
    </Parallax>
  );
}
