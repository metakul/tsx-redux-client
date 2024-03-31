import { styled, useTheme } from '@mui/material';
import {
  Container,
  Typography,
  Card,
  Button,
} from '@mui/material';
import { tokens } from './layout/Theme/themes';

// Define colors dynamically based on the current theme mode
const getColorValues = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();
  return tokens(theme.palette.mode);
};

//mint page css
export const StyledContainer = styled(Container)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledContent = styled(Card)(({ theme }) => ({
  // background: colors.primary[900],
  color: theme.palette.common.white,
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  border: '1px solid #ccc',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
}));

export const StyledCardHeader = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
  color:getColorValues().blueAccent[500]
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(1.5, 4),
}));

export const LoadingGif = styled('img')({
  width: '30px',
  height: '30px',
});
