import Link from 'next/link';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const PostsNavBar = () => (
    <Box sx={{ m: 1, ml: 2, display: 'flex' }}>
        <Typography variant="h4" marginTop={0} fontWeight="bold">Posts</Typography>
        <Link href="/posts/new">
            <Button sx={{ ml: 'auto' }} disableRipple variant='contained' size='small'>Create New</Button>
        </Link>
    </Box>
);

export default PostsNavBar