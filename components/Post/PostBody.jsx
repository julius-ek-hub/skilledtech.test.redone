import Box from '@mui/material/Box';

import usePostContext from '../../hooks/usePostContext';

export default function PostBody() {
    const { post } = usePostContext();
    return (
        <Box>
            {post.body}
        </Box>
    )
}
