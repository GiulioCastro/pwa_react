import { IParallaxProps } from "./Parallax.model";

import ParallaxView from "./Parallax.view";

export default function Parallax(props: IParallaxProps) {
  return <ParallaxView {...props} />;
}
