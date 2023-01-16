import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { ICircularProgressViewProps } from './CircularProgressWithLabel.model';

export default function CircularProgressWithLabelView(props: ICircularProgressViewProps) {
  const {    
    setRef,
    textVariant = "caption",
    textColor = "text.secondary",
  ...progressProps
  } = props;

  return (
    <Box ref={setRef} sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress 
        variant="determinate"
        {...progressProps} 
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          component="div"
          variant={textVariant}
          color={textColor}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}