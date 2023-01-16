import { styled } from "@mui/material/styles";

export const Wrapper = styled('div')(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	height: "auto",
	width: "100%",
}));

export const Section = styled('section')(({ theme }) => ({
	paddingTop: theme.spacing(4),
	paddingBottom: theme.spacing(4)
}));