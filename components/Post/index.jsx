import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import PostBody from './PostBody';
import PostTitle from './PostTitle';
import AllComments from '../Comment/AllComments';

import usePostContext from '../../hooks/usePostContext';

export default function Post() {

    const { deleting, post } = usePostContext();

    return (
        <ListItem alignItems="flex-start" sx={{ position: 'relative' }}>
            <ListItemText
                primary={<PostTitle />}
                secondary={
                    <>
                        <PostBody />
                        <AllComments />
                    </>
                }
                secondaryTypographyProps={{ variant: 'div' }}
            />
            {deleting.includes(post.id) && (
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', backdropFilter: 'blur(10px)' }}>
                    <CircularProgress size={20} />
                    <Typography marginLeft={1}>Deleting</Typography>
                </Box>
            )}
        </ListItem>
    );
}

