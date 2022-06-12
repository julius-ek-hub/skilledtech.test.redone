import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import PostSkeleton from '../Skeletons/PostsSkeleton';

import View from '../View';
import Post from '.';
import PostsNavBar from './PostsNavBar';
import LoadMore from '../LoadMore';

import PostContext from '../../contexts/PostContext';

import usePost from '../../hooks/usePost';

function AllPosts() {

    const postsHook = usePost();
    const posts = postsHook.posts;
    const error = postsHook.postFetchError;
    const loading = postsHook.loadingPosts

    return (
        <View
            NavBarComponent={<PostsNavBar />}
            onScrolledToBottom={postsHook.fetch10Posts}>
            <List>
                {posts.map((postDetails, key) => (
                    <PostContext.Provider
                        value={{ ...postsHook, post: postDetails }} key={key}>
                        <Post />
                        {key < (posts.length - 1) && <Divider />}
                    </PostContext.Provider>
                ))}
            </List>
            {error && <Typography color="error" textAlign="center">{error}</Typography>}
            {loading && <PostSkeleton />}
            {!loading && <LoadMore onClick={postsHook.fetch10Posts} />}
        </View>
    );
}

export default AllPosts;