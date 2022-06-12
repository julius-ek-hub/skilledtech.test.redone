import Box from '@mui/material/Box';
import CommentIcon from '@mui/icons-material/Comment';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';

import usePostContext from '../../hooks/usePostContext';

const CommetsButton = styled(Button)(({ theme }) => ({
    color: 'black',
    textTransform: 'none',
    marginTop: 4,
    '&:hover': {
        backgroundColor: theme.palette.divider
    }
}))

export default function CommentsCount() {

    const { post: { numberOfComments: n } } = usePostContext();

    return (

        <Box>
            <CommetsButton disableRipple>
                <CommentIcon color='primary' sx={{ mr: 1 }} /> {n} Comment{n > 1 && 's'}
            </CommetsButton>
        </Box>
    );
}
