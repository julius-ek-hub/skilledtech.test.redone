import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Menu from './Menu';

import usePostContext from '../../hooks/usePostContext';

export default function PostTitle() {

    const { post } = usePostContext();

    return (
        <Box display="flex">
            <Typography variant='h5' fontWeight="bolder">{post.title}</Typography>
            <Menu />
        </Box>
    );
}

