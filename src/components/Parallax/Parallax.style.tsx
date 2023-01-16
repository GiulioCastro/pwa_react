import { styled } from "@mui/material/styles";
import { ParallaxProps } from './Parallax.model';

export const Parallax = styled('section')<ParallaxProps>(({ height, backgroundImage }) => ({	
	width: '100%',
	height,
	position: 'relative',
	backgroundImage,
	backgroundRepeat: 'no-repeat',
	backgroundAttachment: 'fixed',
	backgroundSize: 'cover',
	backgroundPosition: 'center'
}));
