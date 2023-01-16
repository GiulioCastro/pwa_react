import { BoxProps } from "@mui/material/Box";

export interface ParallaxProps extends BoxProps {
    height: number | string;
    backgroundImage: string;
}

export interface IParallaxViewProps extends ParallaxProps {
    children: React.ReactNode;
}

export interface IParallaxProps extends IParallaxViewProps {
    
}
