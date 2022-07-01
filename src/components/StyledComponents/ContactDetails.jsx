import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Text from '@mui/material/Typography';
import MuiAvatar from '@mui/material/Avatar';
import MuiDialogTitle from "@mui/material/DialogTitle";


export const Avatar = styled(MuiAvatar)(({ theme: { palette }, gender }) => ({
    border: `3px solid ${gender === 'male' ? palette.error.main : palette.success.main}`,
    height: 50,
    width: 50,
    marginRight: '10px'
}));

export const AvatarLarge = styled(Avatar)(({ theme }) => ({
    height: 120,
    width: 120,
    marginRight: 'unset',
    boxShadow: theme.shadows[10]
}));

export const ImageBox = styled(Box)(() => ({
    height: '300px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
}));

export const DialogTitle = styled(MuiDialogTitle)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
}));

export const Name = styled(Text)(() => ({
    fontWeight: 600,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
}));

export const Cell = styled(Name)(() => ({
    fontSize: 15,
    fontWeight: 'unset',
    whiteSpace: 'nowrap'
}));

export const ActionButtonsContainer = styled(Box)(() => ({
    display: "flex",
    gap: "20px",
}))
