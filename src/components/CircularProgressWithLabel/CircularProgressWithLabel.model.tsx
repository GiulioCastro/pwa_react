import { CircularProgressProps } from '@mui/material/CircularProgress';
import { Variant } from '@mui/material/styles/createTypography';

export interface ICircularProgressViewProps extends CircularProgressProps {
	value: number;
	textVariant?: Variant | 'inherit'
	textColor?: string;
    setRef: (ref: React.Ref<unknown>) => void;
}

export interface ICircularProgressProps extends CircularProgressProps {
    progress: number;
	textVariant?: Variant | 'inherit'
	textColor?: string;
}